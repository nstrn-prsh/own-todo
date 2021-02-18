import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "./../../Container/ContextApi/ThemeContext";
import { Badge } from "react-bootstrap";
import Input from "./../Common/Input";
import api from "./../../Services/api.json";

const Search = React.memo(({ loadTasks, tasks }) => {
     const { mode } = useContext(ThemeContext);
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
                    fetch(`${api.firebase}/tasks.json` + query)
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
          /*note: //optimize: 
          tabe cleanup vaghti ejra mishe ke useEffect yebar ejra shode
          va alan mikhad bar asase dependecy ha ejra beshe*/
          return () => clearTimeout(timer);
     }, [searchTask, inputData, loadTasks]);

     return (
          <section>
               <p
                    className={
                         mode === "day"
                              ? "tasksAlert tasksAlertDay"
                              : "tasksAlert tasksAlertNight"
                    }
               >
                    <Badge style={{ fontWeight: "bolder", fontSize: 22 }}>
                         {" "}
                         {tasks.length}
                    </Badge>
                    Tasks
               </p>
               <Input
                    config={{
                         type: "text",
                         placeholder: "search your task...",
                         ref: inputData,
                    }}
                    value={searchTask}
                    onChange={(event) => setSearchTask(event.target.value)}
               />
          </section>
     );
});

export default Search;
