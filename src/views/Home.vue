<template>
  <div
    class="content home">
    <div class="header">
      <div class="name">Hi! I'm Ivan</div>
      <div class="welcome">Welcome to my website</div>
      <small>His created for demonstration my laboratory works</small>
      <div class="arrow"
        @click="menuUpdated"
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
    }
  },
  methods: {
    menuUpdated () {
      eventEmitter.$emit('menuUpdated')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/home-header.sass'
</style>
