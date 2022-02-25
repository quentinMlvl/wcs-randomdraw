import { deleteStudent, getSpeeches, getStudents, insertStudent, updateStudent, insertSpeech, deleteAllSpeeches } from '../models/studentModels.js';

export const showStudents = (req, res) => {
    getStudents((err, students) => {
        if (err) res.send(err)
        else {
            getSpeeches((err, speeches) => {
                if (err) res.send(err) 
                else {
                    students.map(st => st.speeches= []);
                    speeches.forEach(speech => {
                        const st = students.find(st => st.id == speech.student_id)
                        delete speech.student_id;
                        st.speeches.push(speech);
                    });
                    res.json(students);
                }
                
            })
        }
    })
}

export const addStudent = (req, res) => {
    const data = req.body.student
    insertStudent(data, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}

export const putStudent = (req, res) => {
    const data = req.body.student;
    const id = req.params.id;
    updateStudent(data, id, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}

export const removeStudent = (req, res) => {
    const id = req.params.id;
    deleteStudent(id, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}

export const addSpeech = (req, res) => {
    const id = req.params.id;
    insertSpeech(id, (err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}

export const clearSpeeches = (req, res) => {
    deleteAllSpeeches((err, results) => {
        (err) ? res.send(err) : res.json(results);
    })
}