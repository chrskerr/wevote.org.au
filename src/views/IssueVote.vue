<template>
    <div id="issue-vote">

        <div class="section">

            <router-link class="button is-outlined is-pulled-right" :to="{name: 'issue', params: {issue: $route.params.issue}}">Back</router-link>

            <p class='title'>{{issue.question}}</p>

            <div class='container' v-if='response'>
                <p>Please confirm a vote of: <em>{{response}}</em></p>
                <button class='button' v-on:click='confirmVote' name='confirm'>Confirm</button>
                <button class='button' v-on:click='confirmVote' name='change'>Change</button>
                <p v-if='err'>{{err}}</p>
            </div>

            <div v-else-if='identified' class='level'>
                <div class="level-item">
                    <button class='has-background-primary button' v-on:click='chooseVote' name='for'>For</button>
                </div>
                <div class="level-item">
                    <button class='has-background-primary button' v-on:click='chooseVote' name='against'>Against</button>
                </div>
            </div>

            <div v-else class='notification'>
                <p class='subtitle'>Please reconfirm your details before voting</p>
                <login-form @loginSubmit='loginSubmit' />
                <p v-if='err'>{{err}}</p>
            </div>

        </div>

    </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue';
import getIssue from '../apollo/getIssue.gql';
import recordVote from '../apollo/recordVote.gql';

export default {
    name: 'issue-vote',
    data () {
        return {
            identified: false,
            response: '',
            err: '',
            data: ''
        }
    },
    methods: {
        loginSubmit: function( data ) {
            this.data = data;
            if ( data.alreadyVoted.includes( this.$route.params.issue ) ) {
                this.err = "You've already voted"
            } else {
                this.identified = true;
            }
        },

        chooseVote: function( e ) {
            this.response = e.target.name;
        },

        confirmVote: function( e ) {
            if ( e.target.name === 'change' ) {
                this.response = '';

            } else if ( e.target.name === 'confirm' ) {   
                this.$apollo.query({
                    query: recordVote,
                    variables: {
                        issueId: this.$route.params.issue,
                        response: this.response,
                        licence: this.data.licence,
                        state: this.data.state,
                        surname: this.data.surname
                    }
                }).then(( { data: { recordVote }} ) => {
                    if ( recordVote.error ) {
                        this.err = recordVote.error
                    } else {
                        this.$router.push( '/' )
                    }
                })
            }
        },
    },
    components: {
        'login-form': LoginForm
    },
    apollo: {
        issue: {
            query: getIssue,
            variables () {
                return {
                    issueId: this.$route.params.issue
                }
            },
        },
    },
}
</script>

<style scoped>

.level-item button {
    width: 15em;
    height: 15em;
    margin: 1em;
}
</style>