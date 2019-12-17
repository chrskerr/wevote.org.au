<template>
  <div class="home">
    <dl>
      <li v-for='issue in all' v-bind:key='issue.issueId'><router-link :to="{ name: 'issue', params: { issue: issue.issueId }}">{{issue.issueId}} - {{issue.question}} -- {{issue.summary}}</router-link></li>
    </dl>

    <p>{{ $store.state.user.identifier }}</p>

  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'home',
  data () {
    return {
      all: ""
    }
  },
  mounted () {
    this.$apollo.query({
      query: gql`query ($identifier: String) {
        all: getIssues(identifier: $identifier) {
          issueId
          question
          summary
        }
      }`,
      variables: {
        identifier: this.$store.state.user.identifier
      }
    }).then( res => this.all = res.data.all )    
  }
}
</script>
