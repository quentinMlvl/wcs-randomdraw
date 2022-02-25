<template>
<DrawSection/>
<CrewSection />
<SpeechSection />


</template>

<script>
import SpeechSection from "./SpeechSection.vue"
import CrewSection from "./CrewSection"
import DrawSection from './DrawSection.vue'


export default {
  name: 'Home',
  components: {
    SpeechSection,
    CrewSection,
    DrawSection,
  }
}
</script>

<style lang="sass">


</style>
