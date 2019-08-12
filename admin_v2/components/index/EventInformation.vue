<template lang="pug">
  div.event-information
    div.inner
      div.header
        p
          strong Event information
      div.body
        b-form
          b-form-group(
            label="Title"
          )
            b-form-input()
          b-form-group(
            label="Date"
          )
            b-form-input()
          b-form-textarea(
            rows="5"
          )
          div.center
            b-button(
              type="submit"
              squared
              variant="warning"
            )
              fa(icon="edit")
              span  EDIT
</template>
<script>
export default {
  name: 'EventInformation',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.event-information
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
