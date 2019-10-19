<template>
  <div
    class="content change-image"
    :class="{'content_active' : contentIsActive}">
    <div class="header">Header</div>
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
