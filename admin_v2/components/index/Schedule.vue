<template lang="pug">
  div.schedule
    div.inner
      div.header
        p
          strong Schedule
      div.body
        b-form
          div.schedule-item(
            v-for="(item,index) in form"
          )
            hr(v-if="index !== 0")
            b-form-group(label="Time")
              b-form-input()
            b-form-group(label="Title")
              b-form-input()
            b-form-group(label="Subtitle")
              b-form-input()
            b-form-group(label="Content")
              b-form-input()
          div.add-schedule
            b-button(
              squared
              block
              variant="outline"
              @click="addSchedule"
            ) Add schedule
          div.submit-btn
            b-button(
              type="submit"
              squared
            )
              fa(icon="edit")
              span  EDIT
</template>
<script>
export default {
  name: 'Schedule',
  data() {
    return {
      default: {
        time: null,
        title: null,
        subtitle: null,
        content: null
      },
      form: [
        {
          time: null,
          title: null,
          subtitle: null,
          content: null
        }
      ]
    }
  },
  methods: {
    addSchedule() {
      const newSchedule = Object.assign({}, this.default)
      this.form.push(newSchedule)
    }
  }
}
</script>
<style lang="sass" scoped>
.schedule
  .inner
    .header
    .body
      background-color: white
      border-radius: 1em
      padding: 2em
      .schedule-item
        background-color: #f4f4f4
        padding: 1em 2em
      .submit-btn
        text-align: center
        .btn
          background-color: #d1c531
          border-color: #d1c531
      .add-schedule
        .btn
          color: #d1c531
          border-color: #d1c531
</style>
