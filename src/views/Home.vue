<template>
  <div class="home">
    <a href="https://check.aec.gov.au">Check your electorate</a>

    <ul>
      <li v-for='issue in all' v-bind:key='issue.issueId'><router-link :to="{ name: 'issue', params: { issue: issue.issueId }}">{{issue.issueId}} - {{issue.question}} -- {{issue.summary}}</router-link></li>
    </ul>

    <p v-if='$attrs.loggedIn'>Yes</p>

  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'home',
  apollo: {
    all: gql`query {
      all: getIssues {
        issueId
        question
        summary
      }
    }`
  }
}
</script>
