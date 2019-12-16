<template>
  <div class="home">
    <a href="https://check.aec.gov.au">Check your electorate</a>

    <ul>
      <li v-for='issue in all' v-bind:key='issue.issueId'><router-link :to="{ name: 'issue', params: { issue: issue.issueId }}">{{issue.issueId}} - {{issue.question}} -- {{issue.summary}}</router-link></li>
    </ul>

    <p>{{ $store.state.identifier }}</p>

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
    // changed to this so that hopefully when a vote is submitted and we redirect to Home, then the data is re-pulled and you can see new responded-to status on each
    this.$apollo.query({
      query: gql`query {
        all: getIssues {
          issueId
          question
          summary
        }
      }`
    }).then( res => this.all = res.data.all )
  }
}
</script>
