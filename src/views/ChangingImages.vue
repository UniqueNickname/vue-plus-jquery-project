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
        {
          iSrc: './img/small/1',
          iHref: './img/small/1_h.jpg'
        },
        {
          iSrc: './img/small/2',
          iHref: './img/small/2_h.jpg'
        },
        {
          iSrc: './img/small/3',
          iHref: './img/small/3_h.jpg'
        },
        {
          iSrc: './img/small/4',
          iHref: './img/small/4_h.jpg'
        },
        {
          iSrc: './img/small/5',
          iHref: './img/small/5_h.jpg'
        },
        {
          iSrc: './img/small/6',
          iHref: './img/small/6_h.jpg'
        },
        {
          iSrc: './img/small/7',
          iHref: './img/small/7_h.jpg'
        },
        {
          iSrc: './img/small/8',
          iHref: './img/small/8_h.jpg'
        },
        {
          iSrc: './img/small/9',
          iHref: './img/small/9_h.jpg'
        },
        {
          iSrc: './img/small/10',
          iHref: './img/small/10_h.jpg'
        },
        {
          iSrc: './img/small/11',
          iHref: './img/small/11_h.jpg'
        },
        {
          iSrc: './img/small/12',
          iHref: './img/small/12_h.jpg'
        }
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
      })
    })
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/changing-images.sass'
</style>
