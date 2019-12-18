<template>
  <div class="about">
        <div class="section">
            <div class="container">
                <p>About coming soon</p>
            </div>
        </div>
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