<template>
  <div class="home">
    <p>Hello World</p>
    <a href="https://check.aec.gov.au">Check your electorate</a>

    <ul>
      <li v-for='vote in all' v-bind:key='vote.vote'><router-link :to="{ name: 'vote', params: { vote: vote.prop }}">{{vote.prop}} - {{vote.description}}</router-link></li>
    </ul>

  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'home',
  apollo: {
    all: gql`query {
      all: getProps {
        prop
        description
      }
    }`
  }
}
</script>
