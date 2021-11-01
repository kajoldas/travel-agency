import React from 'react';

import useAuth from '../hooks/useAuth';
import login from './../../image/login.jpg'

const Login = () => {

    



    const {googleSignIn} = useAuth();
    return (
        <div className="d-flex justify-content-around align-items-center">
            <div>
                <img src={login} style={{height:'600px'}} alt="" />
            </div>
            <div>
                <div className="login-form border border-primary border-1 rounded-3 m-4 p-4">
                    <h2>LogIn </h2>
                    <form onSubmit="" className=" mb-3 ">
                        <input className="m-3 border-primary rounded-3"  type="email" name="" id="" placeholder="Enter Your Email" />
                        <br />
                        <input className="m-3 border-primary rounded-3" type="password" name=""  id="" placeholder="Enter Password" />
                        <br />
                        <input type="submit" className="px-5  btn-primary rounded-5" value="Submit" />
                    </form>
                    
                    <div>---------or-----------</div>
                    <button  className="btn-primary" 
                    onClick={googleSignIn}
                    >Google SignIn</button>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default Login;