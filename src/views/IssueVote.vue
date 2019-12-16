<template>
    <div id="issue-vote">

        <h2>{{issue.question}}</h2>

        <div v-if='response'>
            <p>Please confirm a vote of: <em>{{response}}</em></p>
            <button v-on:click='confirmVote' name='confirm'>Confirm</button>
            <button v-on:click='confirmVote' name='change'>Change</button>
        </div>

        <div v-else-if='token' id='chooser'>
            <button v-on:click='chooseVote' name='for'>For</button>
            <button v-on:click='chooseVote' name='withheld'>Withheld</button>
            <button v-on:click='chooseVote' name='against'>Against</button>
        </div>

        <div v-else>
            <p>Please reconfirm your details before voting</p>
            <login-form @loginSubmit='loginSubmit' />
        </div>

    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import gql from 'graphql-tag';

export default {
    name: 'issue-vote',
    data () {
        return {
            issue: '',
            token: '',
            response: ''
        }
    },
    methods: {
        loginSubmit: function(data) {
            this.$apollo.query({
                query: gql` 
                    query Token($issueId: String!, $licence: String!, $state: String!, $surname: String!) {
                            token: getToken(issueId: $issueId, licence: $licence, state: $state, surname: $surname) {
                                token
                            }
                        }   
                `,
                variables: {
                    issueId: this.$route.params.issue,
                    surname: data.surname,
                    licence: data.licence,
                    state: data.state
                }
            }).then( res => this.token = res.data.token.token )
        },
        chooseVote: function(e) {
            this.response = e.target.name;
        },
        confirmVote: function(e) {
            if ( e.target.name === 'change' ) {
                this.response = '';
            } else if ( e.target.name === 'confirm' ) {
                this.$apollo.query({
                    query: gql` 
                        query giveToken($token: String!, $response: String!) {
                            giveToken(token: $token, response: $response) {
                                message
                            }
                        }   
                    `,
                    variables: {
                        token: this.token,
                        response: this.response
                    }
                }).then( res => {
                    console.log(res.data.giveToken.message)

                    // TODO: return to Home and re-pull all data
                })
            }
        }
    },
    mounted() {
        this.$apollo.query({
        query: gql`
            query get($issue: String!) {
                issue: getIssue(issueId: $issueId) {
                    question
                }
            }
        `,
        variables: {
            issueId: this.$route.params.issue
        }
        }).then( res => this.issue = res.data.issue )
    },
    components: {
        'login-form': LoginForm
    }
}
</script>

<style scoped>
#chooser {
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

#chooser button {
    flex-grow: 1;
    height: 250px;
    margin: 1em;
}
</style>