import React, { Fragment, useReducer, useCallback } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import Search from "./Search";

const taskReducer = (state, action) => {
     switch (action.type) {
          case "ADD_TASK":
               return [...state, action.payload];
          // meghdar haye ghablio bayad dashte bashe va meghdare jadid ro behesh ezafe kone
          case "SEARCH":
               return action.payload;
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

     return (
          <Fragment>
               <section>
                    <Search loadTasks={searchTaskHandler} />
                    <ToDoList tasks={tasks} />
               </section>

               <ToDoForm addTask={addTaskHandler} />
          </Fragment>
     );
};

export default ToDo;
