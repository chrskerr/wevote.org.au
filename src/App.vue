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
$twitter: #FFCD00;
$twitter-invert: findColorInvert($twitter);
$info: #2E9960;
$info-invert: findColorInvert($info);

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
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>