//TODO: const {{camelCase operation_name}} = require('../services/{{operation_name}}');
module.exports = function (fastify, opts, next) {
{{#each headOperation}}
  {{#each this.path}}
    {{#validMethod @key}}
    /**
     {{#each ../descriptionLines}}
     * {{{this}}}
     {{/each}}
     */
    fastify.{{@key}}('{{../../subresource}}', async (req, res, next) => {
      const options = {
      {{#if ../requestBody}}
      body: req.body{{#compare (lookup ../parameters 'length') 0 operator = '>' }},{{/compare}}
      {{/if}}
        {{#each ../parameters}}
          {{#equal this.in "query"}}
            {{{quote ../name}}}: req.query['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "path"}}
            {{{quote ../name}}}: req.params['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "header"}}
            {{{quote ../name}}}: req.header['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
        {{/each}}
        };

        try {
          const result = await fastify.{{camelCase ../../../operation_name}}.{{../operationId}}(options);
          {{#ifNoSuccessResponses ../responses}}
            res.header('X-Result', result.data).status(200).send();
          {{else}}
            res.status(result.status || 200).send(result.data);
          {{/ifNoSuccessResponses}}
          } catch (err) {
          {{#ifNoErrorResponses ../responses}}
            return res.status(500).send({
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
    fastify.{{@key}}('{{../../subresource}}', async (req, res, next) => {
      const options = {
        {{#if ../requestBody}}
        body: req.body{{#compare (lookup ../parameters 'length') 0 operator = '>' }},{{/compare}}
        {{/if}}
        {{#each ../parameters}}
          {{#equal this.in "query"}}
        {{{quote ../name}}}: req.query['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "path"}}
        {{{quote ../name}}}: req.params['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#equal this.in "header"}}
        {{{quote ../name}}}: req.header['{{../name}}']{{#unless @last}},{{/unless}}
          {{/equal}}
          {{#match @../key "(post|put)"}}
            {{#equal ../in "body"}}
        {{{quote ../name}}}: req.body['{{../name}}']{{#unless @last}},{{/unless}}
            {{/equal}}
          {{/match}}
        {{/each}}
      };

      try {
        const result = await fastify.{{camelCase ../../../operation_name}}.{{../operationId}}(options);
        {{#ifNoSuccessResponses ../responses}}
        res.status(200).send(result.data);
        {{else}}
        res.status(result.status || 200).send(result.data);
        {{/ifNoSuccessResponses}}
      } catch (err) {
        {{#ifNoErrorResponses ../responses}}
        return res.status(500).send({
          status: 500,
          error: 'Server Error'
        });
        {{else}}
        next(err);
        {{/ifNoErrorResponses}}
      }
    });
next()
    {{/validMethod}}
  {{/each}}
{{/each}}
}
