<template>
  <div
    class="content smart-menu">
    <div class="header">Smart menu</div>
    <CodeBtn />
    <CodeBox >
      My code
    </CodeBox>
  </div>
</template>

<script>
import CodeBtn from '@/components/CodeBtn.vue'
import CodeBox from '@/components/CodeBox.vue'
// import $ from 'jquery'

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
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/smart-menu.sass'
</style>
