<template>
  <div class="about">
    <p>This is an about page</p>
    <apollo-example />
  </div>
</template>

<script>
import ApolloExample from '../components/ApolloExample'

export default {
  name: 'about',
  components: {
    'apollo-example': ApolloExample
  }
}
</script>