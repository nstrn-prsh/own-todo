import React, { Fragment } from "react";

const ToDoList = ({ tasks, taskDelete, doneTask }) => {
     return (
          <Fragment>
               {tasks.length > 0 ? (
                    <ul className='todo'>
                         {tasks.map((item) => (
                              <div className='task' key={item.id}>
                                   <div className='content'>
                                        <li
                                             className='left'
                                             onClick={() => doneTask(item.id)}
                                        >
                                             {item.complete ? (
                                                  <del>{item.task}</del>
                                             ) : (
                                                  item.task
                                             )}
                                        </li>
                                   </div>
                                   <button
                                        className='right'
                                        onClick={() => {
                                             taskDelete(item.id);
                                        }}
                                   >
                                        x
                                   </button>
                                   <button className='right'> edit </button>
                              </div>
                         ))}
                    </ul>
               ) : (
                    <p className='nullWeather'>
                         Hey! welcome... <br /> make your own todo list :)
                    </p>
               )}
          </Fragment>
     );
};

export default ToDoList;
