<template>
  <div
    class="content photo-gallery">
    <div class="header">Photo gallery</div>
    <PreviewList
      :imgSources="imgSources"
      />
    <div class="big-photo">
    </div>
    <CodeBtn />
    <CodeBox >
      <pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.photo-gallery .preview-list-item img'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">each</span><span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> imgFile <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> preloadImage <span style="color: #339933;">=</span> <span style="color: #000066; font-weight: bold;">new</span> Image<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> imgExp <span style="color: #339933;">=</span> <span style="color: #009966; font-style: italic;">/(\.\w{3,4}$)/</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  preloadImage.<span style="color: #660066;">src</span> <span style="color: #339933;">=</span> imgFile.<span style="color: #660066;">replace</span><span style="color: #009900;">&#40;</span>imgExp<span style="color: #339933;">,</span> <span style="color: #3366CC;">'_h$1'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">hover</span><span style="color: #009900;">&#40;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #339933;">,</span> preloadImage.<span style="color: #660066;">src</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=&gt;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'src'</span><span style="color: #339933;">,</span> imgFile<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.photo-gallery .preview-list a'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span>event<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> imgPath <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'href'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> oldImage <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.photo-gallery .big-photo img'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> newImage <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'&lt;img src=&quot;'</span> <span style="color: #339933;">+</span> imgPath <span style="color: #339933;">+</span> <span style="color: #3366CC;">'&quot; alt=&quot;big-photo&quot;&gt;'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  newImage.<span style="color: #660066;">hide</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.photo-gallery .big-photo'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">prepend</span><span style="color: #009900;">&#40;</span>newImage<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  newImage.<span style="color: #660066;">fadeIn</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">1000</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  oldImage.<span style="color: #660066;">fadeOut</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">1000</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">remove</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.photo-gallery .preview-list a:first'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li></ol></pre>
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
          iSrc: './img/small/6',
          iHref: './img/large/slide1.jpg'
        },
        {
          iSrc: './img/small/7',
          iHref: './img/large/slide2.jpg'
        },
        {
          iSrc: './img/small/8',
          iHref: './img/large/slide3.jpg'
        },
        {
          iSrc: './img/small/9',
          iHref: './img/large/slide4.jpg'
        },
        {
          iSrc: './img/small/10',
          iHref: './img/large/slide5.jpg'
        },
        {
          iSrc: './img/small/11',
          iHref: './img/large/slide6.jpg'
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      $('.photo-gallery .preview-list-item img').each(function () {
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

      $('.photo-gallery .preview-list a').on('click', function (event) {
        event.preventDefault()
        const imgPath = $(this).attr('href')
        const oldImage = $('.photo-gallery .big-photo img')
        const newImage = $('<img src="' + imgPath + '" alt="big-photo">')
        newImage.hide()
        $('.photo-gallery .big-photo').prepend(newImage)
        newImage.fadeIn(1000)
        oldImage.fadeOut(1000, function () {
          $(this).remove()
        })
      })

      $('.photo-gallery .preview-list a:first').click()
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/photo-gallery.sass'
</style>
