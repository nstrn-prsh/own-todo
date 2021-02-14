import React from "react";

const ToDoForm = () => {
     return (
          <div className='addControls'>
               <form>
                    <div className='addControlsLeft'>
                         <div className='col-3'>
                              <input
                                   className='effect-3 input shadow'
                                   type='text'
                                   placeholder='Type your task...'
                              />
                              <span className='focus-border'></span>
                         </div>
                    </div>
                    <div>
                         <button type='button' className='plusButton shadow'>
                              <span>+</span>
                         </button>
                    </div>
               </form>
          </div>
     );
};

export default ToDoForm;
