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
                <div className="py-5 px-5 login-form border border-primary border-1 rounded-3 m-4 p-4">
                    <h2 className="py-3">LogIn </h2>
                    
                    <h5 className="py-3 ">Continue  with Google</h5>
                   
                    <button  className="btn-primary" 
                    onClick={googleSignIn}
                    >Google SignIn</button>
                </div>
                
            </div>
            
            
        </div>
    );
};

export default Login;