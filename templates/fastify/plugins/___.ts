import fp from 'fastify-plugin'
import { {{capitalize operation_name}}Service, {{capitalize operation_name}} } from '@hospitalrun-org/core'

export default fp((fastify, opts, next) => {
    const {{camelCase operation_name}}Service = new {{capitalize operation_name}}Service(opts)
{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
    /**
     * @param {Object} options
    {{#each ../parameters}}
    {{#if this.name}}
     * @param {{../../../../openbrace}}{{capitalize type}}{{../../../../closebrace}} options.{{name}} {{inline description}}
    {{/if}}
    {{/each}}
     * @throws {Error}
     * @return {Promise}
     */
    fastify.decorate('{{../operationId}}', ({{camelCase ../../../operation_name}}: {{capitalize ../../../operation_name}}) => {
        return {{camelCase ../../../operation_name}}Service.{{../operationId}}({{camelCase ../../../operation_name}})
    })
    {{/validMethod}}
  {{/each}}
{{/each}}
    next()
})

declare module 'fastify' {
    interface FastifyInstance {
{{#each operation}}
  {{#each this.path}}
    {{#validMethod @key}}
        {{../operationId}}(): {{capitalize ../../../operation_name}}
    {{/validMethod}}
  {{/each}}
{{/each}}
    }
}
