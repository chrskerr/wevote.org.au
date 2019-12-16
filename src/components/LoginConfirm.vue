<template>
    
    <div id='login-confirm'>

        <p>You entered:</p>
        <p>Licence/ID Number: {{data.number}}</p>
        <p>Expiry: {{data.expiry}}</p>
        <p>Surname: {{data.surname}}</p>

        <p>Is this correct?</p>
        <button v-on:click='submit' name='yes'>Yes</button>
        <button v-on:click='submit' name='no'>No</button>
    </div>

</template>

<script>
export default {
    name: 'login-confirm',
    props: {
        data: {
            type: Object
        }
    },
    methods: {
        submit: function(e) {

            if (e.target.name === 'no') {
                this.$emit('togglePage', {});
            } else {
                console.log('save to state?')
            }
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