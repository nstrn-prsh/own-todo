import React, { useState, useContext } from "react";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import Input from "./../Common/Input";

const ToDoForm = ({ addTask }) => {
     const { mode } = useContext(ThemeContext);
     const [task, setTask] = useState("");

     return (
          <div className='addControls'>
               <form
                    onSubmit={(event) => {
                         event.preventDefault();
                         addTask({
                              task: task,
                         });
                    }}
               >
                    <div className='addControlsLeft'>
                         <div className='col3'>
                              <Input
                                   config={{
                                        type: "text",
                                        placeholder: "add your task...",
                                        id: "task",
                                   }}
                                   value={task}
                                   onChange={(event) =>
                                        setTask(event.target.value)
                                   }
                              />
                              <span className='focus-border'></span>
                         </div>
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
                              <span>+</span>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default ToDoForm;
