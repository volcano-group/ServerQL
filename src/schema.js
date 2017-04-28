import { makeExecutableSchema } from 'graphql-tools'
import module from './users/User'

import schema from './schema.graphql'

const resolvers = module.resolverFunctions

const logger = null

/*
const modules = [
  import('./users/User')
]

const resolvers = modules[0].resolverFunctions

const typeDefs = [`
    schema {
        query: Query,
        mutation: Mutation
    }
  `]

typeDefs.concat(
  modules.map(mod => mod.schema)) */

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers,
  logger,
  allowUndefinedInResolve: false,
  resolverValidationOptions: {
    requireResolversForNonScalar: true,
    requireResolversForArgs: true
  }
})
