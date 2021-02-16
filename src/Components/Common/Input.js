import React,{useContext} from "react";
import { ThemeContext } from './../../Container/ContextApi/ThemeContext';

const Input = (props) => {
     const { mode } = useContext(ThemeContext);

     const inputClass = [
          mode === "day"
               ? "effect-3 input shadow effect-3-Day"
               : "effect-3 input shadow effect-3-Night"]
     
     return (
          <div className='col3'>
               <input
                    className={inputClass.join(" ")}
                    {...props.config}
                    value={props.value}
                    onChange={props.onChange}
                    onKeyPress={props.onKeyPress}
               />
               <span className='focus-border'></span>
          </div>
     );
};

export default Input;
