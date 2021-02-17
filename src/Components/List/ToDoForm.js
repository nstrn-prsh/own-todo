import React, { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import Input from "./../Common/Input";

const ToDoForm = ({ addTask }) => {
     const { mode } = useContext(ThemeContext);
     const [task, setTask] = useState("");

     const inputFocus = useRef(null);
     useEffect(() => {
          if (inputFocus.current) inputFocus.current.focus();
     }, [inputFocus.current]);

     const clearInputs = () => {
          setTask("");
     };

     return (
          <div className='addControls'>
               <form
                    onSubmit={(event) => {
                         event.preventDefault();
                         addTask({
                              task: task,
                         });
                         clearInputs();
                    }}
               >
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
                              <span style={{ fontWeight: 900}}>+</span>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default ToDoForm;
