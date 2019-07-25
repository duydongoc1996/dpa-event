<template lang="pug">
  div.wrapper-form
    div.wrapper-form-inner
      b-form(
        @submit="onSubmit"
      )
        b-container(fluid)
          b-row
            b-col(
              cols="12"
            )
              p.form-title
                strong ABOUT YOU (THE NOMINATOR)
            b-col(
              cols="6"
            )
              b-form-group(
                label="First name"
                label-for="by_firstname"
                label-class="required-input"
              )
                b-form-input(
                  id="by_firstname"
                  type="text"
                  required
                  v-model="formData.byFirstName"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Last name"
                label-for="by_lastname"
                label-class="required-input"
              )
                b-form-input(
                  id="by_lastname"
                  type="text"
                  required
                  v-model="formData.byLastName"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Email address"
                label-for="by_email"
                label-class="required-input"
              )
                b-form-input(
                  id="by_email"
                  type="text"
                  required
                  v-model="formData.byEmail"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Cell phone"
                label-for="by_phone"
                label-class="required-input"
              )
                b-form-input(
                  id="by_phone"
                  type="text"
                  required
                  v-model="formData.byPhone"
                )
          b-row
            b-col(
              cols="12"
            )
              p.form-title
                strong.test ABOUT THE NOMINEE
            b-col(
              cols="6"
            )
              b-form-group(
                label="I am nominating myself."
                label-for="self"
              )
                b-form-checkbox(
                  id="self"
                  button
                  button-variant="outline-light"
                  v-model="formData.isSelf"
                  :class="formData.isSelf ? 'self-checkbox self-checked' : 'self-checkbox'"
                )
                  fa(icon="check-circle")
                  span &nbsp; I am nominating myself
            b-col(
              cols="6"
            )
              b-form-group(
                label="Prefix"
                label-for="prefix"
                label-class="required-input"
              )
                b-form-select(
                  id="prefix"
                  place-holder="-select-"
                  required
                  v-model="formData.prefix"
                  :options="optionsPrefix"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="First name"
                label-for="firstname"
                label-class="required-input"
              )
                b-form-input(
                  id="firstname"
                  type="text"
                  required
                  v-model="formData.firstName"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Last name"
                label-for="lastname"
                label-class="required-input"
              )
                b-form-input(
                  id="lastname"
                  type="text"
                  required
                  v-model="formData.lastName"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Company name"
                label-for="companyname"
                label-class="required-input"
              )
                b-form-input(
                  id="companyname"
                  type="text"
                  required
                  v-model="formData.companyName"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Job title"
                label-for="jobtitle"
                label-class="required-input"
              )
                b-form-input(
                  id="jobtitle"
                  type="text"
                  required
                  v-model="formData.jobTitle"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Company website address"
                label-for="companywebsite"
                label-class="required-input"
              )
                b-form-input(
                  id="companywebsite"
                  type="text"
                  required
                  v-model="formData.companyWebsite"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Cell phone"
                label-for="phone"
                label-class="required-input"
              )
                b-form-input(
                  id="phone"
                  type="text"
                  required
                  v-model="formData.phone"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Email address"
                label-for="email"
                label-class="required-input"
              )
                b-form-input(
                  id="email"
                  type="text"
                  required
                  v-model="formData.email"
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Nationality"
                label-for="nationality"
                label-class="required-input"
              )
                b-form-select(
                  id="nationality"
                  required
                  :options="optionsNationality"
                  v-model="formData.nationality"
                )
            b-col(
              cols="12"
            )
              b-form-group(
                label="Award category"
                label-for="awardcategroy"
                label-class="required-input"
              )
                b-form-select(
                  id="awardcategory"
                  required
                  :options="optionsAwardCategory"
                  v-model="formData.awardCategory"
                )
            b-col(
              cols="12"
            )
              b-form-group(
                label="Tell us about the speaker. Why are you nominating this person?"
                label-for="aboutspeaker"
                label-class="required-input"
              )
                b-form-textarea(
                  id="aboutspeaker"
                  rows="5"
                  required
                  v-model="formData.aboutSpeaker"
                )
            b-col(
              cols="12"
            )
              b-form-group(
                label="Please provide links to online video or audio featuring the nominee."
                label-class="required-input"
              )
                div.linkmedia-container(
                  v-for="x in linksMediaArray.length"
                  :key="x"
                )
                  div.link-icon
                    fa(icon="link")
                  b-form-input.link-input(
                    type="text"
                    required
                    v-model="linksMediaArray[x-1]"
                  )
                  b-button.link-add-btn(
                    @click="addLinkMedia"
                  )
                    fa(icon="plus-square")
                  b-button.link-remove-btn(
                    v-if="x == linksMediaArray.length && x != 1"
                    @click="removeLinkMedia"
                  )
                    fa(icon="backspace")
            b-col(
              cols="12"
            )
              b-form-group(
                label="Please upload a high quality headshot of the nominee."
                label-for="image"
                label-class="required-input"
              )
                b-form-file(
                  id="image"
                  placeholder=""
                  required
                  v-model="formData.avatar"
                  accept=".jpg, .png, .gif"
                )
                div.image-icon
                  fa(icon="image")
            b-col(
              cols="12"
            )
              b-form-group(
                label="Do you know this person personally? - It's okay even if you do not"
              )
                b-form-checkbox(
                  v-model="formData.isKnow"
                  button
                  button-variant="outline-light"
                  :class="formData.isKnow ? 'checkbox-isknow isknow-checked' : 'checkbox-isknow'"
                )
                  fa(icon="check-circle")
                  span &nbsp; Yes
                b-form-checkbox(
                  v-model="formData.isKnow"
                  button
                  button-variant="outline-light"
                  :class="(!formData.isKnow) ? 'checkbox-isknow isknow-checked' : 'checkbox-isknow'"
                )
                  fa(icon="check-circle")
                  span &nbsp; No
            b-col(
              cols="12"
            )
              div.submit-button
                b-button(
                  squared
                  type="submit"
                ) SUBMIT &nbsp;
                  fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionForm',
  props: {
    submitted: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: {
        byFirstName: null, // nominator
        byLastName: null,
        byEmail: null,
        byPhone: null,
        isSelf: false, // nominee
        prefix: null,
        firstName: null,
        lastName: null,
        companyName: null,
        jobTitle: null,
        companyWebsite: null,
        phone: null,
        email: null,
        nationality: null,
        awardCategory: null,
        aboutSpeaker: null,
        linksMedia: null,
        avatar: null,
        isKnow: false
      },
      linksMediaArray: [null],
      optionsPrefix: [
        { value: null, text: '-select-' },
        { value: 'Mr', text: 'Mr' },
        { value: 'Mrs', text: 'Mrs' }
      ],
      optionsKnow: [
        { value: true, text: 'Yes' },
        { value: false, text: 'No' }
      ],
      listNationality: [
        'Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'
      ],
      optionsNationality: [
        { value: null, text: '-select-' }
      ],
      optionsAwardCategory: [
        { value: null, text: '-select-' }
      ],
      numLinkMedia: 1
    }
  },
  mounted() {
    const that = this
    this.$axios.get(process.env.baseUrl + '/vote/categories')
      .then((res) => {
        const categories = res.data
        categories.forEach(function (cate) {
          that.optionsAwardCategory.push(
            { value: cate.name.toLowerCase(), text: cate.name }
          )
        })
      })
      .catch((err) => {
        this.$log.debug(err)
      })
    // Prepare nationality
    this.listNationality.forEach((x) => {
      this.optionsNationality.push(
        { value: x.toLowerCase(), text: x }
      )
    })
  },
  methods: {
    addLinkMedia() {
      this.linksMediaArray.push(null)
    },
    removeLinkMedia() {
      this.linksMediaArray.pop()
    },
    onSubmit(e) {
      e.preventDefault()
      // Join links media
      this.formData.linksMedia = this.linksMediaArray.join(',')
      // Prepare data to submit
      const formBody = new FormData()
      formBody.set('by_first_name', this.formData.byFirstName)
      formBody.set('by_last_name', this.formData.byLastName)
      formBody.set('by_email', this.formData.byEmail)
      formBody.set('by_phone_number', this.formData.byPhone)
      formBody.set('for_self', this.formData.isSelf)
      formBody.set('for_prefix', this.formData.prefix)
      formBody.set('for_first_name', this.formData.firstName)
      formBody.set('for_last_name', this.formData.lastName)
      formBody.set('for_company_name', this.formData.companyName)
      formBody.set('for_job_title', this.formData.jobTitle)
      formBody.set('for_company_website', this.formData.companyWebsite)
      formBody.set('for_phone_number', this.formData.phone)
      formBody.set('for_email', this.formData.email)
      formBody.set('for_nationality', this.formData.nationality)
      formBody.set('vote_award_category', this.formData.awardCategory)
      formBody.set('vote_about_speaker', this.formData.aboutSpeaker)
      formBody.set('vote_links_media', this.formData.linksMedia)
      formBody.set('vote_links_articles', '')
      formBody.set('vote_is_know', this.formData.isKnow)
      formBody.append('image', this.formData.avatar)
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/vote/create',
        data: formBody,
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).then((x) => {
        this.$log.debug(x)
        if (x.data.success) this.$emit('update:submitted', true)
      }).catch(x => this.$log.debug(x))
    }
  }
}
</script>

<style lang="sass">
.wrapper-form
  background-color: white
  .wrapper-form-inner
    width: 992px
    margin: 0 auto
    padding: 100px 0
    @media only screen and (max-width: 992px)
      width: 90%
    .form-title
      margin: 30px 0
      font-size: 24px
    .form-control
      border-radius: 0
      &:focus
        border-color: #cec230
        box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
    .required-input
      &:after
        content: '*'
        color: red
    .self-checkbox
      width: 100%
      .btn
        color: #ced4da
        border-color: #ced4da
        width: 100%
        text-align: left
        border-radius: 0
    .self-checked
      .btn
        color: green
    select
      background: url(~assets/angledown.png) no-repeat right 0.75rem center/16px 16px
      border-radius: 0
      &:focus
        border-color: #cec230
        box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
    .linkmedia-container
      position: relative
      margin: 5px 0
      .link-add-btn
        display: block
        position: absolute
        color: #cec230
        background-color: transparent
        border: none
        right: 0
        bottom: 0
        &:hover
          color: green
      .link-remove-btn
        display: block
        position: absolute
        color: red
        background-color: transparent
        border: none
        right: 2rem
        bottom: 0
        &:hover
          color: green
      .link-icon
        display: block
        position: absolute
        transform: rotate(45deg) translateY(-50%)
        left: 0
        bottom: 0
      .link-input
        padding-left: 2rem
        background-color: white !important
    .custom-file-label
      padding-left: 3em
      border-radius: 0
      &:after
        display: none
    .custom-file-input
    .image-icon
      position: absolute
      display: block
      width: 15px
      height: 15px
      left: 30px
      bottom: 30px
      z-index: 1
    .checkbox-isknow
      display: block
      float: left
      padding: 0 5px
      .btn
        color: #ced4da
        border-color: #ced4da
        text-align: left
        border-radius: 0
        padding: 10px 40px
    .isknow-checked
      .btn
        color: #cec230
    .submit-button
      border-top: 2px solid #cec230
      text-align: center
      padding-top: 50px
      margin-top: 50px
      .btn
        background-color: #cec230
        border-color: #cec230
    label
      font-weight: bold
</style>
