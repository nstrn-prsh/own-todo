import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
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
                         <div className='col-3'>
                              <input
                                   type='text'
                                   className='effect-3 input shadow'
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
                         <button type='submit' className='plusButton shadow'>
                              <span>+</span>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default ToDoForm;
