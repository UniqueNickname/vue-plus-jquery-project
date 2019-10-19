<template>
  <div class="code-btn"
    @click="showCode">
    <span class="code-btn__line code-btn__line_top"></span>
    <span class="code-btn__line code-btn__line_right"></span>
    <span class="code-btn__line code-btn__line_bottom"></span>
    <span class="code-btn__line code-btn__line_left"></span>
    <div>Show code</div>
  </div>
</template>

<script>
import { eventEmitter } from '../main'

export default {
  methods: {
    showCode () {
      eventEmitter.$emit('codeUpdated')
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/code-btn.sass'
</style>
