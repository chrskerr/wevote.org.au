<template>
<div class="issue">
		
	<h3>{{ issue.question }}</h3>
	<p> {{ issue.description }} </p>

	<router-link :to="{name: 'issue-vote', params: {issue: issue.issueId}}">Vote!</router-link>

	<div class='case-box'>
		<div class='case-column'>
			<h3>Case for:</h3>
			<p>{{ issue.caseFor }}</p>
		</div>
		<div class='case-column'>
			<h3>Case against:</h3>
			<p>{{ issue.caseAgainst }}</p>
		</div>
	</div>

</div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'issue',
  data () {
    return {
      issue: ''
    }
  },
  mounted() {
    this.$apollo.query({
      query: gql`
        query get($issue: String!) {
          issue: getIssue(issueId: $issue) {
            issueId
            question
            description
            caseFor
            caseAgainst
            closeDate
          }
        }
      `,
      variables: {
        issue: this.$route.params.issue
      }
    }).then( res => this.issue = res.data.issue )
  }
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