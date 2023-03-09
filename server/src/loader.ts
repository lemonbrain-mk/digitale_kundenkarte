import { join } from 'path'
import { loadSchema } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { moviesResolvers } from './resolvers/movie'

export const loadGraphQlSchema = async function () {
    // todo: dieser pfad kann im docker container nicht gelesen werden?
  const typeDefs = await loadSchema(join(__dirname, './schemas/**/*.graphql'), {
    loaders: [new GraphQLFileLoader()],
  })
  const resolvers = [moviesResolvers]

  return {
    typeDefs,
    resolvers,
  }
}