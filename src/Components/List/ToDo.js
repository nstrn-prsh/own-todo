import React, { Fragment, useState, useCallback, useEffect } from "react";
import api from "./../../Services/api.json";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Search from "./Search";
import axios from "axios";
import { toastWarning } from "./../UI/toastMsg";

const ToDo = () => {
     const [tasks, setTasks] = useState([]);

     const addTaskHandler = (items) => {
          axios(`${api.firebase}/tasks.json`)
          .then((resData) => {
               setTasks((prevState) => [
                    ...prevState,
                    {
                         id: resData.name,
                         ...items,
                         complete: false,
                    },
               ]);
          });
     };

     /* items: maghadiri ke search shodan
     bar asase items, state ro update mikone
     note: harbar ke ma ye chizi minevisim 
     to input in tabe ye request mifreste 
     va state hey update mishe 
     dar natije ye loopi az request ha ijad mishe 
     ke ma ba useCallback jelosho migirim */
     const searchTaskHandler = useCallback((items) => {
          setTasks(items);
     }, []);

     // vase inke data ghablio fetch kone va data jadid ham ke ezafe shod neshon bede
     useEffect(() => {
          axios(`${api.firebase}/tasks.json`)
               .then((resData) => {
                    const tasksList = [];
                    for (let item in resData) {
                         tasksList.push({
                              id: item,
                              task: resData[item].task,
                              complete: false,
                         });
                    }
                    setTasks(tasksList);
               });
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
          setTasks(filterTasks);
          const task = taskIndex(taskId);
          toastWarning(`${task.task} deleted!`);
     };

     const doneTaskHandler = (taskId) => {
          const task = taskIndex(taskId);
          task.complete = !task.complete;
          setTasks(copyTasks);
     };

     console.log(tasks);
     console.log(tasks.complete);

     return (
          <Fragment>
               <section>
                    <Search loadTasks={searchTaskHandler} tasks={tasks} />
                    <ToDoList
                         tasks={tasks}
                         setTasks={setTasks}
                         taskDelete={deleteTaskHandler}
                         doneTask={doneTaskHandler}
                    />
               </section>

               <ToDoForm addTask={addTaskHandler} />
          </Fragment>
     );
};

export default ToDo;
