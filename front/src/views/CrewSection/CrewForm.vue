<template>

    <form @submit.prevent="submitForm">
        <h3 v-if="isModifying">Modify {{ modifiedStudent.first_name }} {{ modifiedStudent.last_name }}</h3>
        <h3 v-else>Add a student</h3>
        <div class="input-container">
            <div>
                <label for="firstname">First name</label>
                <input type="text" name="firstname" id="firstname" v-model="first_name">
            </div>
            <div>
                <label for="lastname">Last name</label>
                <input type="text" name="lastname" id="lastname" v-model="last_name">
            </div>
            <div class="button-container">
                <button id="submit-form" :disabled="!isFormValid">Save 💾</button>
                <button v-if="isModifying" id="submit-form" @click="cancelModify" :disabled="!isFormValid">Cancel ❌</button>
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { addStudent, modifyStudent } from "@/API/API.js"

    export default {
        name: "CrewForm",
        data(){
            return {
                first_name: '',
                last_name: '',
            }
        },
        computed: {
            ...mapGetters([
                'isModifying',
                'modifiedStudent'
            ]),

            isFormValid(){
                return (this.first_name.length && this.last_name.length);
            },
        },
        methods: {
            ...mapMutations([
                "setModifiedStudent"
            ]),
            ...mapActions([
                "getStudents"
            ]),
            submitForm(){
                if (this.isFormValid) {
                    (this.isModifying) ? this.modifyStudent() : this.addStudent();
                }
            },
            async addStudent() {
                await addStudent({ 
                    first_name : this.first_name,
                    last_name: this.last_name
                });
                await this.getStudents();
            },
            async modifyStudent() {
                await modifyStudent(
                    this.modifiedStudent.id,
                    {
                        first_name : this.first_name,
                        last_name : this.last_name
                })
                this.cancelModify();
                await this.getStudents();

            },
            cancelModify(){
                this.setModifiedStudent();
            }
        },
        watch: {
            modifiedStudent : function(){
                this.first_name = this.modifiedStudent?.first_name || '';
                this.last_name = this.modifiedStudent?.last_name || '';
            }
        }
    }
</script>

<style lang="sass" scoped>
@import "../../assets/globalstyle.sass"

form
    text-align: center

.input-container > div
    text-align: left
    padding: 0 1rem
    display: flex
    flex-direction: column

#submit-form
    margin: 1rem

@media screen and (min-width: $screen-bp)
    .input-container
        display: flex
        justify-content: space-between
    
        & > div 
            flex-grow: 2
            
    div.button-container
        display: flex
        flex-direction: row
        flex-grow: 1

</style>