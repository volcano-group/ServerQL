import { makeExecutableSchema } from 'graphql-tools'

import module from './users/users'

import Schema from './Schema.graphql'

const typeDefs = [Schema, module.schema]

const resolvers = module.resolverFunctions

export default makeExecutableSchema({
  typeDefs,
  resolvers
})