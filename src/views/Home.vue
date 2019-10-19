<template>
  <div
    class="content home"
    :class="{'content_active' : contentIsActive}">
    <div class="header">
      <div class="name">Hi! I'm Ivan</div>
      <div class="welcome">Welcome to my website</div>
      <small>His created for demonstration my laboratory works</small>
      <div class="arrow"
        >Click to menu button and choose work</div>
    </div>
  </div>
</template>

<script>
import { eventEmitter } from '../main'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      contentIsActive: false
    }
  },
  methods: {
    activeContent () {
      this.contentIsActive = !this.contentIsActive
    }
  },
  created () {
    eventEmitter.$on('contentUpdated', () => {
      this.activeContent()
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/home-header.sass'
</style>
