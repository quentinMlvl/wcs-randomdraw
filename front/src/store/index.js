import { createStore } from 'vuex';
import { getStudents, postSpeech } from "@/API/API.js"

const twoDigits = (n) => {
  return ("0" + n).slice(-2)
}

export default createStore({
  state: {
    students: [],
    modifiedStudent: null,
    randomStudent: null, 
    drawnStudents: [],
  },
  getters: {
    students: state => state.students,
    modifiedStudent: state => state.modifiedStudent,
    randomStudent: state => state.randomStudent,
    isModifying: state => !!state.modifiedStudent,
    drawnStudents: state => state.drawnStudents,
    speeches: (state) => {
      const speeches = [];
      state.students.forEach(student => {
        student.speeches.forEach(speech => {
          let d = new Date(speech.date)
          let sp = {
            id: speech.id,
            fullDate: d,
            date: twoDigits(d.getDate()) + "/" + twoDigits(d.getMonth()+1) +"/"+ d.getFullYear(),
            time: twoDigits(d.getHours()) +":" + twoDigits(d.getMinutes()),
            student: {
              first_name: student.first_name,
              last_name: student.last_name,
            }
          }
          speeches.push(sp);
        })
      });
      return speeches.sort((a, b) => b.fullDate - a.fullDate);
    },
    notDrawnStudents: (state) => {
      return state.students.filter((s) => {
        return !state.drawnStudents.includes(s);
      })
    }
  },
  mutations: {
    setStudents(state, students) {
      state.students = students
    },
    setModifiedStudent(state, student = null) {
      state.modifiedStudent = student
    },
    setRandomStudent(state, t) {
      let i = Math.floor(Math.random()*t.length);
      state.randomStudent = t[i];
      state.drawnStudents.push(t[i]);
    }

  },
  actions: {
    async getStudents({ commit }) {
      const students = await getStudents();
      if(students.length) commit('setStudents', students);
    },
    async drawRandomStudent({ commit, dispatch, getters }){
      await commit("setRandomStudent", getters.notDrawnStudents);
      // await dispatch("addSpeech");
    },
    setDrawnStudents({ state, getters }){
      if (getters.notDrawnStudents.length == 0) {
        state.drawnStudents = [];
        state.notDrawnStudents = state.students;
      }
    },
    async addSpeech({ state, dispatch }){
      await postSpeech(state.randomStudent.id);
      await dispatch("getStudents");
    }
  }
})
