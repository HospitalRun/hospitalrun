{{#each @root.swagger.endpoints}}
{{#endsWith @root.swagger.basePath '/'}}
export { {{capitalize ..}} } from './model/{{..}}'
import {{capitalize ..}}Service from './service/{{..}}'
{{else}}
export { {{capitalize ..}} } from './model/{{..}}'
import {{capitalize ..}}Service from './service/{{..}}'
{{/endsWith}}
{{/each}}

export {
{{#each @root.swagger.endpoints}}
{{#endsWith @root.swagger.basePath '/'}}
 {{capitalize ..}}Service,
{{else}}
  {{capitalize ..}}Service,
{{/endsWith}}
{{/each}}
}