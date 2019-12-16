<template>
  <div class="about">
    <p>This is an about page</p>
    <p>{{identifier}}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    identifier () {
      return this.$store.state.identifier
    }
  }
}
</script>