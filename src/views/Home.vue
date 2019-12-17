<template>
	<div class="home container">
		
		<div class="hero is-info is-bold">
			<div class="hero-body">
				<div class="container">
					<h2 class='title'>Title of Referendums app</h2>
					<p>Very high level information, with a link to About to go deeper.</p>
				</div>
			</div>
		</div>

		<ul>
			<li v-for='issue in all' v-bind:key='issue.issueId'><router-link :to="{ name: 'issue', params: { issue: issue.issueId }}">{{issue.issueId}} - {{issue.question}} -- {{issue.summary}}</router-link></li>
		</ul>

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
