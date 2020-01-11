<template>
    <div id="login">
        <div v-if='user.surname'>
            <p class='has-text-white is-inline-block' style="padding: 0 1em">{{user.surname}}</p>
            <button class='button is-outlined is-light' v-on:click='logOut'>Log Out</button>
        </div>

        <div v-else> 
            <button class='button is-outlined is-light' v-on:click='toggleModal'>Log In</button>
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
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
    name: 'login',
    data () {
        return {
            modalShown: false,
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
        'login-form': LoginForm
    },
    mounted () {
        this.$router.push({ path: 'whitepaper' }) // redirect to whitepaper on first-load only
    }
}
</script>

<style scoped>
    .modal-card p {
        margin-top: 0.5em;
        font-style: italic;
    }
</style>