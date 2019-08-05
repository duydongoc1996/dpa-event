<template lang="pug">
  div.wrapper-sponsor-form
    div.wrapper-sponsor-form-inner
      div.form-header
        p.form-heading
          strong Sponsorship participation application
        p.form-description This is a sponsorship application for the Decentralized People's Awards Korea 2019 held by Token Post from Dec.20th in Seoul, South Korea
        p.form-description This infomation you provide in this form will be used to better serve you throughout the event.
        p.form-description Please review your response for any typos, spelling errors and unintended misinfomation
        p.form-description BEFORE submitting your application. The event organizers are not obligated to correct the errors,
        p.form-description and what is submitted here will be what goes on every material releases and distributed during the event.
      div.form-body
        b-form(
          @submit="onSubmit"
        )
          b-container(fluid)
            b-row
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
                    v-model="form.companyName"
                  )
              b-col(
                cols="6"
              )
                b-form-group(
                  label="Full name"
                  label-for="fullname"
                  label-class="required-input"
                )
                  b-form-input(
                    id="fullname"
                    type="text"
                    required
                    v-model="form.fullName"
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
                    v-model="form.companyWebsite"
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
                    type="email"
                    required
                    v-model="form.email"
                  )
              b-col(
                cols="6"
              )
                b-form-group(
                  label="Telegram ID"
                  label-for="telegramid"
                  label-class="required-input"
                )
                  b-form-input(
                    id="telegramid"
                    type="text"
                    required
                    v-model="form.telegramId"
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
                    v-model="form.jobTitle"
                  )
              b-col(
                cols="12"
              )
                b-form-group(
                  label="Company's short description"
                  label-for="companydescription"
                  label-class="required-input"
                )
                  b-form-textarea(
                    id="companydescription"
                    required
                    rows="5"
                    v-model="form.companyDescription"
                  )
              b-col(
                cols="12"
              )
                b-form-group(
                  label="Company logo"
                  label-for="companylogo"
                  label-class="required-input"
                )
                  b-form-file(
                    id="companylogo"
                    placeholder="Attach your company's logo as an Ai file or any other printable file (high resolution)"
                    required
                    accept=".jpg, .png, .gif"
                    v-model="form.companyLogo"
                  )
                  div.image-icon
                    fa(icon="image")
              b-col(
                cols="12"
              )
                div.agree-container
                  div.agree
                    b-form-checkbox(
                      v-model="agree"
                      name="agree"
                      required
                    )
                      p I hereby apply a sponsorship participation for the Decentralized People's Awards Korea 2019 (DPA 2019)(http://dpawards.org). We agree to abide by the Rules and Regulations set out the by DPA 2019 organizers.
                    div.agree-checkbox
                      div.agree-checkbox-checked(
                        v-if="agree"
                      )
                  div.submit-btn
                    b-button(
                      squared
                      :disabled="!agree"
                      type="submit"
                    ) SUBMIT &nbsp;
                      fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionSponsorshipForm',
  props: {
    submitted: {
      type: Boolean,
      default: false
    },
    sponsorshipType: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      form: {
        type: this.sponsorshipType,
        companyName: null,
        fullName: null,
        companyWebsite: null,
        email: null,
        telegramId: null,
        jobTitle: null,
        companyDescription: null,
        companyLogo: null
      },
      agree: false
    }
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

<style lang="sass">
.wrapper-sponsor-form
  background-color: white
  .wrapper-sponsor-form-inner
    width: 992px
    margin: 0 auto
    @media only screen and (max-width: 992px)
      width: 100%
    padding: 50px 0
    .form-header
      text-align: center
      .form-heading
        color: #cec230
        font-size: 30px
      .form-description
        margin-bottom: 5px
    .form-body
      padding: 30px 0
      .required-input
        font-weight: bold
        &:after
          content: '*'
          color: red
      .image-icon
        position: absolute
        display: block
        width: 15px
        height: 15px
        left: 30px
        bottom: 30px
        z-index: 1
      .custom-file-label
        padding-left: 3em
        border-radius: 0
        &:focus
          border-color: #cec230
          box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
        &:after
          display: none
      .custom-file-input
        &:focus
          border-color: #cec230
          box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
      .form-control
        border-radius: 0
        &:focus
          border-color: #cec230
          box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
      .custom-file-input:focus ~ .custom-file-label
        border-color: #cec230
        box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
      .agree-container
        margin: 50px 0
        border-top: 2px solid #cec230
        padding: 30px 0
        .agree
          position: relative
          .agree-checkbox
            position: absolute
            left: 0
            top: 0
            width: 1.1rem
            height: 1.1rem
            border: 1px solid #d2d2d2
            border-radius: 4px
            .agree-checkbox-checked
              background-color: #cec230
              border-color: #cec230
              border-radius: 3px
              width: 0.8rem
              height: 0.8rem
              margin: 0.1rem
          .custom-control-label
            &:before
              display: none
            &:after
              display: none
        .submit-btn
          text-align: center
          padding-top: 30px
          button
            background-color: #cec230
            border-color: #cec230

</style>
