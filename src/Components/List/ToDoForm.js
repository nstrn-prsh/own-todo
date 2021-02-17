import React, { useState, useContext, useRef, useEffect } from "react";
import { toastError,toastSuccess } from "../UI/toastMsg";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import Input from "./../Common/Input";

const ToDoForm = ({ addTask }) => {
     const { mode } = useContext(ThemeContext);
     const [task, setTask] = useState("");

     const inputFocus = useRef(null);
     useEffect(() => {
          if (inputFocus.current) inputFocus.current.focus();
     }, [inputFocus.current, task]);

     const addTaskHandler = (event) => {
          event.preventDefault();
          let re = /\S/g;
          if (re.exec(task) !== null) {
               addTask({
                    task: task,
               });
               toastSuccess('Task added to your list!')
          } else toastError('Write your task in input!');
          setTask("");
     };

     return (
          <div className='addControls'>
               <form onSubmit={(event) => addTaskHandler(event)}>
                    <div className='addControlsLeft'>
                         <Input
                              config={{
                                   type: "text",
                                   placeholder: "add your task...",
                                   id: "task",
                                   ref: inputFocus,
                              }}
                              value={task}
                              onChange={(event) => setTask(event.target.value)}
                         />
                    </div>
                    <div>
                         <button
                              type='submit'
                              className={
                                   mode === "day"
                                        ? "plusButton plusButtonDay shadow"
                                        : "plusButton plusButtonNight shadow"
                              }
                         >
                              <span style={{ fontWeight: 900 }}>+</span>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default ToDoForm;
