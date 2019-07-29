<template lang="pug">
  div
    h3 Set Schedule's Order
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Schedule ID"
        label-for="id"
      )
        b-form-input(
          id="id"
          type="text"
          required
          v-model="id"
        )
      b-form-group(
        label="Order"
        label-for="order"
      )
        b-form-input(
          id="order"
          type="text"
          required
          v-model="order"
        )
      b-button(
        type="submit"
        squared
        block
        variant="outline-danger"
      ) Submit
</template>
<script>
export default {
  name: 'Order',
  data() {
    return {
      id: null,
      order: null
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/schedule/order/' + this.id,
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        },
        data: {
          order: this.order
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
