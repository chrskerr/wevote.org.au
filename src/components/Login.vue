<template>
    <div id="login">
        <div v-if='user.surname'>
            <p class='has-text-white is-inline-block' style="padding: 0 1em">{{user.surname}}</p>
            <b-button type='is-light' outlined v-on:click='logOut'>Log Out</b-button>
        </div>

        <div v-else> 
            <b-button type='is-light' outlined v-on:click='toggleModal'>Log In</b-button>
            <b-modal :active.sync='modalShown' has-modal-card trap-focus aria-modal>
                <div class='modal-card'>
                    <div class="modal-card-body">          
                        <login-form @loginSubmit='loginSubmit' />
                        <p>Logging in will show which votes you have already completed.</p>
                        <p>You will need to re-enter your details to complete a vote later to ensure no-one can vote on your behalf.</p>
                    </div>
                </div>
            </b-modal>
        </div>

		<b-modal :active.sync='firstOpen' trap-focus has-modal-card aria-modal>
            <div class="modal-card">
                <div class='modal-card-body'>
                    <whitepaper />
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
import LoginForm from './LoginForm.vue'
import Whitepaper from '../views/Whitepaper.vue'

export default {
    name: 'login',
    data () {
        return {
            modalShown: false,
            firstOpen: true,
        }
    },
    methods: {
        toggleModal: function() {
            this.modalShown = !this.modalShown;
        },
        loginSubmit: function(data) {
            if (data) {
                this.modalShown = false;
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
        'login-form': LoginForm,
        'whitepaper': Whitepaper
    }
}
</script>

<style scoped>
    .modal-card p {
        margin-top: 0.5em;
        font-style: italic;
    }
</style>