<template>
  <div
    class="content smart-menu">
    <div class="header">Smart menu</div>
    <div class="smart-menu-list">
      <ul class="sm sm-simple">
        <li><a href="#">Домой</a></li>
        <li><a href="#">О нас</a>
          <ul>
            <li><a href="#">Наша история</a></li>
            <li><a href="#">Как нас найти</a></li>
            <li><a href="#">Часы работы</a></li>
          </ul>
        </li>
        <li><a href="#">Наши товары</a>
          <ul>
            <li><a href="#">Штуковины</a>
              <ul>
                <li><a href="#">Простая штуковина</a></li>
                <li><a href="#">Стандартная штуковина</a></li>
                <li><a href="#">Продвинутая штуковина</a></li>
              </ul>
            </li>
            <li><a href="#">Гаджеты</a>
              <ul>
                <li><a href="#">Простой гаджет</a></li>
                <li><a href="#">Стандартный гаджет</a></li>
                <li><a href="#">Продвинутый гаджет</a>
                  <ul>
                    <li><a href="#">Продвинутый гаджет А</a></li>
                    <li><a href="#">Продвинутый гаджет Б</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Машины времени</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <CodeBtn />
    <CodeBox >
      <pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">' .sm'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">smartmenus</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    showFunction<span style="color: #339933;">:</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span>$ul<span style="color: #339933;">,</span> complete<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $ul.<span style="color: #660066;">slideDown</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">250</span><span style="color: #339933;">,</span> complete<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    hideFunction<span style="color: #339933;">:</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span>$ul<span style="color: #339933;">,</span> complete<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      $ul.<span style="color: #660066;">slideUp</span><span style="color: #009900;">&#40;</span><span style="color: #CC0000;">250</span><span style="color: #339933;">,</span> complete<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li></ol></pre>
    </CodeBox>
  </div>
</template>

<script>
import CodeBtn from '@/components/CodeBtn.vue'
import CodeBox from '@/components/CodeBox.vue'
import $ from 'jquery'

export default {
  name: 'home',
  components: {
    CodeBtn,
    CodeBox
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(() => {
      $(' .sm').smartmenus({
        showFunction: function ($ul, complete) {
          $ul.slideDown(250, complete)
        },
        hideFunction: function ($ul, complete) {
          $ul.slideUp(250, complete)
        }
      })
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/smart-menu.sass'
</style>

<style src="smartmenus/dist/css/sm-core-css.css">
</style>

<style src="smartmenus/dist/css/sm-simple/sm-simple.css">
</style>
