import React, { Fragment } from "react";

const ToDoList = ({ tasks }) => {
     return (
          <Fragment>
               <p className='tasksAlert'>Tasks</p>
               <ul className='todo'>
                    {tasks.map((item) => (
                         <div className='task' key={item.id}>
                              <div className='content'>
                                   <li className='left'>{item.value}</li>
                              </div>
                              <button className='right'> x </button>
                         </div>
                    ))}
               </ul>
          </Fragment>
     );
};

export default ToDoList;
