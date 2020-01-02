<template>
	<div class="home container">	
		<div class="section">
			<div class='tile is-ancestor'>
				<div class="tile is-vertical is-parent is-12">
					<div class="tile is-child notification is-twitter" v-for='issue in all' v-bind:key='issue.issueId'>
						<div class="level">
							<div class="level-left">
								<div class="container">
									<p class='subtitle'>{{issue.question}}</p>
									<p>{{issue.summary}}</p>
								</div>
							</div>
							<div class="level-right">
								<div class="level-item">
									<router-link class="button is-medium is-dark is-outlined" :to="{ name: 'issue', params: { issue: issue.issueId }}">More</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>
		</div>
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

<style scoped>
	.hero-body p {
		margin-bottom: 1rem;
	}
	.hero-body p:last-child {
		margin-bottom: 0;
	}
</style>