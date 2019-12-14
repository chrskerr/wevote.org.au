import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { createApolloClient } from 'vue-cli-plugin-apollo/graphql-client'

Vue.use(VueApollo)

const httpEndpoint = process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:3125/referendums/graphql'

export function createProvider (options = {}) {

  const { apolloClient } = createApolloClient({
    httpEndpoint,
    ...options,
  })

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler (error) {
      // eslint-disable-next-line no-console
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
  })

  return apolloProvider
}