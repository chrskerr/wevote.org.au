<template>
	<div id="app">
    
		<div class='level has-background-primary '>	
			<div class="level-left">
				<div class="level-item">
					<b-icon pack="fas" icon="dragon" size="is-large" />
					<h1 class='title has-text-white'>F-king Vote</h1>
				</div>

				<div class="level-item">
					<router-link to="/" class='has-text-white'>
						Home
					</router-link>
					<router-link class="has-text-white" to='/about'>
						About
					</router-link>
				</div>
			</div>

			<div class="level-right">
				<div class="level-item">
					<login />
				</div>
			</div>
		</div>

		<router-view />
	</div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: 'app',
    components: {
    'login': Login
  },
}
</script>

<style scoped>
.level-item {
	margin: 0.5em;
}

a.has-text-white {
	padding: 0.75em;
}

a.has-text-white:hover {
	background-color: rgba(255,255,255,0.25);
}

a.router-link-exact-active {
	text-decoration: underline;
}

</style>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

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