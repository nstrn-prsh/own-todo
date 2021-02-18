import React, { Fragment, useState, useCallback, useEffect } from "react";
import api from "./../../Services/api.json";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Search from "./Search";
import axios from "axios";
import { toastWarning } from "./../UI/toastMsg";

// const taskReducer = (state, action) => {
//      switch (action.type) {
//           case "ADD_TASK":
//                return [...state, action.payload];
//           // meghdar haye ghablio bayad dashte bashe va meghdare jadid ro behesh ezafe kone
//           case "SEARCH":
//                return action.payload;
//           default:
//                throw new Error("Error useReducer");
//      }
// };

const ToDo = () => {
     // const [tasks, dispatch] = useReducer(taskReducer, []);
     const [tasks, setTasks] = useState([]);

     const addTaskHandler = (items) => {
          //note:  url + tasks.json
          fetch(`${api.firebase}/tasks.json`, {
               method: "POST",
               body: JSON.stringify(items),
               headers: { "content-type": "application/json" },
          }).then((res) =>
               res.json().then(
                    (resData) => {
                         setTasks((prevState) => [
                              ...prevState,
                              {
                                   id: resData.name,
                                   ...items,
                              },
                         ]);
                    }
                    // dispatch({
                    //      type: "ADD_TASK",
                    //      payload: { id: resData.name, ...items },
                    // })
               )
          );
     };
     console.log(tasks);
     // console.log(tasks[0]);

     /* items: maghadiri ke search shodan
     bar asase items, state ro update mikone
     note: harbar ke ma ye chizi minevisim 
     to input in tabe ye request mifreste 
     va state hey update mishe 
     dar natije ye loopi az request ha ijad mishe 
     ke ma ba useCallback jelosho migirim */
     const searchTaskHandler = useCallback((items) => {
          // dispatch({ type: "SEARCH", payload: items });
          setTasks(items);
     }, []);

     // vase inke data ghablio fetch kone va data jadid ham ke ezafe shod neshon bede
     useEffect(() => {
          fetch(`${api.firebase}/tasks.json`) // etelaato az firebase migirim
               .then((res) => res.json()) // etelaato be json tabdil mikonim
               .then((resData) => {
                    const tasksList = []; // toye task list etelaato valed mikonim  id/task
                    for (let item in resData) {
                         tasksList.push({
                              id: item,
                              task: resData[item].task,
                         });
                    }
                    setTasks(tasksList);
               });
     }, []);

     const deleteTaskHandler = (taskId) => {
          const copyTasks = [...tasks];
          const filterTasks = copyTasks.filter((item) => item.id !== taskId);
          axios.delete(`${api.firebase}/tasks/${taskId}.json`);
          setTasks(filterTasks);
          
          const tasksIndex = copyTasks.findIndex((item) => item.id === taskId);
          const task = copyTasks[tasksIndex];
          toastWarning(`${task.task} deleted!`);
     };

     return (
          <Fragment>
               <section>
                    <Search loadTasks={searchTaskHandler} tasks={tasks} />
                    <ToDoList tasks={tasks} taskDelete={deleteTaskHandler} />
               </section>

               <ToDoForm addTask={addTaskHandler} />
          </Fragment>
     );
};

export default ToDo;
