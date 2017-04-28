import myGraphQLSchema from './schema'

const server = require('graphql-server-micro')

module.exports = server.microGraphql({
  schema: myGraphQLSchema
})
