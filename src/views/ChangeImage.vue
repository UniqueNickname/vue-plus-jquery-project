<template>
  <div
    class="content change-image"
    :class="{'content_active' : contentIsActive}">
    <div class="header">Header</div>
    <PreviewList :imgSources="imgSources"/>
  </div>
</template>

<script>
import { eventEmitter } from '../main'
import PreviewList from '@/components/PreviewList.vue'

export default {
  name: 'home',
  components: {
    PreviewList
  },
  data () {
    return {
      contentIsActive: true,
      imgSources: [
        './img/small/1',
        './img/small/2',
        './img/small/3',
        './img/small/4',
        './img/small/5',
        './img/small/6',
        './img/small/7',
        './img/small/8',
        './img/small/9',
        './img/small/10',
        './img/small/11',
        './img/small/12'
      ]
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
