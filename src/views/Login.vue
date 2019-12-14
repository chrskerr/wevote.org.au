<template>
    
    <div id="login">
        <login-form v-if="form" @loginEnter="loginEnter"/>
        <login-confirm v-else />
    </div>

</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import LoginConfirm from '../components/LoginConfirm.vue'

export default {
    name: 'login',
    data () {
        return {
            form: true,
            formData: ''
        }
    },
    methods: {
        loginEnter: function(data) {
            
            this.formData = data;
            this.form = false;
            
        }
    },
    components: {
        'login-form': LoginForm,
        'login-confirm': LoginConfirm
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