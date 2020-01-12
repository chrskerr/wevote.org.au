<template>
    <b-navbar transparent>
        <template slot="brand">
            <b-navbar-item tag='router-link' to="/" class='app-name title'>
                <span class='has-text-primary'>We</span>
                <span class='has-text-twitter'>Vote</span>
            </b-navbar-item>
        </template>

        <template slot="start">
            <b-navbar-item tag='router-link' to="/">
                Home
            </b-navbar-item>
            <b-navbar-item tag='router-link' to='/whitepaper'>
                Whitepaper
            </b-navbar-item>
            <b-navbar-item tag='router-link' to='/votesummary'>
                Votes Summary
            </b-navbar-item>
            <b-navbar-item tag='router-link' to='/chainview'>
                Blockchain View
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag='a' to='#'>
                Subscribe
            </b-navbar-item>
            <b-navbar-item>
                <login />
            </b-navbar-item>
        </template>

    </b-navbar>      
</template>

<script>
import Login from './Login.vue';

export default {
    name: 'navBar',
    components: {
        'login': Login
    }
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


</style>

