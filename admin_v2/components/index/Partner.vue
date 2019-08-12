<template lang="pug">
  div.partner
    div.inner
      div.header
        p
          strong Partners
      div.body
        b-form
          b-form-group(label="Company name")
            b-form-input()
          b-form-group(label="Company logo")
            b-form-file()
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD PARTNER
</template>
<style lang="sass" scoped>
.partner
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
