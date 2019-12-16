<template>
    
    <div id="login">
        
        <div v-if='user.surname'>
            <span>{{user.surname}}</span>
            <button v-on:click='logOut'>Log Out</button>
        </div>

        <div v-else> 
            <button v-on:click='toggleModal'>Log In</button>
        
            <div v-if='modalShown' id='loginModal'>
                
                <button v-on:click='toggleModal'>Close</button>
                
                <login-form v-if="inputFormShown" @loginSubmit='loginSubmit' />

                <div v-else>
                    <p>{{formData.surname}} - {{formData.licence}} - {{formData.state}}</p>

                    <p>Is this information correct?</p>
                    <button v-on:click='loginConfirm' name='yes'>Yes</button>
                    <button v-on:click='loginConfirm' name='no'>No</button>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import gql from 'graphql-tag';
import LoginForm from './LoginForm.vue'

export default {
    name: 'login',
    data () {
        return {
            inputFormShown: true,
            modalShown: false,
            formData: ''
        }
    },
    methods: {
        toggleModal: function() {
            this.modalShown = !this.modalShown;
        },
        loginSubmit: function(data) {
            this.formData = data;
            this.inputFormShown = false;
        },
        loginConfirm: function (e) {
            if (e.target.name === 'no') {
                [this.inputFormShown, this.formData] = [true, {}];
                // reset the form
                // TO-DO: retain state in the form

            } else {
                this.$apollo.query({
                    query: gql`
                        query Identifiers($licence: String!, $state: String!, $surname: String!) {
                            identifier: getIdentifier(licence: $licence, state: $state, surname: $surname) {
                                identifier
                            }
                        }
                    `,
                    variables: {
                        licence: this.formData.licence,
                        state: this.formData.state,
                        surname: this.formData.surname,
                    }  
                }).then(function(res) {
                    this.$store.commit('updateUser', {
                        identifier: res.data.identifier.identifier,
                        surname: this.formData.surname
                    });
                    [this.modalShown, this.inputFormShown] = [false, true];
                }.bind(this));
            }
        },
        logOut: function() {            
            this.$store.commit('updateUser', "")
        }
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    },
    components: {
        'login-form': LoginForm
    }
}
</script>

<style scoped>
form {
    max-width: 640px;
    margin: 0 auto;
}
input {
    display: block;
    margin: 0 auto;
}

#loginModal {
    position: absolute;
    top: 0;
    height: 100vh;
    left: 0;
    width: 100vw;
    background: rgba(255,255,255,1);
    padding: 5em;
}
</style>