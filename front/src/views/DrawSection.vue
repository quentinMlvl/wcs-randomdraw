<template>
<section id="draw-section">
  <div>
    <h2>Draw a student 🔮</h2>
    <button class="draw-btn" @click="drawBtnClicked">Draw!</button>
    <p class="draw-results">
      <template v-if="rStudent">
        {{ rStudent.first_name }} {{ rStudent.last_name }}
      </template>
      <template>...</template>
    </p>
  </div>
  <div>
    <template v-if="drawnStudents.length">
      <h2>Already Drawn Students</h2>
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(student, i) in drawnStudents" :key="i">
            <td>{{ student.first_name }}</td>
            <td>{{ student.last_name }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    <h2 v-else>No student drawn for now</h2>
  </div>
</section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

    export default {
        name: "DrawSection",
        data() {
          return {
            rStudent: null,
          }
        },
        computed: {
          ...mapGetters(["randomStudent", "drawnStudents", "students", "notDrawnStudents"])
        },
        methods: {
          ...mapActions(['drawRandomStudent', 'setDrawnStudents']),
          drawBtnClicked: async function() {
              this.setDrawnStudents();
              if (this.drawnStudents.length != this.students.length - 1) {
                const boucle = setInterval(() => {
                  this.rStudent = this.notDrawnStudents[Math.floor(Math.random()*this.notDrawnStudents.length)];
                }, 100)
                
                const animationTime = Math.floor(Math.random() * 3) + 1;
                await setTimeout(() => {
                  clearInterval(boucle)
                  this.drawRandomStudent()
                }, animationTime * 1000)
              }else {
                this.drawRandomStudent()
              } 
          },
        },
        watch: {
            randomStudent : function(){
              this.rStudent = this.randomStudent
            }
        }
    }
</script>

<style lang="sass" scoped>
#draw-section
  text-align: center
</style>