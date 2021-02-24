import React, { Fragment, useReducer, useCallback } from "react";
import api from "./../../Services/api.json";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Search from "./Search";
import axios from "axios";
import { toastWarning } from "./../UI/toastMsg";

const taskReducer = (state, action) => {
     switch (action.type) {
          case "ADD":
               return [...state, action.payload];
          case "SEARCH":
               return action.payload;
          case "DELETE":
               return action.payload;
          case "DONE":
               return action.payload;
          default:
               return state;
     }
};

const ToDo = () => {
     const [tasks, dispatch] = useReducer(taskReducer, []);

     const addTaskHandler = (items) => {
          axios.post(`${api.firebase}/tasks.json`,items).then((resData) => {
                    dispatch({
                         type: "ADD",
                         payload: {
                              id: resData.name,
                              ...items,
                              // complete: false,
                         },
                    });
               })
     };

     /* items: maghadiri ke search shodan
     bar asase items, state ro update mikone
     note: harbar ke ma ye chizi minevisim 
     to input in tabe ye request mifreste 
     va state hey update mishe 
     dar natije ye loopi az request ha ijad mishe 
     ke ma ba useCallback jelosho migirim */
     const searchTaskHandler = useCallback((items) => {
          dispatch({ type: "SEARCH", payload: items });
     }, []);

     const copyTasks = [...tasks];

     const taskIndex = (taskId) => {
          const tasksIndex = copyTasks.findIndex((item) => item.id === taskId);
          const task = copyTasks[tasksIndex];
          return task;
     };

     const deleteTaskHandler = (taskId) => {
          const filterTasks = copyTasks.filter((item) => item.id !== taskId);
          axios.delete(`${api.firebase}/tasks/${taskId}.json`);
          dispatch({ type: "DELETE", payload: filterTasks });
          const task = taskIndex(taskId);
          toastWarning(`${task.task} deleted!`);
     };

     const doneTaskHandler = (taskId) => {
          const task = taskIndex(taskId);
          task.complete = !task.complete;
          dispatch({ type: "DONE", payload: copyTasks });
     };

     console.log(tasks);

     return (
          <Fragment>
               <section>
                    <Search loadTasks={searchTaskHandler} tasks={tasks} />
                    <ToDoList
                         tasks={tasks}
                         taskDelete={deleteTaskHandler}
                         doneTask={doneTaskHandler}
                    />
               </section>

               <ToDoForm addTask={addTaskHandler} />
          </Fragment>
     );
};

export default ToDo;
