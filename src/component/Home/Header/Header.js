import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light bg-black py-5 grid ">
                
                    <div className="d-flex align-items-center gap-3">
                        <img height="80px" className="rounded-circle" src="https://st2.depositphotos.com/5572200/9493/v/600/depositphotos_94939308-stock-illustration-travel-agency-logo.jpg" alt="" />
                        <Navbar.Brand className="navbar-brand text-white font-weight-bold">Moina Travel Agency</Navbar.Brand>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
                        <div className="navbar-nav mx-auto">

                            <div className=" mx-auto mt-3" ><Link to="/home" className="nav-link btn btn-black text-white">Home</Link></div>
                            <div className="mx-auto mt-3"><Link to="/myOrders" className="nav-link btn btn-black text-white">My Orders</Link></div>
                            <div className=" mx-auto mt-3"><Link to="/manage-all-order" className="nav-link btn btn-black text-white">Manage All Orders</Link></div>
                            <div className=" mx-auto mt-3"><Link to="/destinations" className="nav-link btn btn-black text-white me-4">Destinations </Link></div>
                            <div className=" mx-auto mt-3 px-4"><Link to="/addnewservices" className="nav-link btn btn-black text-white me-4">Add New Services</Link></div>
                            <div className=" mx-auto mt-3">
                            { 
                                 <Link to="/login"> 
                                 <button className=" ms-4 btn btn-primary " >User Log In</button>
                                 </Link> 
                            }
                            </div>
                            <div className=" mx-auto mt-3">
                                <span  className="text-white"> <span>Logged in as:{user.displayName} </span></span>
                                <img src={user.photoURL} style={{borderRadius:'50px'}} alt="avatar"/>
                            {user?.email  && <button  className="ms-4 btn btn-danger me-2" onClick={logout} > Log Out </button>  }
                             </div>
                        </div>
                    </div>
               
            </Navbar>
            
        </div>
    );
};

export default Header;