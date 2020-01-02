<template>
  <div class="about">
        <div class="section">
            <div class="container">
                <p class="title">Why</p>
                <p>I created this tool because it is my belief that <strong>good ideas should be used, regardless of party or political orientation.</strong></p>
                <p>I believe that we should not be divided along party lines, or supporting individual politicians who are "good enough".</p> 
                <p>Instead, we should be giving a voice to new ideas. They should all be in one consistant place. Hearing the arguments for and against should be simple, and making an informed decision should be your right.</p>

                <p class="title">How</p>
                <p>I believe that online voting can be secure, auditable, reliable, fast and unchangable; and that these things are necessary to create a voting platform which cannot be tampered with.</p>
                <p>For this reason it is built on a blockchain-style record of vote, which prevents changing already-cast votes and allows for open publication of raw voting data. We also store vote participation and vote response seperately, to ensure that individuals cannot be linked to a response, as it is currently in our voting system.</p>

                <p class="title">Please help</p>
                <p>This is currently a proof-of-concept. I need help on the following things to even consider making this real:</p>
                <ul>
                  <li>Development and technology improvement</li>
                  <li>Getting the word out there</li>
                  <li>Pressuring the political system to allow reform on how it takes direction, to make as system such as this binding</li>
                </ul>
                <p>I don't know how to do most of these things, so I am looking for people to help me make this a reality.</p>

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

<style scoped>
  p {
    margin-bottom: 1em;
  }
  li:before {
    content: '-';
    margin: 0.5em;
  }
  li:last-child {
    margin-bottom: 1em;
  }
</style>