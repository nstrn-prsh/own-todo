import React, { Component } from "react";

class ToDo extends Component {
     constructor(props) {
          super(props);
          this.state = {
               init: [
                    { value: "Don't" },
                    { value: "forget" },
                    { value: "to like (:" },
               ],
               adder: false,
               value: "",
          };

          this.handleText = this.handleText.bind(this);
          this.remove = this.remove.bind(this);
          this.add = this.add.bind(this);
     }

     handleText(text) {
          this.setState({
               todo: {
                    value: text.target.value,
                    time: this.state.time,
               },
               value: text.target.value,
          });
     }

     remove(el) {
          el.style = {
               animationName: "disappear",
               animationDuration: ".6s",
               animationTimingFunction: "cubic-bezier(.53,-0.17,.91,-0.2)",
          };
          this.setState(this.state);
          const update = this.state.init.filter((e) => {
               console.log(e !== el);
               return e !== el;
          });
          setTimeout(() => {
               this.setState({ init: update });
          }, 600);
     }

     add(e) {
          e.preventDefault();
          e.stopPropagation();

          var todo = [this.state.todo];
          todo.push(...this.state.init);
          console.log(todo);
          this.setState({
               init: todo,
               adder: false,
               value: "",
               time: "",
          });
     }

     showAdder() {
          this.setState({ adder: true });
     }

     render() {
          return (
               <div>
                    <div className='todo'>
                         <p style={{textAlign: 'center'}}>Tasks</p>
                         {this.state.init.map((e, i) => {
                              return (
                                   <div
                                        style={e.style}
                                        className='task'
                                        key={i}
                                   >
                                        <div className='content'>
                                             <div className='left'>
                                                  {e.value}
                                             </div>
                                        </div>
                                        <button
                                             onClick={() => this.remove(e)}
                                             className='right'
                                        >
                                             ×
                                        </button>
                                   </div>
                              );
                         })}
                    </div>
                    <div className='addControls'>
                         <form
                              className={
                                   this.state.adder ? "appear form" : "form"
                              }
                              onKeyDown={(e) =>
                                   e.keyCode === 13
                                        ? this.add(e)
                                        : console.log("please press enter")
                              }
                         >
                              <input
                                   onChange={this.handleText}
                                   className='input shadow'
                                   type='text'
                                   value={this.state.value}
                                   placeholder='Type your task...'
                              />
                              <button
                                   onClick={(e) => this.add(e)}
                                   type='button'
                              >
                                   add
                              </button>
                         </form>
                         <button
                              onClick={() => this.showAdder()}
                              className='plusButton shadow'
                         >
                              <svg
                                   className='plusIcon'
                                   width='38'
                                   height='38'
                                   viewBox='0 0 38 38'
                                   fill='none'
                              >
                                   <g id='+'>
                                        <path
                                             id='Stroke 112'
                                             d='M0 0H32.6733'
                                             transform='translate(2.97028 18.3466)'
                                             stroke='white'
                                             stroke-width='4'
                                             stroke-linecap='round'
                                             stroke-linejoin='round'
                                        />
                                        <path
                                             id='Stroke 113'
                                             d='M0 0V32.6733'
                                             transform='translate(18.6534 2.66339)'
                                             stroke='white'
                                             stroke-width='4'
                                             stroke-linecap='round'
                                             stroke-linejoin='round'
                                        />
                                   </g>
                              </svg>
                         </button>
                    </div>
               </div>
          );
     }
}

export default ToDo;
