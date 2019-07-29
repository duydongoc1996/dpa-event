<template lang="pug">
  div
    h3 Create schedule
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Event"
        label-for="event"
      )
        b-form-input(
          id="event"
          type="text"
          required
          v-model="event"
        )
      b-form-group(
        label="Title"
        label-for="title"
      )
        b-form-input(
          id="title"
          type="text"
          required
          v-model="title"
        )
      b-form-group(
        label="Speaker"
        label-for="speaker"
      )
        b-form-input(
          id="speaker"
          type="text"
          required
          v-model="speaker"
        )
      b-form-group(
        label="Time"
        label-for="time"
      )
        b-form-input(
          id="time"
          type="text"
          required
          placeholder="5:30PM - 6:50PM"
          v-model="time"
        )
      b-button(
        type="submit"
        squared
        block
        variant="outline-info"
      ) Submit
</template>
<script>
export default {
  name: 'Create',
  data() {
    return {
      event: null,
      title: null,
      speaker: null,
      time: null
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/schedule',
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        },
        data: {
          event: this.event,
          title: this.title,
          speaker: this.speaker,
          time: this.time
        }
      }).then((res) => {
        if (!alert(res.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
