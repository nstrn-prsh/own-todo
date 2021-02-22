import http from "./httpService";
import api from "./api.json";

  //note:  url + tasks.json

//hameye task ha - get
export const getTask = () => {
     return http.get(`${api.firebase}/tasks.json`);
};

// ezafe kardan task - post
export const addTaskAxios = (task) => {
     return http.post(`${api.firebase}/tasks.json`, task);
};

// hazfe task - delete
export const deleteTask = (taskId) => {
     return http.delete(`${api.firebase}/tasks/${taskId}.json`);
};

// update task -put
/*
export const updateCourse = (taskId, task) => {
     return http.put(`${api.firebase}/tasks/${taskId}.json`, task);
};
*/
/*
[{…}]
0:
complete: false
id: "-MU85v1FSC1Z2IXQeoGx"
task: "nastaran"
*/
