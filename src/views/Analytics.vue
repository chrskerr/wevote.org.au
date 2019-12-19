<template>
    <div id="analytics">
        <div class="section">
            <div class="container" v-if='data'>
                <p class='title'>Blockchain Tables - temporary view</p>
                <hr>
                <p class="subtitle">Blocks</p>
                <table class='table'>
                    <thead>
                        <th v-for="(value, name, index) in data.blocks[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(object, index) in data.blocks" v-bind:key="index">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Transactions</p>
                <table class='table'>
                    <thead>
                        <th v-for="(value, name, index) in data.transactions[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(object, index) in data.transactions" v-bind:key="index">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Votes</p>
                <table class='table'>
                    <thead>
                        <th v-for="(value, name, index) in data.votes[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(object, index) in data.votes" v-bind:key="index">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Tokens</p>
                <table class='table'>
                    <thead>
                        <th v-for="(value, name, index) in data.tokens[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="(object, index) in data.tokens" v-bind:key="index">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// how will I show the SQL transations? One table for each table?
// how will I send the data, an array of objects, with nested v-for statements?
import axios from 'axios';

export default {
    name: 'analytics',
    data () {
        return {
            data: ''
        }
    },
    methods: {
        refresh () {
            axios.get("https://api.chrskerr.com/referendums/analytics")
            .then( res => { this.data = res.data });
        } 
    },
    mounted () {
        this.refresh();
    }
}
</script>

<style scoped>
td {
    max-width: 20em;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>