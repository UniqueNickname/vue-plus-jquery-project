<template>
  <div
    class="content registration">
    <div class="header">Registration</div>
    <form method="post" class="form">
       <fieldset>
         <legend>Registration</legend>
         <div class="form-list">
            <div class="form-item">
              <label for="name">Name</label>
              <input name="name" type="text" placeholder="Ivan">
            </div>
            <div class="form-item">
              <label for="email">Email</label>
              <input name="email" type="text" placeholder="example@gmail.com">
            </div>
            <div class="form-item">
              <label for="password">Password</label>
              <input name="password" type="password" id="password" placeholder="*****">
            </div>
            <div class="form-item">
              <label for="confirm_password">Confirm</label>
              <input name="confirm_password" type="password" placeholder="*****">
            </div>
              <div class="form-item">
              <label for="date-of-birth">Date of birth</label>
              <input name="date-of-birth" type="text" class="required" placeholder="09/7/1993">
            </div>
            <div class="form-item">
              <label for="planet-of-birth">Planet of birth</label>
              <select name="planet-of-birth" class="required" title="Select a planet">
                <option value="">Select a planet</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
                <option value="alpha centauri">Jupiter</option>
              </select>
            </div>
            <div class="form-item form-item-radio">
              <span class="add-tag">Hobby</span>
              <input name="hobby" value="skiing" class="required" type="checkbox" title="Check at least 1 option">
              <label for="hobby"  value="skiing">Skiing</label>
              <input name="hobby" value="eating-marinades" type="checkbox">
              <label for="hobby"  value="eating-marinades">Eating marinades</label>
              <input name="hobby" value="cooking" type="checkbox">
              <label for="hobby"  value="cooking">Cooking</label>
            </div>
            <div class="form-item form-item-textarea">
              <label for="comments">Comments</label>
              <textarea name="comments" cols="15" rows="5" placeholder="This is the best form"></textarea>
            </div>
            <div class="form-item form-item-radio">
              <span class="add-tag">To receive the newsletter</span>
              <input name="newsletter" value="PayPal" type="radio" class="required" title="Choose an answer option">
              <label for="newsletter" value="PayPal">Yes</label>
              <input name="newsletter" value="Visa" type="radio">
              <label for="newsletter" value="Visa">No</label>
            </div>
         </div>
         <div>
          <input type="submit" name="submit" value="submit" class="submit">
         </div>
       </fieldset>
    </form>
    <CodeBtn />
    <CodeBox >
      <pre class="javascript" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">validate</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  rules<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    name<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">true</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    email<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      email<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">true</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    password<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      rangelength<span style="color: #339933;">:</span> <span style="color: #009900;">&#91;</span><span style="color: #CC0000;">8</span><span style="color: #339933;">,</span> <span style="color: #CC0000;">16</span><span style="color: #009900;">&#93;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    confirm_password<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #003366; font-weight: bold;">true</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      equalTo<span style="color: #339933;">:</span> <span style="color: #3366CC;">'#password'</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  messages<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    name<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #3366CC;">'Enter your name.'</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    email<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #3366CC;">'Enter your email address.'</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      email<span style="color: #339933;">:</span> <span style="color: #3366CC;">'This is an invalid email address.'</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    password<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      required<span style="color: #339933;">:</span> <span style="color: #3366CC;">&quot;Enter you're password&quot;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      rangelength<span style="color: #339933;">:</span> <span style="color: #3366CC;">'Password must be from 8 to 16 characters.'</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    confirm_password<span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      equalTo<span style="color: #339933;">:</span> <span style="color: #3366CC;">'Passwords do not match.'</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  errorPlacement<span style="color: #339933;">:</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span>error<span style="color: #339933;">,</span> element<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">&#40;</span>element.<span style="color: #660066;">is</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">':radio'</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">||</span> element.<span style="color: #660066;">is</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">':checkbox'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      error.<span style="color: #660066;">appendTo</span><span style="color: #009900;">&#40;</span>element.<span style="color: #660066;">parent</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">      error.<span style="color: #660066;">insertAfter</span><span style="color: #009900;">&#40;</span>element<span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #009900;">&#125;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-checkbox label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> v <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'for'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'input[name=&quot;'</span> <span style="color: #339933;">+</span> v <span style="color: #339933;">+</span> <span style="color: #3366CC;">'&quot;]'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">$<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'.form-item-radio label'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">on</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'click'</span><span style="color: #339933;">,</span> <span style="color: #000066; font-weight: bold;">function</span> <span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  <span style="color: #000066; font-weight: bold;">const</span> value <span style="color: #339933;">=</span> $<span style="color: #009900;">&#40;</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">attr</span><span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'value'</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">  $<span style="color: #009900;">&#40;</span><span style="color: #3366CC;">'input[value=&quot;'</span> <span style="color: #339933;">+</span> value <span style="color: #339933;">+</span> <span style="color: #3366CC;">'&quot;]'</span><span style="color: #009900;">&#41;</span>.<span style="color: #660066;">click</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span></div></li><li style="font-weight: bold; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span></div></li></ol></pre>
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
      $('.form').validate({
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          password: {
            required: true,
            rangelength: [8, 16]
          },
          confirm_password: {
            required: true,
            equalTo: '#password'
          }
        },
        messages: {
          name: {
            required: 'Enter your name.'
          },
          email: {
            required: 'Enter your email address.',
            email: 'This is an invalid email address.'
          },
          password: {
            required: "Enter you're password",
            rangelength: 'Password must be from 8 to 16 characters.'
          },
          confirm_password: {
            equalTo: 'Passwords do not match.'
          }
        },
        errorPlacement: function (error, element) {
          if (element.is(':radio') || element.is(':checkbox')) {
            error.appendTo(element.parent())
          } else {
            error.insertAfter(element)
          }
        }
      })
      $('.form-item-checkbox label').on('click', function () {
        const v = $(this).attr('for')
        $('input[name="' + v + '"]').click()
      })
      $('.form-item-radio label').on('click', function () {
        const value = $(this).attr('value')
        $('input[value="' + value + '"]').click()
      })
    })
  }
}
</script>

<style lang="sass">
@import '../assets/sass/registration.sass'
</style>
