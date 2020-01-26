<template>
    <div id='navBar'>
        <b-navbar transparent>
            <template slot="brand">
                <b-navbar-item tag='router-link' to="/" class='app-name title'>
                    <span class='has-text-primary'>We</span>
                    <span class='has-text-secondary'>Vote</span>
                </b-navbar-item>
            </template>

            <template slot="start">
                <b-navbar-item tag='router-link' to="/">
                    Home
                </b-navbar-item>
                <b-navbar-item tag='router-link' to='/whitepaper'>
                    Whitepaper
                </b-navbar-item>
                <b-navbar-item tag='router-link' to='/chainview'>
                    Blockchain View
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag='a' to='#'>
                    Subscribe
                </b-navbar-item>
                <b-navbar-item v-if='user.surname' v-on:click='logOut' style='margin-right: 2rem;'>
                    Log Out
                </b-navbar-item>
                <b-navbar-item v-else v-on:click='toggleLoginModal' style='margin-right: 2rem;'>
                    Log In
                </b-navbar-item>
            </template>
        </b-navbar>   

        <b-modal :active.sync='loginModalVisible' has-modal-card trap-focus aria-modal>
            <div class='modal-card'>
                <div class="modal-card-body">          
                    <login-form @loginSubmit='loginSubmit' />
                    <p>Logging in will show which votes you have already completed.</p>
                    <p>You will need to re-enter your details to complete a vote later to ensure no-one can vote on your behalf.</p>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
    name: 'navBar',
    data () {
        return {
            loginModalVisible: false,
        }
    },
    methods: {
        toggleLoginModal: function() { this.loginModalVisible = !this.loginModalVisible },
        logOut: function() { this.$store.commit( 'updateUser', "" ) },
        loginSubmit: function( data ) { if ( data ) this.loginModalVisible = false },
    },
    components: {
        'login-form': LoginForm
    },
    computed: {
        user () {
            return this.$store.state.user
        }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    .app-name {
        font-family: 'Montserrat', monospace;
        font-size: 3rem;
        margin: 1rem !important;
    }

    .burger {
        margin: auto 2rem auto auto;
    }

    .modal-card p {
        margin-top: 0.5em;
        font-style: italic;
    }
</style>
