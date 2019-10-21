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
              <input name="password" type="password" placeholder="*****">
            </div>
            <div class="form-item">
              <label name="confirm-the-password">Confirm</label>
              <input name="confirm-the-password" type="password" placeholder="*****">
            </div>
              <div class="form-item">
              <label name="date-of-birth">Date of birth</label>
              <input name="date-of-birth" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item">
              <label name="planet-of-birth">Planet of birth</label>
              <select name="planet-of-birth">
                <option>Select a planet</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
                <option value="alpha centauri">Jupiter</option>
              </select>
            </div>
            <div class="form-item form-item-radio">
              <span class="add-tag">Hobby</span>
              <input name="payment" value="skiing" type="checkbox">
              <label name="payment" value="skiing">Skiing</label>
              <input name="payment" value="eating-marinades" type="checkbox">
              <label name="payment" value="eating-marinades">Eating marinades</label>
              <input name="payment" value="cooking-peanut-butter" type="checkbox">
              <label name="payment" value="cooking-peanut-butter">Cooking</label>
            </div>
            <div class="form-item form-item-textarea">
              <label name="comments">Comments</label>
              <textarea name="comments" cols="15" rows="5"></textarea>
            </div>
            <div class="form-item form-item-radio">
              <span class="add-tag">To receive the newsletter</span>
              <input name="newsletter" value="PayPal" type="radio">
              <label name="newsletter" value="PayPal">Yes</label>
              <input name="newsletter" value="Visa" type="radio">
              <label name="newsletter" value="Visa">No</label>
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
      $('.header').each(function () {
        const ths = $(this)
        ths.html(ths.html().replace('tr', 't<span>r</span>'))
      })
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/registration.sass'
</style>
