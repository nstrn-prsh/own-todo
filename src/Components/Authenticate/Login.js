import React, { useRef, useEffect } from "react";
import Input from "./../Common/Input";

const Login = (props) => {
     const {
          email,
          setEmail,
          password,
          setPassword,
          emailError,
          passwordError,
          hasAccount,
          setHasAccount,
          loginHandler,
          signUpHandler,
     } = props;

     const activeInput = useRef(null);
     useEffect(() => {
          if (activeInput.current) activeInput.current.focus();
     }, [ hasAccount]);

     return (
          <section className='loginCard'>
               <div className='loginContainer'>
                    <label>username</label>
                    <Input
                         config={{
                              type: "text",
                              placeholder: "Ex: task@gamil.com",
                              required: "required",
                              ref: activeInput,
                         }}
                         value={email}
                         onChange={(event) => setEmail(event.target.value)}
                    />
                    <p className='errorMsg'>{emailError}</p>

                    <label>password</label>
                    <Input
                         config={{
                              type: "password",
                              placeholder: "password",
                              required: "required",
                         }}
                         value={password}
                         onChange={(event) => setPassword(event.target.value)}
                    />
                    <p className='errorMsg'>{passwordError}</p>

                    <div className='btnContainer'>
                         {hasAccount ? (
                              <>
                                   <button
                                        className='add'
                                        onClick={loginHandler}
                                   >
                                        sign in
                                   </button>
                                   <p>
                                        {" "}
                                        Don't have an account?
                                        <span
                                             onClick={() =>
                                                  setHasAccount(!hasAccount)
                                             }
                                        >
                                             sign up
                                        </span>
                                   </p>
                              </>
                         ) : (
                              <>
                                   <button
                                        className='add'
                                        onClick={signUpHandler}
                                   >
                                        sign up
                                   </button>
                                   <p>
                                        Have an account?
                                        <span
                                             onClick={() =>
                                                  setHasAccount(!hasAccount)
                                             }
                                        >
                                             sign in
                                        </span>
                                   </p>
                              </>
                         )}
                    </div>
               </div>
          </section>
     );
};

export default Login;
