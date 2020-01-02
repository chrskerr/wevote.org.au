<template>
	<div class="issue">
			
		<div class="section">
			<div class="tile is-ancestor">
				<div class="tile is-vertical">				
					<div class="tile is-parent">
						<div class='tile is-child notification is-twitter'>
							<h3 class='title'>{{ issue.question }}</h3>
							<p> {{ issue.description }} </p>
						</div>
					</div>
					<div class="tile">
						<div class="tile is-parent">
							<div class="tile is-child notification is-light">
								<p class='subtitle'>Case for:</p>
								<p>{{ issue.caseFor }}</p>
							</div>
						</div>
						<div class="tile is-parent">
							<div class="tile is-child notification is-light">
								<p class='subtitle'>Case against:</p>
								<p>{{ issue.caseAgainst }}</p>
							</div>
						</div>	
					</div>
					<div class="level">
						<div class="level-item">
							<router-link class="button is-large is-primary is-outlined" :to="{name: 'issue-vote', params: {issue: $route.params.issue}}">Vote!</router-link>
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
        query get($issueId: Int!) {
          issue: getIssue(issueId: $issueId) {
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
        issueId: parseInt(this.$route.params.issue)
      }
    }).then( res => this.issue = res.data.issue )
  }
}
</script>

<style scoped>
	.button {
		margin-top: 1em;
	}
</style>