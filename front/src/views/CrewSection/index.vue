<template>
<section id="crew-section">
  <h2>The crew 👨‍🎓</h2>
  <CrewForm />
  <CrewTable />
</section>
</template>

<script>
import CrewTable from './CrewTable.vue'
import CrewForm from './CrewForm.vue'

export default {
  components: { CrewTable, CrewForm },
  name: "CrewSection",
}
</script>

<style lang="scss" scoped>

</style>