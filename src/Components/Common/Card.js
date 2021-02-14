import React, { Component } from "react";
import ToDo from './../List/ToDo';
// import HotAir from './../UI/HotAir';
// import Button from './Button';

class Card extends Component {
     constructor(props) {
          super(props);
          this.state = {
               data: true,
          };
          this.switchToTasks = this.switchToTasks.bind(this);
     }
     switchToTasks() {
          this.setState({ data: false });
     }

     render() {
          // const { data } = this.state;

          return (
               <div className='card shadow gradient'>
                    {/* <div className={data ? "" : "none"}>
                         <HotAir />
                         <div className='start'>
                              <div className='text'>
                                   <h1>Your day’s still empty...</h1>
                                   <p>Put in some tasks and make your day!</p>
                              </div>
                              <Button
                                   className='add shadow'
                                   onClick={() => {
                                        this.switchToTasks();
                                   }}
                              >
                                   Add
                              </Button>
                         </div>
                    </div> */}
                    {/* <div className={!data ? "appear" : "none"}> */}
                         <ToDo />
                    {/* </div> */}
               </div>
          );
     }
}

export default Card;
