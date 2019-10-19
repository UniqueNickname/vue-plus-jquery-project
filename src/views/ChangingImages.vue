<template>
  <div
    class="content changing-images">
    <div class="header">Changing images</div>
    <PreviewList :imgSources="imgSources"/>
    <CodeBtn />
    <CodeBox >
      <pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.changing-image .preview-list-item img'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">each</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> imgFile <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> preloadImage <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> Image<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> imgExp <span style="color: #339933;">=</span> <span style="color: #009966; font-style: italic;">/(\.\w{3,4}$)/</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  preloadImage.<span style="color: #660066;">src</span> <span style="color: #339933;">=</span> imgFile.<span style="color: #660066;">replace</span><span style="color: #009900;">&#40;</span>imgExp<span style="color: #339933;">,</span> <span style="color: #3366CC;">'_h$1'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">hover</span><span style="color: #009900;">&#40;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #339933;">,</span> preloadImage.<span style="color: #660066;">src</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #339933;">,</span> imgFile<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li></ol></pre>
    </CodeBox>
  </div>
</template>

<script>
import PreviewList from '@/components/PreviewList.vue'
import CodeBtn from '@/components/CodeBtn.vue'
import CodeBox from '@/components/CodeBox.vue'
import $ from 'jquery'

export default {
  name: 'home',
  components: {
    PreviewList,
    CodeBtn,
    CodeBox
  },
  data () {
    return {
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
