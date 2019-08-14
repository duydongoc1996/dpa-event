<template lang="pug">
  div.schedule
    div.inner
      div.header
        p
          strong Schedule
      div.body
        b-form(@submit="onSubmit")
          div.schedule-item(
            v-for="(item,index) in form"
            :key="index"
          )
            hr(v-if="index !== 0")
            b-form-group(label="Time")
              b-form-input(
                v-model="form[index].time"
                required
              )
            b-form-group(label="Title")
              b-form-input(
                v-model="form[index].title"
                required
              )
            b-form-group(label="Subtitle")
              b-form-input(
                v-model="form[index].subtitle"
                required
              )
            b-form-group(label="Content")
              b-form-input(
                v-model="form[index].content"
                required
              )
            div.remove-schedule
              b-button(
                squared
                variant="outline-danger"
                @click="removeSchedule(index)"
              ) Delete schedule
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
      schedules: null,
      default: {
        time: null,
        title: null,
        subtitle: null,
        content: null
      },
      form: [
      ]
    }
  },
  mounted() {
    // Get list schedule
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/schedules'
    }).then((res) => {
      if (res.data.length === 0) {
        this.form = []
      } else {
        res.data.forEach((element) => {
          this.form.push({
            time: element.time,
            title: element.title,
            subtitle: element.event,
            content: element.speaker
          })
        })
      }
    }).catch(err => this.$log.debug(err))
  },
  methods: {
    addSchedule() {
      const newSchedule = Object.assign({}, this.default)
      this.form.push(newSchedule)
    },
    removeSchedule(index) {
      this.form.splice(index, 1)
    },
    onSubmit(e) {
      e.preventDefault()
      this.$log.debug(this.form)
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/schedules/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(this.form)
      }).then((res) => {
        if (!alert(res.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
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
      .remove-schedule
        text-align: center
</style>
