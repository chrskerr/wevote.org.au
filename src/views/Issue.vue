<template>
  <div class="issue">

    <ApolloQuery 
      :query="gql => gql`query 
        get($issue: String!) {
          issue: getIssue(issueId: $issue) {
            issueId
            question
            description
            caseFor
            caseAgainst
            closeDate
          }
        }`" 
      :variables="{issue: $route.params.issue}">

      <!-- The result will automatically updated -->
       <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          
          <h3>{{ data.issue.question }}</h3>

          <p> {{ data.issue.description }} </p>

          <button>Vote</button>
        
          <div class='case-box'>
            <div class='case-column'>
              <h3>Case for:</h3>
              <p>{{ data.issue.caseFor }}</p>
            </div>
            <div class='case-column'>
              <h3>Case against:</h3>
              <p>{{ data.issue.caseAgainst }}</p>
            </div>
          </div>

        
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>

    </ApolloQuery>

  </div>
</template>

<script>
// import gql from 'graphql-tag'

export default {
  name: 'issue'
}
</script>

<style scoped>
.case-box {
  display: flex;
  width: 100vw;
}

.case-column {
  flex: auto;
}
</style>