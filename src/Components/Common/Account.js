import React, { Component } from "react";
import axios from "./../../axios";
import ButtonModal from "./../UIelement/ButtonModal";
import Input from "./../UIelement/Input";
import "./../componentCss/account.css";

class Account extends Component {
     state = {
          form: {
               name: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "text",
                         placeholder: "name...",
                    },
                    validation: {
                         required: true,
                    },
                    valid: false,
                    inUse: false,
               },
               email: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "email",
                         placeholder: "email...",
                    },
                    validation: {
                         required: true,
                    },
                    valid: false,
                    inUse: false,
               },
               password: {
                    elementType: "input",
                    value: "",
                    elementConfig: {
                         type: "password",
                         placeholder: "password...",
                    },
                    validation: {
                         required: true,
                    },
                    valid: false,
                    inUse: false,
               },
          },
     };

     //  e122
     // value - meghdari ke gharare check beshe
     //  rules- ghavanini ke darim
     validator = (value, rules) => {
          let isValid = false;
          //  .trim() space haro hazf mikone
          if (rules.required) isValid = value.trim() !== "";
          return isValid;
     };

     // e119
     //  maghadire update shodeye form va element haye dakhele form  moheman
     inputOnChangeHandler = (event, inputElement) => {
          // ye copy az state form migirim
          const upForm = { ...this.state.form };
          //  element khasi ke to form dare update mishe
          const updateElement = { ...upForm[inputElement] };
          //  value on element ro ham baresi mikonim
          updateElement.value = event.target.value;
          //  e122
          updateElement.valid = this.validator(
               updateElement.value,
               updateElement.validation
          );
          updateElement.inUse = true;
          //  meghdare jadide form ro behesh midim
          upForm[inputElement] = updateElement;
          //  state ro update mikonim
          this.setState({ form: upForm });
     };

     //  e120
     submitHandler = (event) => {
          event.preventDefault();
          //  extract data nahaii
          const formData = {};
          // toye state peymayesh mikonim va maghdiro toye object formData gharar midim
          for (let item in this.state.form)
               formData[item] = this.state.form[item].value;
          //  e121
          axios.post("/userAccount.json", formData)
               .then((res) => console.log(res))
               .catch((err) => console.log(err));
     };

     render() {
          //  vase inke input dynamic dashte bashim
          // id baraye joda sazie input hast
          //  config baraye property haye input hast
          const elementArray = [];
          for (let item in this.state.form) {
               elementArray.push({
                    id: item,
                    config: this.state.form[item],
               });
          }

          return (
               <div className='account'>
                    <h2>user account!</h2>
                    <form onSubmit={this.submitHandler}>
                         {elementArray.map((item) => (
                              <Input
                                   key={item.id}
                                   notValid={!item.config.valid}
                                   used={item.config.inUse}
                                   elementType={item.config.elementType}
                                   elementConfig={item.config.elementConfig}
                                   value={item.config.value}
                                   change={(event) =>
                                        this.inputOnChangeHandler(
                                             event,
                                             item.id
                                        )
                                   }
                              />
                         ))}

                         <ButtonModal btnType='form'>submit</ButtonModal>
                    </form>
               </div>
          );
     }
}

export default Account;
