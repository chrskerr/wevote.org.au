<template>
    <div id="chainview">
        <div class="section">
            <div class="container" v-if='data'>
                <p class='title'>Blockchain Tables - temporary view, horizontally scrollable</p>
                <hr>
                <p class="subtitle">Blocks</p>
                <div class="table-box">
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
                </div>
                <hr>
                <p class="subtitle">Transactions</p>
                <div class="table-box">
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
                </div>
                <hr>
                <p class="subtitle">Votes</p>
                <div class="table-box">
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
                </div>
                <hr>
                <p class="subtitle">Tokens</p>
                <div class="table-box">
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'chainview',
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
.table-box {
    max-width: 100vw;
    overflow-x: scroll;
}
</style>