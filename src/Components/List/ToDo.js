import React, { Fragment, useReducer } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Search from "./Search";

const taskReducer = (state, action) => {
     switch (action.type) {
          case "ADD_TASK":
               return [...state, action.payload];
          default:
               throw new Error("Error");
     }
};

const ToDo = () => {
     const [tasks, dispatch] = useReducer(taskReducer, []);

     const addTaskHandler = (items) => {
          fetch(
               "https://complete-todo-default-rtdb.firebaseio.com/tasks.json",
               {
                    method: "POST",
                    body: JSON.stringify(items),
                    headers: { "content-type": "application/json" },
               }
          ).then((res) =>
               res.json().then((resData) =>
                    dispatch({
                         type: "ADD_TASK",
                         payload: { id: resData.name, ...items },
                    })
               )
          );
     };

     return (
          <Fragment>
               <section>
                    <Search />
                    <ToDoList tasks={tasks} />
               </section>

               <ToDoForm addTask={addTaskHandler} />
          </Fragment>
     );
};

export default ToDo;
