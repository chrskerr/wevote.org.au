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
            <p v-if='err'>{{err}}</p>
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
            response: '',
            err: ''
        }
    },
    methods: {
        loginSubmit: function(data) {
            this.$apollo.query({
                query: gql` 
                    query Token($issueId: String!, $licence: String!, $state: String!, $surname: String!) {
                            getToken(issueId: $issueId, licence: $licence, state: $state, surname: $surname) {
                                token
                                identifier
                                err
                            }
                        }   
                `,
                variables: {
                    issueId: this.$route.params.issue,
                    surname: data.surname,
                    licence: data.licence,
                    state: data.state
                }
            }).then( res => {
                this.token = res.data.getToken.token;
                this.err = res.data.getToken.err;
                this.$store.commit('updateUser', {
                        identifier: res.data.getToken.identifier,
                        surname: data.surname
                    });
                })
        },
        chooseVote: function(e) {
            this.response = e.target.name;
        },
        confirmVote: function(e) {
            if ( e.target.name === 'change' ) {
                this.response = '';
            } else if ( e.target.name === 'confirm' ) {
                console.log({
                        token: this.token,
                        response: this.response,
                        issueId: this.$route.params.issue,
                        identifier: this.$store.state.user.identifier
                    })
                this.$apollo.query({
                    query: gql` 
                        query giveToken($issueId: String, $token: String!, $response: String!, $identifier: String!) {
                            giveToken(token: $token, response: $response, identifier: $identifier, issueId: $issueId) {
                                message
                            }
                        }   
                    `,
                    variables: {
                        token: this.token,
                        response: this.response,
                        issueId: this.$route.params.issue,
                        identifier: this.$store.state.user.identifier
                    }
                }).then(  () => {
                    
                    this.$router.push('/')

                    // TODO: return to Home and re-pull all data
                })
            }
        }
    },
    components: {
        'login-form': LoginForm
    },
    mounted () {
        this.$apollo.query({
            query: gql`
                query get($issueId: String!) {
                    getIssue(issueId: $issueId) {
                        question
                    }
                }
            `,
            variables: {
                issueId: this.$route.params.issue
            }
        }).then( res => this.issue = res.data.getIssue )
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