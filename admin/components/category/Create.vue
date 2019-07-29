<template lang="pug">
  div
    h3 Create awards category
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Name"
        label-for="name"
      )
        b-form-input(
          id="name"
          type="text"
          required
          v-model="form.name"
        )
      b-form-group(
        label="Level"
        label-for="level"
      )
        b-form-select(
          id="level"
          type="text"
          :options="optionsLevel"
          required
          v-model="form.level"
        )
      b-form-group(
        label="Parent category ID"
        label-for="parent"
      )
        b-form-input(
          id="parent"
          type="text"
          v-model="form.parent"
        )
      b-form-group(
        label="Description"
        label-for="description"
      )
        b-form-input(
          id="description"
          type="text"
          v-model="form.description"
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
  props: {
    categories: {
      type: Array,
      default: null
    }
  },
  data() {
    return {

      form: {
        name: null,
        level: 1,
        parent: null,
        description: null
      },
      optionsLevel: [
        { value: '1', text: '1::Main category' },
        { value: '2', text: '2::Sub category' },
        { value: '3', text: '3::Category item' }
      ],
      optionsParent: null
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/nominate/category/create',
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        },
        data: {
          categoryName: this.form.name,
          level: this.form.level,
          parent: this.form.parent,
          description: this.form.description
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
