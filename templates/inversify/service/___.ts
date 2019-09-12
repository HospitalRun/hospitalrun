import PouchDB from 'pouchdb'
import { {{capitalize operation_name}} } from '../model/{{camelCase operation_name}}'
import Service, {DatabaseSync} from '../Service'
export default class {{capitalize operation_name}}Service implements Service {
    dbs: DatabaseSync = {
        // TODO: Move db config to constructor OR setup helper to tell if we are NodeJS/Browser and prefix filepath in Node
        cache: new PouchDB<PouchDB.Core.Document<{{capitalize operation_name}}>>('./.data/{{camelCase operation_name}}'),
        remote: new PouchDB<PouchDB.Core.Document<{{capitalize operation_name}}>>('https://{{@root.swagger.host}}{{@root.swagger.basePath}}/{{camelCase operation_name}}'),
        master: new PouchDB<PouchDB.Core.Document<{{capitalize operation_name}}>>('https://{{@root.swagger.host}}{{@root.swagger.basePath}}/master')
    }
    constructor(sync: any){
      if(sync) {
          //this.dbs.cache.sync(this.dbs.remote, {
          // live: true,
          //  retry: true
          //}).on('change', function (change: any) {
          //  // yo, something changed!
          //}).on('paused', function (info: any) {
          //  // replication was paused, usually because of a lost connection
          //}).on('active', function (info: any) {
          //  // replication was resumed
          //}).on('error', function (err: any) {
          //  // totally unhandled error (shouldn't happen)
          //});
      }
    }
{{#each headOperation}}
  {{#each this.path}}
    {{#validMethod @key}}
    /**
     {{#each ../descriptionLines}}
     * {{{this}}}
     {{/each}}
     */

    this.cache.{{@key}}('{{../../subresource}}', async (req, res, next) => {
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
          const result = await fastify.{{../operationId}}(options);
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
    {{../operationId}}({
        {{#if ../requestBody}}
        body: req.body{{#compare (lookup ../parameters 'length') 0 operator = '>' }},{{/compare}}
        {{/if}}
        {{#each ../parameters}}
          {{#equal this.in "query"}}
        {{{quote ../name}}}
          {{/equal}}
          {{#equal this.in "path"}}
        {{{quote ../name}}}
          {{/equal}}
          {{#equal this.in "header"}}
        {{{quote ../name}}}
          {{/equal}}
          {{#match @../key "(post|put)"}}
            {{#equal ../in "body"}}
        {{{quote ../name}}}
            {{/equal}}
          {{/match}}
        {{/each}}
    }: {{capitalize ../../../operation_name}}){
        return this.dbs.cache.{{@key}}(...arguments)
    }
        {{/validMethod}}
    {{/each}}
{{/each}}
}
