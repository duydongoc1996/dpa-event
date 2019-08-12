<template lang="pug">
  div.judge
    div.inner
      div.header
        p
          strong Judges
      div.body
        b-form
          b-form-group(label="Name")
            b-form-input()
          b-form-group(label="Job title")
            b-form-input()
          b-form-group(label="Organization/association/company name")
            b-form-input()
          b-form-group(label="Headshot image file of the judge")
            b-form-file()
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD JUDGE
</template>
<script>
export default {
  name: 'Judge',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.judge
  .inner
    .header
    .body
      background-color: white
      border-radius: 1em
      padding: 2em
      .center
        text-align: center
        .btn
          background-color: #d1c531
          border-color: #d1c531
          color: white
</style>
