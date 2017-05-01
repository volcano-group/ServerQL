import User from './User.graphql'

const users = [
  { id: 1, firstName: 'Mario', lastName: 'Rossi' },
  { id: 2, firstName: 'Luigi', lastName: 'Bianchi' }
]

const resolverFunctions = {
  Query: {
    getUser (root, {id}) {
      return users[id]
    }
  },
  Mutation: {
    createUser (rootValue, {firstName, lastName}, context, info) {
      return users.push({
        id: users.length + 1,
        firstName,
        lastName
      })
    }
  }

}

export default {
  schema: User,
  resolverFunctions}