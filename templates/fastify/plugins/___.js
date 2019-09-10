'use strict'

const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
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
    fastify.decorate('{{../operationId}}', function () {
        return {
            status: 200,
            data: '{{../operationId}} ok!'
          }
    })
    {{/validMethod}}
  {{/each}}
{{/each}}
    next()
})
