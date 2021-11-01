import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-black py-5">
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-3">
                        <img height="80px" className="rounded-circle" src="https://st2.depositphotos.com/5572200/9493/v/600/depositphotos_94939308-stock-illustration-travel-agency-logo.jpg" alt="" />
                        {/* <img src={} style={{ height: '50px', width: '100px' }} alt="" /> */}
                        <h1 className="navbar-brand text-white font-weight-bold">Moina Travel Agency</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
                        <div className="navbar-nav mx-auto">

                            <Link to="/home" className="nav-link btn btn-black text-white">Home</Link>
                            <Link to="/myorders" className="nav-link btn btn-black text-white">My Orders</Link>
                            <Link to="/manage-all-order" className="nav-link btn btn-black text-white">Manage All Orders</Link>

                            <Link to="/addnewservices" className="nav-link btn btn-black text-white me-4">Add New Services</Link>
                            { 
                                 <Link to="/login"> 
                                 <button className=" ms-4 btn btn-primary me-2" >User Log In</button>
                                 </Link> 
                            }
                            <span  className="text-white"> <span>Logged in as:{user.displayName} </span></span>
                            {user?.email  && <button  className="ms-4 btn btn-danger me-2" onClick={logout} > Log Out </button>  }
                             {/* { <button className="btn btn-warning"></button>} */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;