import db from "../config/db.js";

export const getStudents = (res) => {
    db.query("SELECT * FROM STUDENT", (err, student) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, student);
    })
}

export const getSpeeches = (res) => {
    db.query("SELECT * FROM SPEECH", (err, speech) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else { 
            res(null, speech)
        };
    })
}

export const insertStudent = (data, res) => {
    db.query("INSERT INTO STUDENT (first_name, last_name) VALUES (?, ?)", [data.first_name, data.last_name], (err, results) => {
        if(err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    });
}


export const updateStudent = (data, id, res) => {
    db.query("UPDATE STUDENT SET first_name = ?, last_name = ? WHERE id = ?", [data.first_name, data.last_name, id], (err, results) => {
        if(err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    });
}


export const deleteStudent = (id, res) => {
    db.query("DELETE FROM STUDENT WHERE id = ?", [id], (err, results) => {
        if(err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    });
}



export const insertSpeech = (id, res) => {
    db.query("INSERT INTO SPEECH (student_id) VALUES (?)", [id], (err, results) => {
        if(err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    });
}

export const deleteAllSpeeches = (res) => {
    db.query("DELETE FROM SPEECH", (err, results) => {
        if (err) {
            console.log(err); 
            res(err, null);
        } else res(null, results);
    })
}