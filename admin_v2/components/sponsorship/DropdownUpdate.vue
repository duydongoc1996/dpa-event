<template lang="pug">
  div.dropdown-update
    div.inner
      div.item(
        v-for="(x, index) in items"
        :key="index"
      )
        b-button.update-btn(
          v-b-toggle="`update${target}-${index}`"
          block
          round
          variant="light"
        )
          div.name
            fa(icon="envelope-square")
            span {{ ' ' + x.first_name + ' ' + x.last_name }}
          div.expand
            fa(
              :icon="'angle-' + ((listStateOfCollapse[index] === true) ? 'up' : 'down')"
            )
        div.update
          b-collapse(
            :id="'update' + target + '-' + index"
            v-model="listStateOfCollapse[index]"
          )
            b-form
              b-container(fluid)
                b-row
                  b-col(cols=6)
                    b-form-group(label="First name")
                      b-form-input(
                        v-model="x.first_name"
                        required
                      )
                  b-col(cols=6)
                    b-form-group(label="Last name")
                      b-form-input(
                        v-model="x.last_name"
                        required
                      )
                  b-col(cols=6)
                    b-form-group(label="Email address")
                      b-form-input(
                        v-model="x.email"
                        required
                      )
                  b-col(cols=6)
                    b-form-group(label="Cell phone")
                      b-form-input(
                        v-model="x.phone"
                        required
                      )
                  b-col(cols=12)
                    div.save
                      b-button(
                        @click="updateNominator(x)"
                        variant="success"
                      ) Save
</template>
<script>
export default {
  name: 'DropdownUpdate',
  props: {
    target: {
      type: String,
      default: ''
    },
    content: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      items: this.content,
      listStateOfCollapse: this.content.map(x => false)
    }
  }
}
</script>
