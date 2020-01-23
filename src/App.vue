<template>
	<div id="app">
		
		<navBar />

		<router-view />
		
	</div>
</template>

<script>
    import NavBar from './components/Nav.vue';

    export default {
        name: 'app',
        components: {
            'navBar': NavBar,
        },
        created () {
        //    this.$router.push({ path: 'whitepaper' }) // redirect to whitepaper on first-load only
        },
    }
</script>


<style>
    #app {
        min-height: 100vh;
    }

    @media only screen and (max-width: 800px) {
        .section {
            padding-top: 0rem !important;
        }
}
</style>



<style lang="scss">
    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    $primary: #00843D;
    $primary-invert: findColorInvert($primary);
    $secondary: #FFCD00;
    $secondary-invert: findColorInvert($secondary);

    a.router-link-exact-active {
        color: $primary;
    }
    $desktop: 800px;

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
        "white": ($white, $black),
        "black": ($black, $white),
        "light": ($light, $light-invert),
        "dark": ($dark, $dark-invert),
        "primary": ($primary, $primary-invert),
        "info": ($info, $info-invert),
        "success": ($success, $success-invert),
        "warning": ($warning, $warning-invert),
        "danger": ($danger, $danger-invert),
        "secondary": ($secondary, $secondary-invert)
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;

    // Import Bulma and Buefy styles
    @import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
