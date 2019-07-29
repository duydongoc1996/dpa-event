<template lang="pug">
  div.wrapper-attend-form
    div.wrapper-attend-form-inner
      div.attend-header
        p.attend-heading Reserve your seat now
        p.attend-location Imperial Palace Hotel Seoul, Selena Hall (7F), December 20, 2019 | 4:00 PM - 9:00 PM
      div.attend-body
        div.attend-form
          b-form(
            @submit="onSubmit"
          )
            b-container(fluid)
              b-row
                b-col(cols="12")
                  div.attend-code
                    p.title INVITATION CODE
                    p.code {{ form.code }}
                b-col(cols="12")
                  p.form-title ATTENDEE INFORMATION
                b-col(cols="6")
                  b-form-group(
                    label="Prefix"
                    label-for="prefix"
                    label-class="required-input"
                  )
                    b-form-select(
                      id="prefix"
                      required
                      :options="optionsPrefix"
                      v-model="form.prefix"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Company name"
                    label-for="companyname"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="companyname"
                      type="text"
                      required
                      v-model="form.companyName"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Job title"
                    label-for="jobtitle"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="jobtitle"
                      type="text"
                      required
                      v-model="form.jobTitle"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Nationality"
                    label-for="nationality"
                    label-class="required-input"
                  )
                    b-form-select(
                      id="nationality"
                      required
                      :options="optionsNationality"
                      v-model="form.nationality"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="First name"
                    label-for="firstname"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="firstname"
                      type="text"
                      required
                      v-model="form.firstName"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Last name"
                    label-for="lastname"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="lastname"
                      type="text"
                      required
                      v-model="form.lastName"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Email address"
                    label-for="email"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="email"
                      type="email"
                      required
                      v-model="form.email"
                    )
                b-col(cols="6")
                  b-form-group(
                    label="Cell phone"
                    label-for="phone"
                    label-class="required-input"
                  )
                    b-form-input(
                      id="phone"
                      type="text"
                      required
                      v-model="form.phone"
                    )
                b-col(cols="12")
                  p.form-title POLICY
                b-col(cols="12")
                  div.policy-container
                    div.policy-box(
                      v-for="content in policyContent"
                      :key="content.key"
                    )
                      div.select-header
                        b-form-checkbox(
                          v-model="selectedPolicy"
                          :value="content.key"
                        )
                          div.select-content
                            strong {{ content.title }}
                            div.updown-angle
                              fa(:icon="(selectedPolicy == content.key) ? 'angle-up' : 'angle-down'")
                      b-collapse(
                        id="policy-dd"
                        :visible="(selectedPolicy == content.key)"
                      )
                        div.collapse-content {{ content.text }}
                    div.agree-container
                      b-form-checkbox(
                        v-model="agree"
                        :value="true"
                      )
                        div.select-checkbox
                          div.select-checkbox-checked(
                            v-if="agree"
                            required
                          )
                        div.agree-content I have read all the policies &amp; clauses above and I agree.
                b-col(cols="12")
                  div.submit-container
                    b-button(
                      squared
                      type="submit"
                      :disabled="!agree"
                    ) SUBMIT &nbsp;
                      fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionAttendForm',
  props: {
    code: {
      type: String,
      default: null
    },
    submitted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        code: this.code,
        prefix: null,
        companyName: null,
        jobTitle: null,
        nationality: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null
      },
      selectedPolicy: 1,
      agree: false,
      policyContent: [
        {
          key: 1,
          title: 'Event content',
          text: `The 'Decentralized People's Awards Korea (https://www.dpawards.org)' is in Token Post (https://www.tokenpost.kr)'s discretion. Token Post has the right to change and control any and all aspects of the event, including the event name, themes, speakers, venue, date and time.`
        },
        {
          key: 2,
          title: 'Event admission badge usage',
          text: 'The decentralized ....'
        },
        {
          key: 3,
          title: 'Personal information protection',
          text: 'The decentralized ....'
        },
        {
          key: 4,
          title: 'VISA requirements',
          text: 'The decentralized ....'
        },
        {
          key: 5,
          title: 'USe of likeness',
          text: 'The decentralized ....'
        }
      ],
      listNationality: [
        'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
      ],
      optionsNationality: [
        { value: null, text: '-select-' }
      ],
      optionsPrefix: [
        { value: null, text: '-select-' },
        { value: 'Mr', text: 'Mr' },
        { value: 'Mrs', text: 'Mrs' }
      ]
    }
  },
  mounted() {
    // Prepare nationality
    this.listNationality.forEach((x) => {
      this.optionsNationality.push(
        { value: x.toLowerCase(), text: x }
      )
    })
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$log.debug(this.form)
      this.$emit('update:submitted', true)
    }
  }
}
</script>

<style <style lang="sass">
.wrapper-attend-form
  background-color: #2c2c2c
  .wrapper-attend-form-inner
    width: 992px
    margin: 0 auto
    @media only screen and (max-width: 992px)
      width: 100%
    .attend-header
      padding: 50px 0
      text-align: center
      .attend-heading
        color: #cec230
        font-size: 30px
      .attend-location
        color: white
    .attend-body
      border: 1px solid transparent
      border-radius: 10px
      background-color: #f4f4f4
      margin: 0 auto
      padding: 50px 30px
      .attend-form
        .attend-code
          .title
            color: green
            font-size: 30px
            margin: 0
          .code
            text-align: center
            border: 2px solid green
            padding: 10px
            max-width: 20em
            min-height: 2.5em
        .form-title
          font-size: 30px
        .required-input
          font-weight: bold
          &:after
            content: '*'
            color: red
        .form-control
          border-radius: 0
          &:focus
            border-color: #cec230
            box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
        .custom-select
          background: url(~assets/angledown.png) no-repeat right 0.75rem center/16px 16px
          background-color: white
          border-radius: 0
          &:focus
            border-color: #cec230
            box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
        .policy-container
          border-top: 2px solid #cec230
          .policy-box
            border-top: 1px solid #e2e2e2
            border-bottom: 1px solid #e2e2e2
            .select-header
              padding: 10px
              background-color: #f2f2f2
              .custom-control
                padding: 0
                .custom-control-label
                  width: 100%
                  &:before
                    display: none
                  &:after
                    display: none
                  .select-content
                    width: 100%
                    .updown-angle
                      position: absolute
                      right: 0
                      top: 0
                      color: grey
            .collapse-content
              background-color: white
              padding: 10px
          .agree-container
            padding: 50px 0
            .custom-checkbox
              padding: 0
            .custom-control-label
              width: 100%
              &:before
                display: none
              &:after
                display: none
              .select-checkbox
                position: absolute
                display: block
                width: 1.1rem
                height: 1.1rem
                border: 1px solid #d2d2d2
                border-radius: 4px
                .select-checkbox-checked
                  background-color: #cec230
                  border-color: #cec230
                  border-radius: 3px
                  width: 0.8rem
                  height: 0.8rem
                  margin: 0.1rem
              .agree-content
                padding-left: 2em
        .submit-container
          border-top: 2px solid #cec230
          text-align: center
          padding: 30px 0
          button
            padidng: 10px
            background-color: #cec230
            border-color: #cec230
</style>
