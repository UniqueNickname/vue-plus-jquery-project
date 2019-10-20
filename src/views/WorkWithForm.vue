<template>
  <div
    class="content work-with-form">
    <div class="header">Work with a form</div>
    <form method="post" class="form">
       <fieldset>
         <legend>Payment Information</legend>
         <div class="form-list">
            <div class="form-item">
              <label name="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item">
              <label name="surname">Surname</label>
              <input name="surname" type="text" placeholder="Bloodwine">
            </div>
            <div class="form-item">
              <label name="region">Region</label>
              <input name="region" type="text" placeholder="Moscow region">
            </div>
            <div class="form-item">
              <label name="sity">Sity</label>
              <input name="sity" type="text" placeholder="Moscow">
            </div>
              <div class="form-item">
              <label name="address">Address</label>
              <input name="address" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item">
              <label name="postcode">Postcode</label>
              <input name="postcode" type="text" placeholder="141031">
            </div>
            <CountryList />
            <div class="form-item form-item-radio">
              <span class="add-tag">Payment method</span>
              <input name="payment" value="PayPal" type="radio">
              <label name="payment" value="PayPal">PayPal</label>
              <input name="payment" value="Visa" type="radio">
              <label name="payment" value="Visa">Visa</label>
              <input name="payment" value="MasterCard" type="radio">
              <label name="payment" value="MasterCard">MasterCard</label>
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
       <fieldset>
         <legend>Information about delivery</legend>
         <div class="form-list">
            <div class="form-item form-item-checkbox">
              <input name="hideShip" type="checkbox">
              <label name="hideShip">Similar to payment information</label>
            </div>
            <div class="form-item">
              <label name="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item">
              <label name="surname">Surname</label>
              <input name="surname" type="text" placeholder="Bloodwine">
            </div>
            <div class="form-item">
              <label name="region">Region</label>
              <input name="region" type="text" placeholder="Moscow region">
            </div>
            <div class="form-item">
              <label name="sity">Sity</label>
              <input name="sity" type="text" placeholder="Moscow">
            </div>
              <div class="form-item">
              <label name="address">Address</label>
              <input name="address" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item">
              <label name="postcode">Postcode</label>
              <input name="postcode" type="text" placeholder="141031">
            </div>
            <CountryList />
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
import CountryList from '@/components/CountryList.vue'
// import $ from 'jquery'

export default {
  name: 'home',
  components: {
    CodeBtn,
    CodeBox,
    CountryList
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
