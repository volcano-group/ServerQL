var server = require('graphql-server-micro')

const myGraphQLSchema = {}

module.exports = server.microGraphql({ schema: myGraphQLSchema })
