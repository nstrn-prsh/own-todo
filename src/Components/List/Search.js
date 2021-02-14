import React, { useState, useEffect, useRef } from "react";

const Search = React.memo(({ loadTasks }) => {
     const [searchTask, setSearchTask] = useState("");

     const inputData = useRef();

     /* har chizi ke toye input neveshte shod yebar bere samte backend
         va bebine ke hast ya na
        (pas darkhast harbar bar asase meghdare searchTask ferestade mishe
          hamchenin be loadTasks ham bastegi dare)
      age bood neshon bede- bedoone refresh 
      note: to fetch vaghti argumant dovomo nemizarim yani get hast
      new: query az backend miad vali baraye firebese injori neveshte mishe 
     query bayad ba + be url elhagh beshe*/

     useEffect(() => {
          const timer = setTimeout(() => {
               if (searchTask === inputData.current.value) {
                    const query =
                         searchTask.length === 0
                              ? ""
                              : `?orderBy="task"&equalTo="${searchTask}"`;
                    fetch(
                         "https://complete-todo-default-rtdb.firebaseio.com/tasks.json" +
                              query
                    )
                         .then((res) => res.json())
                         .then((resData) => {
                              const tasksList = [];

                              for (let item in resData) {
                                   tasksList.push({
                                        id: item,
                                        task: resData[item].task,
                                   });
                              }

                              loadTasks(tasksList);
                         });
               }
          }, 500);
          return () => clearTimeout(timer);
     }, [searchTask, inputData, loadTasks]);

     return (
          <section>
               <p className='tasksAlert'>Tasks</p>
               <div className='col-3'>
                    <input
                         type='text'
                         ref={inputData}
                         className='effect-3 input shadow'
                         placeholder='search here...'
                         value={searchTask}
                         onChange={(event) => setSearchTask(event.target.value)}
                    />
                    <span className='focus-border'></span>
               </div>
          </section>
     );
});

export default Search;
