import React from "react";

const Search = () => {
     return (
          <section>
               <p className='tasksAlert'>Tasks</p>
               <div className='col-3'>
                    <input
                         type='text'
                         className='effect-3 input shadow'
                         placeholder='search here...'
                    />
                    <span className='focus-border'></span>
               </div>
          </section>
     );
};

export default Search;
