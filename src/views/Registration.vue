<template>
  <div
    class="content registration">
    <div class="header">Registration</div>
    <form method="post" class="form">
       <fieldset>
         <legend>Registration</legend>
         <div class="form-list">
            <div class="form-item">
              <label name="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item">
              <label name="email">Email</label>
              <input name="email" type="text" placeholder="Bloodwine">
            </div>
            <div class="form-item">
              <label name="password">Password</label>
              <input name="password" type="text" placeholder="*****">
            </div>
            <div class="form-item">
              <label name="confirm-the-password">Confirm</label>
              <input name="confirm-the-password" type="text" placeholder="*****">
            </div>
              <div class="form-item">
              <label name="date-of-birth">Date of birth</label>
              <input name="date-of-birth" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item">
              <label name="planet-of-birth">Planet of birth</label>
              <input name="planet-of-birth" type="text" placeholder="141031">
            </div>
            <div class="form-item form-item-radio">
              <span class="add-tag">Payment method</span>
              <input name="payment" value="skiing" type="checkbox">
              <label name="payment" value="skiing">Skiing</label>
              <input name="payment" value="eating-marinades" type="checkbox">
              <label name="payment" value="eating-marinades">Eating marinades</label>
              <input name="payment" value="cooking-peanut-butter" type="checkbox">
              <label name="payment" value="cooking-peanut-butter">Cooking peanut butter</label>
            </div>
            <div class="card-data">
              <div class="form-item">
                 <label name="card-number">Card number</label>
                 <input name="card-number" type="text" placeholder="4444-4444-4444-4444">
              </div>
              <div class="form-item">
                 <label name="validity">Validity</label>
                <input name="validity" type="text" placeholder="04/20">
              </div>
           </div>
         </div>
       </fieldset>
    </form>
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
@import '../assets/sass/registration.sass'
</style>
