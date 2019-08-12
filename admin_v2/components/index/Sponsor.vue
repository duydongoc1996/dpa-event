<template lang="pug">
  div.sponsor
    div.inner
      div.header
        p
          strong Sponsors
      div.body
        b-form
          b-form-group(label="Company Name")
            b-form-input()
          b-form-group(label="Sponsorship category")
            b-form-input()
          b-form-group(label="Upload company logo file")
            b-form-file()
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD SPONSOR
</template>

<script>
export default {
  name: 'Sponsor',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.sponsor
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
