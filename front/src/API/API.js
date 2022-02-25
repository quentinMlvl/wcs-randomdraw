import axios from "axios";
import { apiBaseUrl as baseUrl } from "../../app.config.json"

export const getStudents = async () => {
    return axios.get(`${baseUrl}/students`).then((res, err) => {
        if(err) console.log(err);
        else return res.data;
    })
}

export const addStudent = async (data) => {
    return axios.post(`${baseUrl}/students`, { student: data })
                .then((res, err) => {
                    if(err) console.log(err);
                    else return res.data
                })
}

export const deleteStudent = async (id) => {
    return axios.delete(`${baseUrl}/students/${id}`).then((res, err) => {
        if(err) console.log(err);
        else return res.data;
    })
}

export const modifyStudent = async (id, data) => {
    return axios.put(`${baseUrl}/students/${id}`, { student: data })
                .then((res, err) => {
                    if(err) console.log(err);
                    else return res.data
                });
}

export const postSpeech = async (id) => {
    return axios.post(`${baseUrl}/students/${id}/speech`)
                .then((res, err) => {
                    if(err) console.log(err);
                    else return res.data;
                })
}