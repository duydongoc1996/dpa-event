<template lang="pug">
  div.wrapper-process
    div.wrapper-process-inner
      div.header
        p
          strong DPA winner selection process
      div.body
        div.line
        b-container(fluid)
          b-row
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="~/assets/image/process1.png"
                    fluid
                  )
                div.content
                  p.title Nominate
                  p.date
                  p.text One can nominate the person he/she wants to nominate. He/she can nominate himself/herself as well.

            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="~/assets/image/process2.png"
                    fluid
                  )
                div.content
                  p.title Vote
                  p.date
                  p.text Conduct a large-scale public vote. (Voting power: 50%)
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="~/assets/image/process3.png"
                    fluid
                  )
                div.content
                  p.title Evaluation
                  p.date
                  p.text Evaluation process from committee members of the host (voting power: 30%) and related association (voting power: 20%).
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="~/assets/image/process4.png"
                    fluid
                  )
                div.content
                  p.title Announcement
                  p.date
                  p.text Announce the award winners synthesizing the result of the public vote and the evaluation result from committee members of the host organization and related association.
</template>
<script>
export default {
  name: 'SectionSelectionProcess',
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.wrapper-process
  background-color: black
  .wrapper-process-inner
    .header
      text-align: center
      padding: 50px 0 30px 0
      p
        color: #cec230
        font-size: 30px
    .body
      position: relative
      padding: 0 10%
      padding-bottom: 50px
      @media only screen and (max-width: 2000px)
        padding: 0 10%
      @media only screen and (max-width: 768px)
        padding: 0 5%
      .process-col
        @media only screen and (max-width: 768px)
          padding: 0 5px
        .process
          .image
            height: fit-content
            text-align: center
          .content
            padding-top: 10px
            text-align: center
            color: white
            .title
              font-weight: bold
              font-size: 20px
            .date
            .text
      .line
        position: absolute
        border: 5px solid #447095
        top: 80px
        left: 0
        width: 100%
        @media only screen and (max-width: 576px)
          display: none
</style>
