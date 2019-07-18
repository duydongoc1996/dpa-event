<template lang="pug">
  div.wrapper-form
    div.wrapper-form-inner
      b-form(
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
                )
          b-row
            b-col(
              cols="12"
            )
              p.form-title
                strong ABOUT THE NOMINEE
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
                  v-model="isself"
                  :class="isself ? 'self-checkbox self-checked' : 'self-checkbox'"
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
                  v-model="prefix"
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
                )
            b-col(
              cols="6"
            )
              b-form-group(
                label="Award category"
                label-for="awardcategroy"
                label-class="required-input"
              )
                b-form-select(
                  id="awardcategory"
                  required
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
                )
            b-col(
              cols="12"
            )
              b-form-group(
                label="Please provide links to online video or audio featuring the nominee."
                label-for="linkmedia"
                label-class="required-input"
              )
                b-form-input(
                  id="linkmedia"
                  type="text"
                  required
                )
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
                  required
                )
            b-col(
              cols="12"
            )
              b-form-group(
                label="Do you know this person personally? - It's okay even if you do not"
              )
                b-form-radio(
                  button
                ) Yes
                b-form-radio(
                  button
                ) No
            b-col(
              cols="12"
            )
              div.submit-button
                b-button(squared variant="warning") SUBMIT
</template>
<script>
export default {
  name: 'SectionForm',
  data() {
    return {
      isself: false,
      prefix: null,
      optionsPrefix: [
        { value: null, text: '-select-' },
        { value: 'Mr', text: 'Mr' },
        { value: 'Mrs', text: 'Mrs' }
      ]
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

</style>
