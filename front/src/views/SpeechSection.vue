<template>
<section id="speech-section">
  <template v-if="speeches.length">
      <h2>List of speeches 🕬</h2>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(speech, index) in speeches" :key="index" >
            <td>{{ speech.student.first_name }}</td>
            <td>{{ speech.student.last_name }}</td>
            <td>{{ speech.date }}</td>
            <td>{{ speech.time }}</td>
          </tr>
        </tbody>
      </table>
  </template>
  <h2 v-else>No speech for now</h2>

</section>
</template>

<script>
import { mapGetters } from 'vuex';


    export default {
      name: "SpeechSection",
      computed: {
        ...mapGetters(["speeches"])
      }
    }
</script>

<style lang="sass" scoped>
table
  margin-bottom: 2rem
</style>