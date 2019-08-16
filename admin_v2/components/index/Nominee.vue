<template lang="pug">
  div.nominee
    div.inner
      div.heading
        p
          strong NOMINEES
      div.body
        b-form
          b-form-group(label="Award category")
            b-form-select()
          b-form-group(label="First Name")
            b-form-input()
          b-form-group(label="Lastname")
            b-form-input()
          b-form-group(label="Headshot of the nominee")
            b-form-file()
          b-form-group(label="Nomination sponsor")
            b-form-checkbox.checkbox-sponsor(
              button
              button-variant="light"
              v-model="form.sponsor"
            )
              div.sponsor
                fa.check(
                  icon="check"
                  :class="(form.sponsor) ? 'checked' : ''"
                )
                span &nbsp; NOMINATION SPONSOR
          div.center
            b-button(
              type="submit"
              squared
            )
              fa(icon="edit")
              span  ADD NOMINEE
</template>
<script>
export default {
  name: 'Nominee',
  data() {
    return {
      form: {
        sponsor: false
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.nominee
  .inner
    .header
    .body
      background-color: white
      border-radius: 1em
      padding: 2em
      .checkbox-sponsor
        background-color: #f4f4f4
        .sponsor
          .check
            padding: 2px
            border-radius: 2em
            background-color: grey
            color: white
          .checked
            background-color: #d1c531
            color: white
      .center
        text-align: center
        .btn
          background-color: #d1c531
          border-color: #d1c531
</style>
