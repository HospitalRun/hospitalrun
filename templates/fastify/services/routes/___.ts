import { Server, IncomingMessage, ServerResponse } from 'http'
import { FastifyInstance } from 'fastify'
import { nextCallback } from 'fastify-plugin'

export default(
    fastify: FastifyInstance<Server, IncomingMessage, ServerResponse>,
    opts: {},
    next: nextCallback,
) => {
{{#each headOperation}}
  {{#each this.path}}
    {{#validMethod @key}}
    /**
     {{#each ../descriptionLines}}
     * {{{this}}}
     {{/each}}
     */
    fastify.{{@key}}('{{../../subresource}}', async (request, reply) => {
      const options = {
      {{#if ../requestBody}}
      body: request.body{{#compare (lookup ../parameters 'length') 0 operator = '>' }},{{/compare}}
      {{/if}}
        {{#each ../parameters}}
          {{#equal this.in "query"}}
            {{{quote ../name}}}: request.query['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "path"}}
            {{{quote ../name}}}: request.params['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "header"}}
            {{{quote ../name}}}: request.header['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
        {{/each}}
        };
        console.log(options)
        try {
          const result = await fastify.{{../operationId}}();
          {{#ifNoSuccessResponses ../responses}}
            reply.header('X-Result', result.data).code(200).send();
          {{else}}
            reply.code(result.code || 200).send(result);
          {{/ifNoSuccessResponses}}
          } catch (err) {
          {{#ifNoErrorResponses ../responses}}
            reply.code(500).send({
              status: 500,
              error: 'Server Error'
            });
          {{else}}
          next(err);
          {{/ifNoErrorResponses}}
          }
        });
        {{/validMethod}}
      {{/each}}
    {{/each}}

    {{#each operation}}
      {{#each this.path}}
        {{#validMethod @key}}
    /**
     {{#each ../descriptionLines}}
     * {{{this}}}
     {{/each}}
     */
    fastify.{{@key}}('{{../../subresource}}', async (request, reply) => {
      const options = {
        {{#if ../requestBody}}
        body: request.body{{#compare (lookup ../parameters 'length') 0 operator = '>' }},{{/compare}}
        {{/if}}
        {{#each ../parameters}}
          {{#equal this.in "query"}}
        {{{quote ../name}}}: request.query['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "path"}}
        {{{quote ../name}}}: request.params['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "header"}}
        {{{quote ../name}}}: request.header['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#match @../key "(post|put)"}}
            {{#equal ../in "body"}}
        {{{quote ../name}}}: request.body['{{../name}}']{{#unless @last}},{{/unless}}
            {{/equal}}
          {{/match}}
        {{/each}}
      };
      console.log(options)
      try {
        const result = await fastify.{{../operationId}}();
        {{#ifNoSuccessResponses ../responses}}
        reply.code(200).send(result);
        {{else}}
        reply.code(200).send(result);
        {{/ifNoSuccessResponses}}
      } catch (err) {
        {{#ifNoErrorResponses ../responses}}
        reply.code(500).send({
          status: 500,
          error: 'Server Error'
        });
        {{else}}
        next(err);
        {{/ifNoErrorResponses}}
      }
    });
    {{/validMethod}}
  {{/each}}
{{/each}}
    next()
}
