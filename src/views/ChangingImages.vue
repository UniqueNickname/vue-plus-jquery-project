<template>
  <div
    class="content changing-images">
    <div class="header">Changing images</div>
    <PreviewList :imgSources="imgSources"/>
  </div>
</template>

<script>
import PreviewList from '@/components/PreviewList.vue'
import $ from 'jquery'

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
  mounted () {
    this.$nextTick(() => {
      $('.changing-images .preview-list-item img').each(function () {
        const imgFile = $(this).attr('src')
        const preloadImage = new Image()
        const imgExp = /(\.\w{3,4}$)/
        preloadImage.src = imgFile.replace(imgExp, '_h$1')
        $(this).hover(
          () => {
            $(this).attr('src', preloadImage.src)
          },
          () => {
            $(this).attr('src', imgFile)
          }
        )
      })// the end of jquery function
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/changing-images.sass'
</style>
