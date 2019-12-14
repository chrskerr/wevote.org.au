<template>
    
    <div id="login-form">
        <form v-on:submit.prevent='loginSubmit'>
            <label for="number">
                Licence / ID Card number
                <input type="number" />
            </label>
            <label for="expiry">
                Expiry
                <input type="date" />
            </label>
            <label for="surname">
                Surname
                <input type="text" />
            </label>
            <button type='submit'>Log In</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'login-form',
    methods: {
        loginSubmit: function(e) {

            const output = {
                number: e.target[0].value,
                expiry: e.target[1].value,
                surname: e.target[2].value,
            }

            this.$emit('loginEnter', output);
        }
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
</style>