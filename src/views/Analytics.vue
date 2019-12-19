<template>
    <div id="analytics">
        <div class="section">
            <div class="container">
                <p class='title'>Blockchain Tables (live)</p>
                <hr>
                <p class="subtitle">Blocks</p>
                <table class='table' v-if='data.blocks[0]'>
                    <thead>
                        <th v-for="(value, name, index) in data.blocks[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="object in data.blocks" v-bind:key="object.blockId">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Transactions</p>
                <table class='table' v-if='data.transactions[0]'>
                    <thead>
                        <th v-for="(value, name, index) in data.transactions[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="object in data.transactions" v-bind:key="object.TransactionId">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Votes</p>
                <table class='table' :v-if='data.votes[0]'>
                    <thead>
                        <th v-for="(value, name, index) in data.votes[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="object in data.votes" v-bind:key="object.Hash">
                            <td v-for="(value, name, index) in object" v-bind:key="index">{{value}}</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <p class="subtitle">Tokens</p>
                <table class='table' v-if='data.tokens[0]'>
                    <thead>
                        <th v-for="(value, name, index) in data.tokens[0]" v-bind:key='index'>{{name}}</th>
                    </thead>
                    <tbody>
                        <tr v-for="object in data.tokens" v-bind:key="object.Hash">
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
            axios.get("http://localhost:3125/referendums/analytics")
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