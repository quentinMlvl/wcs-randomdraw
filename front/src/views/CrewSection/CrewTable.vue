<template>
  <table>
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Speech count</th>
        <th>Edit</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(student, index) in students" :key="index" >
        <td>{{ student.first_name }}</td>
        <td>{{ student.last_name }}</td>
        <td>{{ student.speeches.length }}</td>
        <td class="td-edit"><button @click="editBtnClicked(student)">✒️</button></td>
        <td class="td-remove"><button @click="deleteBtnClicked(student)">❌</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { deleteStudent } from '@/API/API.js';

export default {
      name: "CrewTable",
      computed: {
        ...mapGetters([
          "students"
        ]),
      },
      methods: {
        ...mapMutations([
          "setModifiedStudent"
        ]),
        ...mapActions([
          "getStudents"
        ]),
        async deleteBtnClicked(student) {
          if(confirm(`Are you sure to delete ${student.first_name} ${student.last_name} ?`)){
              await deleteStudent(student.id);
              await this.getStudents();
          }
        },
        editBtnClicked(student) {
          this.setModifiedStudent(student);
        }
      }
  }
</script>

<style lang="sass" scoped>
.td-edit,
.td-remove
  text-align: center

</style>