<template>
    
    <div id="login">
        
        <div v-if='loggedIn'>
            <span>{{formData.surname}}</span>
            <button v-on:click='logOut'>Log Out</button>
        </div>

        <div v-else> 
            <button v-on:click='toggleLoginScreen'>Log In</button>
        </div>

        <div v-if='loginShown' id='loginModal'>
            
            <button v-on:click='toggleLoginScreen'>Close</button>
            
            <div v-if="form" >
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
                    <label for="state">
                        State
                        <select>
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
                    <button type='submit'>Log In</button>
                </form>
            </div>

            <div v-else>
                <p>{{formData.surname}} - {{formData.number}}</p>

                <p>Is this information correct?</p>
                <button v-on:click='loginConfirm' name='yes'>Yes</button>
                <button v-on:click='loginConfirm' name='no'>No</button>
            </div>

        </div>

    </div>

</template>

<script>
// import LoginForm from '../components/LoginForm.vue'
// import LoginConfirm from '../components/LoginConfirm.vue'

export default {
    name: 'login',
    data () {
        return {
            form: true,
            formData: {},
            electorate: {},
            loginShown: false        }
    },
    props: {
        loggedIn: {
            type: Boolean
        }
    },
    methods: {
        toggleLoginScreen: function() {
            this.loginShown = !this.loginShown;
        },
        loginSubmit: function(e) {
            this.formData = {
                number: e.target[0].value,
                expiry: e.target[1].value,
                state: e.target[2].value
            },
            this.form = false;
        },
        loginConfirm: function(e) {
            if (e.target.name === 'no') {
                [this.form, this.formData, this.electorate] = [true, {}, {}];
            } else {
                this.loginShown = false;
                this.$emit('updateLogin', {
                    loggedIn: true,
                })
            }
        },
        logOut: function() {
            [this.form, this.formData, this.electorate] = [true, {}, {}];
            this.$emit('updateLogin', {
                loggedIn: false,
            })
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

#loginModal {
    position: absolute;
    top: 0;
    height: 100vh;
    left: 0;
    width: 100vw;
    background: rgba(255,255,255,1);
    padding: 5em;
}
</style>