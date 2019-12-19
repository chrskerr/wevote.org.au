<template>
	<div class="issue">
			
		<div class="section">
			<div class="tile is-ancestor">
				<div class="tile is-vertical">				
					<div class="tile is-parent">
						<div class='tile is-child notification is-info'>
							<h3 class='title'>{{ issue.question }}</h3>
							<p> {{ issue.description }} </p>
							<div class="level">
								<div class="level-item">
									<router-link class="button is-large" :to="{name: 'issue-vote', params: {issue: issue.issueId}}">Vote!</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="tile">
						<div class="tile is-parent">
							<div class="tile is-child notification is-primary">
								<p class='subtitle'>Case for:</p>
								<p>{{ issue.caseFor }}</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child notification is-primary">
								<p class='subtitle'>Case against:</p>
								<p>{{ issue.caseAgainst }}</p>
							</div>
						</div>	
					</div>
				</div>
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
  mounted () {
    this.$apollo.query({
      query: gql`
        query get($issue: Int!) {
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

</style>