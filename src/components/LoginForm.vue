<template>
    
    <div id="login-form">
        <form v-on:submit.prevent='loginSubmit'>
            <label for="licence">
                Licence / ID Card number
                <input type="number" v-model="formData.licence"/>
            </label>
            <label for="state">
                State
                <select v-model='formData.state'>
                    <option value="">Please select</option>
                    <option value="nsw">NSW</option>
                    <option value="qld">Queensland</option>
                    <option value="vic">Victoria</option>
                    <option value="tas">Tasmania</option>
                    <option value="sa">South Australia</option>
                    <option value="nt">Northern Territory</option>
                    <option value="act">ACT</option>
                    <option value="wa">Western Australia</option>
                </select>
            </label>
            <label for="surname">
                Surname
                <input type="text" v-model='formData.surname'/>
            </label>
            <button type='submit'>Log In</button>
        </form>
    </div>

</template>

<script>
export default {
    name: 'login-form',
    data () {
        return {
            formData: {
                licence: '',
                state: '',
                surname: ''
            }
        }
    },
    methods: {
        loginSubmit: function() {
            this.$emit('loginSubmit', this.formData);
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