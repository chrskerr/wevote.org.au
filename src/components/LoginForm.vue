<template>
    
    <div id="login-form">
        <section>
            <b-field label="Licence / ID Card number">
                <b-input type="number" v-model="formData.licence"/>
            </b-field>
            <b-field label='State'>
                <b-select placeholder="Please select" v-model='formData.state' required>
                    <option value="nsw">NSW</option>
                    <option value="qld">Queensland</option>
                    <option value="vic">Victoria</option>
                    <option value="tas">Tasmania</option>
                    <option value="sa">South Australia</option>
                    <option value="nt">Northern Territory</option>
                    <option value="act">ACT</option>
                    <option value="wa">Western Australia</option>
                </b-select>
            </b-field>
            <b-field label="Surname">
                <b-input type="text" v-model='formData.surname'/>
            </b-field>
            <b-button v-on:click.prevent='loginSubmit'>Log In</b-button>
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
            }).then((res) => {
                this.$store.commit('updateUser', {
                    identifier: res.data.checkIdentity.identifier,
                    surname: this.formData.surname,
                    alreadyVoted: res.data.checkIdentity.alreadyVoted
                });
                this.$emit('loginSubmit', {
                    ...this.formData,
                    alreadyVoted: res.data.checkIdentity.alreadyVoted
                    });
            });
        }
    }
}
</script>

<style scoped>
    /* form {
        max-width: 640px;
        margin: 0 auto;
    }
    input {
        display: block;
        margin: 0 auto;
    } */
</style>