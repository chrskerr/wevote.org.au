<template>
  <div class="vote">

    <ApolloQuery 
      :query="gql => gql`query 
        get($vote: String!) {
          vote: getProp(prop: $vote) {
            prop
            description
          }
        }`" 
      :variables="{vote: $route.params.vote}">

      <!-- The result will automatically updated -->
       <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.vote }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>

</ApolloQuery>

  </div>
</template>

<script>
// import gql from 'graphql-tag'

export default {
  name: 'vote'
}
</script>
