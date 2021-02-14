import React, { useState, useContext } from "react";
import { ThemeContext } from "./../ContextApi/ThemeContext";

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
                              <input
                                   type='text'
                                   className={
                                        mode === "day"
                                             ? "effect-3 input shadow effect-3-Day"
                                             : "effect-3 input shadow effect-3-Night"
                                   }
                                   placeholder='Type your task...'
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
