import React, { Fragment } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDo = () => {
     const tasks = [{ id: 1, value: "hi" }];
     return (
          <Fragment>
               <section>
                    {/* search */}
                    <ToDoList tasks={tasks} />
               </section>

               <ToDoForm />
          </Fragment>
     );
};

export default ToDo;
