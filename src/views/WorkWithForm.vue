<template>
  <div
    class="content work-with-form">
    <div class="header">Work with a form</div>
    <form method="post" class="form">
       <fieldset>
         <legend>Payment Information</legend>
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
         <div class="form-item">
           <label name="country">Country</label>
           <select name="country">
              <option>Select a country</option>
              <option value="/ru/">Russia </option>
              <option value="/us/">U.S.A. </option>
              <option value="/us_espanol/">U.S.A. - Espa&ntilde;ol </option>
              <option value="/af/">Afghanistan </option>
              <option value="/al/">Albania </option>
              <option value="/dz/">Algeria </option>
              <option value="/as/">American Samoa </option>
              <option value="/ad/">Andorra </option>
              <option value="/ao/">Angola </option>
              <option value="/ai/">Anguilla </option>
              <option value="/ag/">Antigua </option>
              <option value="/ar/">Argentina </option>
              <option value="/am/">Armenia </option>
              <option value="/aw/">Aruba </option>
              <option value="/au/">Australia </option>
              <option value="/at/">Austria </option>
              <option value="/az/">Azerbaijan </option>
              <option value="/bs/">Bahamas </option>
              <option value="/bh/">Bahrain </option>
              <option value="/bd/">Bangladesh </option>
              <option value="/bb/">Barbados </option>
              <option value="/ag/">Barbuda </option>
              <option value="/by/">Belarus </option>
              <option value="/be/">Belgium </option>
              <option value="/bz/">Belize </option>
              <option value="/bj/">Benin </option>
              <option value="/bm/">Bermuda </option>
              <option value="/bt/">Bhutan </option>
              <option value="/bo/">Bolivia </option>
              <option value="/an/">Bonaire </option>
              <option value="/ba/">Bosnia-Herzegovina </option>
              <option value="/bw/">Botswana </option>
              <option value="/br/">Brazil </option>
              <option value="/vg/">British Virgin Islands </option>
              <option value="/bn/">Brunei </option>
              <option value="/bg/">Bulgaria </option>
              <option value="/bf/">Burkina Faso </option>
              <option value="/bi/">Burundi </option>
              <option value="/kh/">Cambodia </option>
              <option value="/cm/">Cameroon </option>
              <option value="/ca_english/">Canada - English </option>
              <option value="/ca_french/">Canada - Francais </option>
              <option value="/cv/">Cape Verde </option>
              <option value="/ky/">Cayman Islands </option>
              <option value="/cf/">Central African Republic </option>
              <option value="/td/">Chad </option>
              <option value="/gb/">Channel Islands </option>
              <option value="/cl/">Chile </option>
              <option value="/cn/">China </option>
              <option value="/co/">Colombia </option>
              <option value="/cg/">Congo - Brazzaville </option>
              <option value="/cd/">Congo, The Republic of </option>
              <option value="/ck/">Cook Islands </option>
              <option value="/cr/">Costa Rica </option>
              <option value="/hr/">Croatia </option>
              <option value="/an/">Curacao </option>
              <option value="/cy/">Cyprus </option>
              <option value="/cz/">Czech Republic </option>
              <option value="/dk/">Denmark </option>
              <option value="/dj/">Djibouti </option>
              <option value="/dm/">Dominica </option>
              <option value="/do/">Dominican Republic </option>
              <option value="/ec/">Ecuador </option>
              <option value="/eg/">Egypt </option>
              <option value="/sv/">El Salvador </option>
              <option value="/gq/">Equatorial Guinea </option>
              <option value="/er/">Eritrea </option>
              <option value="/ee/">Estonia </option>
              <option value="/et/">Ethiopia </option>
              <option value="/fo/">Faroe Islands </option>
              <option value="/fj/">Fiji </option>
              <option value="/fi/">Finland </option>
              <option value="/fr/">France </option>
              <option value="/gf/">French Guiana </option>
              <option value="/pf/">French Polynesia </option>
              <option value="/ga/">Gabon </option>
              <option value="/gm/">Gambia </option>
              <option value="/ge/">Georgia </option>
              <option value="/de/">Germany </option>
              <option value="/gh/">Ghana </option>
              <option value="/gi/">Gibraltar </option>
              <option value="/gr/">Greece </option>
              <option value="/gl/">Greenland </option>
              <option value="/gd/">Grenada </option>
              <option value="/gp/">Guadeloupe </option>
              <option value="/gu/">Guam </option>
              <option value="/gt/">Guatemala </option>
              <option value="/gw/">Guinea Bissau </option>
              <option value="/gn/">Guinea </option>
              <option value="/gy/">Guyana </option>
              <option value="/ht/">Haiti </option>
              <option value="/hn/">Honduras </option>
              <option value="/hk/">Hong Kong </option>
              <option value="/hu/">Hungary </option>
              <option value="/is/">Iceland </option>
              <option value="/in/">India </option>
              <option value="/id/">Indonesia </option>
              <option value="/ir/">Iran </option>
              <option value="/iq/">Iraq </option>
              <option value="/ie/">Ireland </option>
              <option value="/il/">Israel </option>
              <option value="/it/">Italy </option>
              <option value="/ci/">Ivory Coast </option>
              <option value="/jm/">Jamaica </option>
              <option value="/jp/">Japan </option>
              <option value="/jo/">Jordan </option>
              <option value="/kz/">Kazakhstan </option>
              <option value="/ke/">Kenya </option>
              <option value="/kw/">Kuwait </option>
              <option value="/kg/">Kyrgyzstan </option>
              <option value="/la/">Laos </option>
              <option value="/lv/">Latvia </option>
              <option value="/lb/">Lebanon </option>
              <option value="/ls/">Lesotho </option>
              <option value="/lr/">Liberia </option>
              <option value="/ly/">Libya </option>
              <option value="/li/">Liechtenstein </option>
              <option value="/lt/">Lithuania </option>
              <option value="/lu/">Luxembourg </option>
              <option value="/mo/">Macau </option>
              <option value="/mk/">Macedonia, The Republic of </option>
              <option value="/mg/">Madagascar </option>
              <option value="/mw/">Malawi </option>
              <option value="/my/">Malaysia </option>
              <option value="/mv/">Maldives </option>
              <option value="/ml/">Mali </option>
              <option value="/mt/">Malta </option>
              <option value="/mh/">Marshall Islands </option>
              <option value="/mq/">Martinique </option>
              <option value="/mr/">Mauritania </option>
              <option value="/mu/">Mauritius </option>
              <option value="/mx/">Mexico </option>
              <option value="/fm/">Micronesia </option>
              <option value="/md/">Moldova </option>
              <option value="/mc/">Monaco </option>
              <option value="/mn/">Mongolia </option>
              <option value="/me/">Montenegro </option>
              <option value="/ms/">Montserrat </option>
              <option value="/ma/">Morocco </option>
              <option value="/mz/">Mozambique </option>
              <option value="/mm/">Myanmar/Burma </option>
              <option value="/na/">Namibia </option>
              <option value="/np/">Nepal </option>
              <option value="/an/">Netherlands Antilles </option>
              <option value="/nl/">Netherlands </option>
              <option value="/nc/">New Caledonia </option>
              <option value="/nz/">New Zealand </option>
              <option value="/ni/">Nicaragua </option>
              <option value="/ne/">Niger </option>
              <option value="/ng/">Nigeria </option>
              <option value="/no/">Norway </option>
              <option value="/om/">Oman </option>
              <option value="/pk/">Pakistan </option>
              <option value="/pw/">Palau </option>
              <option value="/pa/">Panama </option>
              <option value="/pg/">Papua New Guinea </option>
              <option value="/py/">Paraguay </option>
              <option value="/pe/">Peru </option>
              <option value="/ph/">Philippines </option>
              <option value="/pl/">Poland </option>
              <option value="/pt/">Portugal </option>
              <option value="/pr/">Puerto Rico </option>
              <option value="/qa/">Qatar </option>
              <option value="/re/">Reunion </option>
              <option value="/ro/">Romania </option>
              <option value="/rw/">Rwanda </option>
              <option value="/an/">Saba </option>
              <option value="/mp/">Saipan </option>
              <option value="/sm/">San Marino </option>
              <option value="/sa/">Saudi Arabia </option>
              <option value="/sn/">Senegal </option>
              <option value="/rs/">Serbia </option>
              <option value="/sc/">Seychelles </option>
              <option value="/sl/">Sierra Leone </option>
              <option value="/sg/">Singapore </option>
              <option value="/sk/">Slovak Republic </option>
              <option value="/si/">Slovenia </option>
              <option value="/so/">Somalia </option>
              <option value="/za/">South Africa </option>
              <option value="/kr/">South Korea </option>
              <option value="/es/">Spain </option>
              <option value="/lk/">Sri Lanka </option>
              <option value="/gp_english/">St. Barthelemy </option>
              <option value="/vi/">St. Croix </option>
              <option value="/an/">St. Eustatius </option>
              <option value="/kn/">St. Kitts and Nevis </option>
              <option value="/lc/">St. Lucia </option>
              <option value="/an/">St. Maarten/St. Martin </option>
              <option value="/vi/">St. Thomas </option>
              <option value="/vc/">St. Vincent </option>
              <option value="/sd/">Sudan </option>
              <option value="/sr/">Suriname </option>
              <option value="/sz/">Swaziland </option>
              <option value="/se/">Sweden </option>
              <option value="/ch/">Switzerland </option>
              <option value="/sy/">Syria </option>
              <option value="/tw/">Taiwan </option>
              <option value="/tz/">Tanzania </option>
              <option value="/th/">Thailand </option>
              <option value="/tg/">Togo </option>
              <option value="/vg/">Tortola </option>
              <option value="/tt/">Trinidad and Tobago </option>
              <option value="/tn/">Tunisia </option>
              <option value="/tr/">Turkey </option>
              <option value="/tm/">Turkmenistan </option>
              <option value="/tc/">Turks and Caicos Islands </option>
              <option value="/vi/">U.S. Virgin Islands </option>
              <option value="/ug/">Uganda </option>
              <option value="/ua/">Ukraine </option>
              <option value="/ae/">United Arab Emirates </option>
              <option value="/gb/">United Kingdom </option>
              <option value="/uy/">Uruguay </option>
              <option value="/us/">U.S.A. </option>
              <option value="/uz/">Uzbekistan </option>
              <option value="/vu/">Vanuatu </option>
              <option value="/va/">Vatican City </option>
              <option value="/ve/">Venezuela </option>
              <option value="/vn/">Vietnam </option>
              <option value="/wf/">Wallis &amp; Futuna </option>
              <option value="/ye/">Yemen </option>
              <option value="/zm/">Zambia </option>
              <option value="/zw/">Zimbabwe </option>
            </select>
         </div>
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
       </fieldset>
       <fieldset>
         <legend>Information about delivery</legend>
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
         <div class="form-item">
           <label name="country">Country</label>
           <select name="country">
              <option>Select a country</option>
              <option value="/ru/">Russia </option>
              <option value="/us/">U.S.A. </option>
              <option value="/us_espanol/">U.S.A. - Espa&ntilde;ol </option>
              <option value="/af/">Afghanistan </option>
              <option value="/al/">Albania </option>
              <option value="/dz/">Algeria </option>
              <option value="/as/">American Samoa </option>
              <option value="/ad/">Andorra </option>
              <option value="/ao/">Angola </option>
              <option value="/ai/">Anguilla </option>
              <option value="/ag/">Antigua </option>
              <option value="/ar/">Argentina </option>
              <option value="/am/">Armenia </option>
              <option value="/aw/">Aruba </option>
              <option value="/au/">Australia </option>
              <option value="/at/">Austria </option>
              <option value="/az/">Azerbaijan </option>
              <option value="/bs/">Bahamas </option>
              <option value="/bh/">Bahrain </option>
              <option value="/bd/">Bangladesh </option>
              <option value="/bb/">Barbados </option>
              <option value="/ag/">Barbuda </option>
              <option value="/by/">Belarus </option>
              <option value="/be/">Belgium </option>
              <option value="/bz/">Belize </option>
              <option value="/bj/">Benin </option>
              <option value="/bm/">Bermuda </option>
              <option value="/bt/">Bhutan </option>
              <option value="/bo/">Bolivia </option>
              <option value="/an/">Bonaire </option>
              <option value="/ba/">Bosnia-Herzegovina </option>
              <option value="/bw/">Botswana </option>
              <option value="/br/">Brazil </option>
              <option value="/vg/">British Virgin Islands </option>
              <option value="/bn/">Brunei </option>
              <option value="/bg/">Bulgaria </option>
              <option value="/bf/">Burkina Faso </option>
              <option value="/bi/">Burundi </option>
              <option value="/kh/">Cambodia </option>
              <option value="/cm/">Cameroon </option>
              <option value="/ca_english/">Canada - English </option>
              <option value="/ca_french/">Canada - Francais </option>
              <option value="/cv/">Cape Verde </option>
              <option value="/ky/">Cayman Islands </option>
              <option value="/cf/">Central African Republic </option>
              <option value="/td/">Chad </option>
              <option value="/gb/">Channel Islands </option>
              <option value="/cl/">Chile </option>
              <option value="/cn/">China </option>
              <option value="/co/">Colombia </option>
              <option value="/cg/">Congo - Brazzaville </option>
              <option value="/cd/">Congo, The Republic of </option>
              <option value="/ck/">Cook Islands </option>
              <option value="/cr/">Costa Rica </option>
              <option value="/hr/">Croatia </option>
              <option value="/an/">Curacao </option>
              <option value="/cy/">Cyprus </option>
              <option value="/cz/">Czech Republic </option>
              <option value="/dk/">Denmark </option>
              <option value="/dj/">Djibouti </option>
              <option value="/dm/">Dominica </option>
              <option value="/do/">Dominican Republic </option>
              <option value="/ec/">Ecuador </option>
              <option value="/eg/">Egypt </option>
              <option value="/sv/">El Salvador </option>
              <option value="/gq/">Equatorial Guinea </option>
              <option value="/er/">Eritrea </option>
              <option value="/ee/">Estonia </option>
              <option value="/et/">Ethiopia </option>
              <option value="/fo/">Faroe Islands </option>
              <option value="/fj/">Fiji </option>
              <option value="/fi/">Finland </option>
              <option value="/fr/">France </option>
              <option value="/gf/">French Guiana </option>
              <option value="/pf/">French Polynesia </option>
              <option value="/ga/">Gabon </option>
              <option value="/gm/">Gambia </option>
              <option value="/ge/">Georgia </option>
              <option value="/de/">Germany </option>
              <option value="/gh/">Ghana </option>
              <option value="/gi/">Gibraltar </option>
              <option value="/gr/">Greece </option>
              <option value="/gl/">Greenland </option>
              <option value="/gd/">Grenada </option>
              <option value="/gp/">Guadeloupe </option>
              <option value="/gu/">Guam </option>
              <option value="/gt/">Guatemala </option>
              <option value="/gw/">Guinea Bissau </option>
              <option value="/gn/">Guinea </option>
              <option value="/gy/">Guyana </option>
              <option value="/ht/">Haiti </option>
              <option value="/hn/">Honduras </option>
              <option value="/hk/">Hong Kong </option>
              <option value="/hu/">Hungary </option>
              <option value="/is/">Iceland </option>
              <option value="/in/">India </option>
              <option value="/id/">Indonesia </option>
              <option value="/ir/">Iran </option>
              <option value="/iq/">Iraq </option>
              <option value="/ie/">Ireland </option>
              <option value="/il/">Israel </option>
              <option value="/it/">Italy </option>
              <option value="/ci/">Ivory Coast </option>
              <option value="/jm/">Jamaica </option>
              <option value="/jp/">Japan </option>
              <option value="/jo/">Jordan </option>
              <option value="/kz/">Kazakhstan </option>
              <option value="/ke/">Kenya </option>
              <option value="/kw/">Kuwait </option>
              <option value="/kg/">Kyrgyzstan </option>
              <option value="/la/">Laos </option>
              <option value="/lv/">Latvia </option>
              <option value="/lb/">Lebanon </option>
              <option value="/ls/">Lesotho </option>
              <option value="/lr/">Liberia </option>
              <option value="/ly/">Libya </option>
              <option value="/li/">Liechtenstein </option>
              <option value="/lt/">Lithuania </option>
              <option value="/lu/">Luxembourg </option>
              <option value="/mo/">Macau </option>
              <option value="/mk/">Macedonia, The Republic of </option>
              <option value="/mg/">Madagascar </option>
              <option value="/mw/">Malawi </option>
              <option value="/my/">Malaysia </option>
              <option value="/mv/">Maldives </option>
              <option value="/ml/">Mali </option>
              <option value="/mt/">Malta </option>
              <option value="/mh/">Marshall Islands </option>
              <option value="/mq/">Martinique </option>
              <option value="/mr/">Mauritania </option>
              <option value="/mu/">Mauritius </option>
              <option value="/mx/">Mexico </option>
              <option value="/fm/">Micronesia </option>
              <option value="/md/">Moldova </option>
              <option value="/mc/">Monaco </option>
              <option value="/mn/">Mongolia </option>
              <option value="/me/">Montenegro </option>
              <option value="/ms/">Montserrat </option>
              <option value="/ma/">Morocco </option>
              <option value="/mz/">Mozambique </option>
              <option value="/mm/">Myanmar/Burma </option>
              <option value="/na/">Namibia </option>
              <option value="/np/">Nepal </option>
              <option value="/an/">Netherlands Antilles </option>
              <option value="/nl/">Netherlands </option>
              <option value="/nc/">New Caledonia </option>
              <option value="/nz/">New Zealand </option>
              <option value="/ni/">Nicaragua </option>
              <option value="/ne/">Niger </option>
              <option value="/ng/">Nigeria </option>
              <option value="/no/">Norway </option>
              <option value="/om/">Oman </option>
              <option value="/pk/">Pakistan </option>
              <option value="/pw/">Palau </option>
              <option value="/pa/">Panama </option>
              <option value="/pg/">Papua New Guinea </option>
              <option value="/py/">Paraguay </option>
              <option value="/pe/">Peru </option>
              <option value="/ph/">Philippines </option>
              <option value="/pl/">Poland </option>
              <option value="/pt/">Portugal </option>
              <option value="/pr/">Puerto Rico </option>
              <option value="/qa/">Qatar </option>
              <option value="/re/">Reunion </option>
              <option value="/ro/">Romania </option>
              <option value="/rw/">Rwanda </option>
              <option value="/an/">Saba </option>
              <option value="/mp/">Saipan </option>
              <option value="/sm/">San Marino </option>
              <option value="/sa/">Saudi Arabia </option>
              <option value="/sn/">Senegal </option>
              <option value="/rs/">Serbia </option>
              <option value="/sc/">Seychelles </option>
              <option value="/sl/">Sierra Leone </option>
              <option value="/sg/">Singapore </option>
              <option value="/sk/">Slovak Republic </option>
              <option value="/si/">Slovenia </option>
              <option value="/so/">Somalia </option>
              <option value="/za/">South Africa </option>
              <option value="/kr/">South Korea </option>
              <option value="/es/">Spain </option>
              <option value="/lk/">Sri Lanka </option>
              <option value="/gp_english/">St. Barthelemy </option>
              <option value="/vi/">St. Croix </option>
              <option value="/an/">St. Eustatius </option>
              <option value="/kn/">St. Kitts and Nevis </option>
              <option value="/lc/">St. Lucia </option>
              <option value="/an/">St. Maarten/St. Martin </option>
              <option value="/vi/">St. Thomas </option>
              <option value="/vc/">St. Vincent </option>
              <option value="/sd/">Sudan </option>
              <option value="/sr/">Suriname </option>
              <option value="/sz/">Swaziland </option>
              <option value="/se/">Sweden </option>
              <option value="/ch/">Switzerland </option>
              <option value="/sy/">Syria </option>
              <option value="/tw/">Taiwan </option>
              <option value="/tz/">Tanzania </option>
              <option value="/th/">Thailand </option>
              <option value="/tg/">Togo </option>
              <option value="/vg/">Tortola </option>
              <option value="/tt/">Trinidad and Tobago </option>
              <option value="/tn/">Tunisia </option>
              <option value="/tr/">Turkey </option>
              <option value="/tm/">Turkmenistan </option>
              <option value="/tc/">Turks and Caicos Islands </option>
              <option value="/vi/">U.S. Virgin Islands </option>
              <option value="/ug/">Uganda </option>
              <option value="/ua/">Ukraine </option>
              <option value="/ae/">United Arab Emirates </option>
              <option value="/gb/">United Kingdom </option>
              <option value="/uy/">Uruguay </option>
              <option value="/us/">U.S.A. </option>
              <option value="/uz/">Uzbekistan </option>
              <option value="/vu/">Vanuatu </option>
              <option value="/va/">Vatican City </option>
              <option value="/ve/">Venezuela </option>
              <option value="/vn/">Vietnam </option>
              <option value="/wf/">Wallis &amp; Futuna </option>
              <option value="/ye/">Yemen </option>
              <option value="/zm/">Zambia </option>
              <option value="/zw/">Zimbabwe </option>
            </select>
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
@import '../assets/sass/work-with-form.sass'
</style>
