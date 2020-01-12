<template>
    <div id="login-form">
        <section>
            <div class="field">
                <label class='label'>Licence / ID Card number</label>
                <div class="control">
                    <input class='input' type="number" v-model="formData.licence"/>
                </div>
            </div>
            <div class="field">
                <label class='label'>State</label>
                <div class="control">
                    <div class="select">
                        <select placeholder="Please select" v-model='formData.state' required>
                            <option value="nsw">NSW</option>
                            <option value="qld">Queensland</option>
                            <option value="vic">Victoria</option>
                            <option value="tas">Tasmania</option>
                            <option value="sa">South Australia</option>
                            <option value="nt">Northern Territory</option>
                            <option value="act">ACT</option>
                            <option value="wa">Western Australia</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <div class="field">
            <label class='label'>Surname</label>
                <div class="control">
                    <input class='input' type="text" v-model='formData.surname'/>
                </div>
            </div>
            <button class='button' v-on:click.prevent='loginSubmit'>Log In</button>
        </section>
    </div>

</template>

<script>
import gql from 'graphql-tag';

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
            this.$apollo.query({
                query: gql`
                    query Identifiers($licence: String!, $state: String!, $surname: String!) {
                        checkIdentity(licence: $licence, state: $state, surname: $surname) {
                            identifier
                            alreadyVoted
                        }
                    }
                `,
                variables: {
                    licence: this.formData.licence,
                    state: this.formData.state,
                    surname: this.formData.surname,
                }  
            }).then( ( res ) => {
                this.$store.commit('updateUser', {
                    identifier: res.data.checkIdentity.identifier,
                    surname: this.formData.surname,
                    alreadyVoted: res.data.checkIdentity.alreadyVoted
                });
                this.$emit( 'loginSubmit', {
                    ...this.formData,
                    alreadyVoted: res.data.checkIdentity.alreadyVoted
                    });
            });
        }
    }
}
</script>

<style scoped>
    /* .select {
        display: block;
    } */
</style>