<template>
  <header><h1>Student Random Draw</h1><h1>🔮</h1></header>
  <main>
    <router-view />
  </main>
  <footer><h4>Developper : Quentin Malavielle</h4></footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "App",
  methods: {
    ...mapActions([
      "getStudents"
    ])
  },
  async mounted(){
    await this.getStudents();
  },
}
</script>


<style lang="sass">
@import "./assets/globalstyle.sass";

#app
  font-family: 'Lucida Sans', Verdana, sans-serif
  min-height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-between

  header
    width: 100%
    background-color: $orange
    color: white
    text-align: center

  footer
    width: 100%
    background-color: $yellow
    text-align: center

@media screen and (min-width: $screen-bp)
  header *
    display: inline-block
    &:last-child
      padding-left: 1rem
  main
    width: 75%
  
</style>
