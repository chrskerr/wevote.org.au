<template>
    
    <div id="login">
        <div v-if='user.surname'>
            <p class='has-text-white is-inline-block' style="padding: 0 1em">{{user.surname}}</p>
            <b-button size='is-small' v-on:click='logOut'>Log Out</b-button>
        </div>

        <div v-else> 
            <b-button size='is-small' v-on:click='toggleModal'>Log In</b-button>
            <b-modal :active.sync='modalShown' has-modal-card trap-focus >
                
                <div class='modal-card'>
                    <div class="modal-card-body">                        
                        <login-form @loginSubmit='loginSubmit' />
                    </div>
                </div>
            </b-modal>
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
            modalShown: false
        }
    },
    methods: {
        toggleModal: function() {
            this.modalShown = !this.modalShown;
        },
        loginSubmit: function(data) {
            this.$apollo.query({
                query: gql`
                    query Identifiers($licence: String!, $state: String!, $surname: String!) {
                        getIdentifier(licence: $licence, state: $state, surname: $surname) {
                            identifier
                        }
                    }
                `,
                variables: {
                    licence: data.licence,
                    state: data.state,
                    surname: data.surname,
                }  
            }).then((res) => {
                this.$store.commit('updateUser', {
                    identifier: res.data.getIdentifier.identifier,
                    surname: data.surname
                });
                this.modalShown = false;
            });
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
/* form {
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

#login {
    display: flex;
    align-content: right;
}

#login> * {
    margin: 0 1em;
} */

</style>