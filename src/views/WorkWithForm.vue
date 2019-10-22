<template>
  <div
    class="content work-with-form">
    <div class="header">Work with a form</div>
    <form method="post" class="form">
       <fieldset>
         <legend>Payment Information</legend>
         <div class="form-list">
            <div class="form-item">
              <label for="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item">
              <label for="surname">Surname</label>
              <input name="surname" type="text" placeholder="Bloodwine">
            </div>
            <div class="form-item">
              <label for="region">Region</label>
              <input name="region" type="text" placeholder="Moscow region">
            </div>
            <div class="form-item">
              <label for="sity">Sity</label>
              <input name="sity" type="text" placeholder="Moscow">
            </div>
              <div class="form-item">
              <label for="address">Address</label>
              <input name="address" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item">
              <label for="postcode">Postcode</label>
              <input name="postcode" type="text" placeholder="141031">
            </div>
            <CountryList />
            <div class="form-item form-item-radio">
              <span class="add-tag">Payment method</span>
              <input name="payment" value="PayPal" class="payment-disable" type="radio">
              <label for="payment" value="PayPal">PayPal</label>
              <input name="payment" value="Visa" class="payment-enable" type="radio">
              <label for="payment" value="Visa">Visa</label>
              <input name="payment" value="MasterCard" class="payment-enable" type="radio">
              <label for="payment" value="MasterCard">MasterCard</label>
            </div>
            <div class="card-data">
              <div class="form-item">
                <label for="card-number">Card number</label>
                <input name="card-number" type="text" placeholder="4444-4444-4444-4444">
              </div>
              <div class="form-item">
                <label for="validity">Validity</label>
                <input name="validity" type="text" placeholder="04/20">
              </div>
           </div>
         </div>
       </fieldset>
       <fieldset>
         <legend>Information about delivery</legend>
         <div class="form-list">
            <div class="form-item form-item-checkbox">
              <input name="hide-ship" type="checkbox">
              <label for="hide-ship">Similar to payment information</label>
            </div>
            <div class="form-item form-item-hide">
              <label for="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item form-item-hide">
              <label for="surname">Surname</label>
              <input name="surname" type="text" placeholder="Bloodwine">
            </div>
            <div class="form-item form-item-hide">
              <label for="region">Region</label>
              <input name="region" type="text" placeholder="Moscow region">
            </div>
            <div class="form-item form-item-hide">
              <label for="sity">Sity</label>
              <input name="sity" type="text" placeholder="Moscow">
            </div>
              <div class="form-item form-item-hide">
              <label for="address">Address</label>
              <input name="address" type="text" placeholder="Mytishchi, Silicate street, 10/7">
            </div>
            <div class="form-item form-item-hide">
              <label for="postcode">Postcode</label>
              <input name="postcode" type="text" placeholder="141031">
            </div>
            <CountryList class="form-item-hide" />
         </div>
       </fieldset>
    </form>
    <CodeBtn />
    <CodeBox >
      <pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.payment-disable'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.card-data input'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">prop</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      .<span style="color: #660066;">css</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'background-color'</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'#333'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.card-data label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">css</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'color'</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'#333'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.payment-enable'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.card-data input'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">prop</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'disabled'</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      .<span style="color: #660066;">css</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'background-color'</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'#1a997a'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.card-data label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">css</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'color'</span><span style="color: #339933;">,</span> <span style="color: #3366CC;">'#ffffff'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-radio label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">const</span> value <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'value'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'input[value=&quot;'</span> <span style="color: #339933;">+</span> value <span style="color: #339933;">+</span> <span style="color: #3366CC;">'&quot;]'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-checkbox input'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-hide'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">toggleClass</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'hide'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-checkbox label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">const</span> v <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'name'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'input[name=&quot;'</span> <span style="color: #339933;">+</span> v <span style="color: #339933;">+</span> <span style="color: #3366CC;">'&quot;]'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li></ol></pre>
    </CodeBox>
  </div>
</template>

<script>
import CodeBtn from '@/components/CodeBtn.vue'
import CodeBox from '@/components/CodeBox.vue'
import CountryList from '@/components/CountryList.vue'
import $ from 'jquery'

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
      $('.header').each(function () {
        const ths = $(this)
        ths.html(ths.html().replace('or', '<span>o</span>r'))
        ths.html(ths.html().replace('fo', 'f<span>o</span>'))
      })
      $('.payment-disable').on('click', function () {
        $('.card-data input').prop('disabled', true)
          .css('background-color', '#333')
        $('.card-data label').css('color', '#333')
      })
      $('.payment-enable').on('click', function () {
        $('.card-data input').prop('disabled', false)
          .css('background-color', '#1a997a')
        $('.card-data label').css('color', '#ffffff')
      })
      $('.form-item-radio label').on('click', function () {
        const value = $(this).attr('value')
        $('input[value="' + value + '"]').click()
      })
      $('.form-item-checkbox input').on('click', function () {
        $('.form-item-hide').toggleClass('hide')
      })
      $('.form-item-checkbox label').on('click', function () {
        const v = $(this).attr('for')
        $('input[name="' + v + '"]').click()
      })
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/work-with-form.sass'
</style>
