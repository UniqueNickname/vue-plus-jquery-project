<template>
  <div class="code-box"
    :class="{'code-box_active': codeIsShow}">
    <div class="code-box-cancel"
      @click="showCode"><span></span></div>
      <slot></slot>
  </div>
</template>

<script>
import { eventEmitter } from '../main'

export default {
  data () {
    return {
      codeIsShow: false
    }
  },
  methods: {
    showCode () {
      this.codeIsShow = !this.codeIsShow
    }
  },
  created () {
    eventEmitter.$on('codeUpdated', () => {
      this.showCode()
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/code-box.sass'
</style>
