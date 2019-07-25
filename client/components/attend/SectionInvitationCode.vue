<template lang="pug">
  div.wrapper-code
    div.wrapper-code-inner
      p.code-heading Type in your invitation code in the box
      div.code-form
        b-form(
          @submit="validateInvitationCode"
        )
          b-input.code-input(
            v-model="invitationCode"
            maxLength="15"
            required
          )
          b-button.code-submit(
            squared
            block
            type="submit"
          ) SUBMIT &nbsp;
            fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionInvitationCode',
  props: {
    code: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      invitationCode: ''
    }
  },
  methods: {
    validateInvitationCode(e) {
      e.preventDefault()
      this.$emit('update:code', this.invitationCode.toUpperCase())
    }
  }
}
</script>
<style lang="sass" scoped>
.wrapper-code
  background-color: #2c2c2c
  padding: 100px 0
  width: 100%
  .wrapper-code-inner
    width: 768px
    border: 1px solid transparent
    border-radius: 20px
    background-color: #f4f4f4
    margin: 0 auto
    padding: 100px
    text-align: center
    @media only screen and (max-width: 768px)
      width: 90%
    .code-heading
      color: #cec230
      font-size: 30px
    .code-form
      max-width: 25em
      margin: 0 auto
      .code-input
        text-align: center
        &:focus
          border-color: #cec230
          box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
      .code-submit
        background-color: #cec230
        border-color: #cec230
        margin-top: 20px
</style>
