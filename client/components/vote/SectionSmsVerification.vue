<template lang="pug">
  div.sms-container
    div.form-container
      p.title SMS Verification
      p.content Please verify your mobile phone number to process vote.
      div.contain
        b-form.sms-form( id="id-form")
          b-form-select.row.ele(
            id="prefix"
            place-holder="-select-"
            required
            v-model="selected"
            :options="options"
          )
            option(
                  v-for="item in listNationality"
                  :value="item"
                ) {{item}}
          b-row
            b-col.col(cols="7")
              b-form-input.ele(
                id="phone-number"
                type="text"
                placeholder="Your phone numbers"
                required
              )
            b-col.col(cols="5")
              b-button.ele(
                id='btn-sent-code'
                squared
                block
              ) Sent me the code
          b-form-input.row.ele(
                id="verification-code"
                type="text"
                placeholder="Verification code"
                required
              )
          b-button.row.ele(id='verify' squared) Verify
</template>

<script>
export default {
  name: 'SectionSmsVerification',
  data() {
    return {
      selected: null,
      phone_number: null,
      options: [
        { value: null, text: 'Choose your country' }
      ],
      listNationality: [
        'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.sms-container
  width: 100%
  height: 600px
  background-color: #2c2c2c
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  .form-container
    background-color: #fff
    width: 768px
    height: 400px
    border-radius: 10px
    text-align: center
    .title
      color: #cec230
      font-size: 30px
      margin-top: 20px
      font-weight: 600
    .content
      font-size: 20px
    .contain
      margin: 0 auto
      width: 400px
      .sms-form
        width: 100%
        .row
          width: 100%
          margin: 5px 0
        .col
          padding: 0
          margin: 5px 0
        select
          background: url(~assets/angledown.png) no-repeat right 0.75rem center/16px 16px
          &:focus
            border-color: #cec230
        button
          background-color: #cec230
          border-color: #cec230
        .ele
          border-radius: 0
          &:focus
            box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
</style>
