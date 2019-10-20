<template>
  <div
    class="content work-with-form">
    <div class="header">Work with form</div>
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
@import '../assets/sass/work-with-form.sass'
</style>
