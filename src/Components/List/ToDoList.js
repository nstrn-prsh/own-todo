import React, { Fragment } from "react";

const ToDoList = ({ tasks }) => {
     return (
          <Fragment>
               <ul className='todo'>
                    {tasks.map((item) => (
                         <div className='task' key={item.id}>
                              <div className='content'>
                                   <li className='left'>{item.task}</li>
                              </div>
                              <button className='right'> x </button>
                              <button className='right'> edit </button>
                         </div>
                    ))}
               </ul>
          </Fragment>
     );
};

export default ToDoList;
