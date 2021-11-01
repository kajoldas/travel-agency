import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Footer.css'





const Footer = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
          axios.post('https://quiet-fjord-33750.herokuapp.com/places', data )
          .then(res => {
              console.log(res)
              if(res.data.insertedId){
                  alert('New Places Added Successfully')
                  reset();
              }
          })
      };
    return (

        <div className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact Us</h5>
                        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                            <input {...register("email", { pattern: /^[A-Za-z]+$/i })} placeholder="Email" />
                            <input type="subject" {...register("age", { min: 18, max: 99 })} placeholder="Subject" />
                            <input type="notes" {...register("age", { min: 18, max: 99 })} placeholder="Notes" />
                            <input type="submit" placeholder="Send Message" />
                        </form>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                        <p>
                            <a href="https://www.google.com" className="text-white" style={{textDecoration:'none'}}>Bangladesh Foreign Administraty </a>
                        </p>
                        <p>
                            <a href="https://www.google.com/search?q=bangladesh+foreign+affairs&sxsrf=AOaemvKL-Hi72CvdpE9txXBhaiUOkt39kg%3A1635673026890&ei=wmN-Ya7kNZSY4-EPlrSQmAI&oq=bangladesh+foreign+a&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnOgcIABBHELADOgoILhDIAxCwAxBDOgQIIxAnOgQIABBDOgoILhCxAxCDARBDOgQILhBDOggIABCxAxCDAToLCC4QgAQQsQMQkwI6CAgAEIAEELEDOgsIABCABBCxAxCDAToFCAAQkQI6CAguELEDEJECOggIABCxAxCRAjoFCC4QgAQ6CwguEIAEEMcBEK8BSgUIOBIBMUoECEEYAFDfHljPUmC_XmgDcAJ4AIAB4QGIAYgOkgEFMC45LjGYAQCgAQHIAQ_AAQE&sclient=gws-wiz" className="text-white" style={{textDecoration:'none'}}>Foreign Affair</a>
                        </p>
                        <p>
                            <a href="" className="text-white" style={{textDecoration:'none'}}>Notice </a>
                        </p>
                        <p>
                            <a href="" className="text-white" style={{textDecoration:'none'}}>Necessary Documents</a>
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Contacts</h5>
                        <p>
                            <i className="fas fa-home mr-3">Khulna, Bangladesh</i>
                        </p>
                        <p>
                             <i className="fas fa-envelope mr-3">official@moinatravels.com</i>
                        </p>
                        <p>
                             <i className="fas fa-phone mr-3">+880 01799 99 99 99</i>
                        </p>
                        <p>
                             <i className="fas fa-print mr-3">+880 01500 00 00 00</i>
                        </p>
                    </div>
                    
                    {/* <hr className="mb-4/> */}
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>Copyright ©2021 All rights reserved by :  
                                <a href="#" style={{textDecoration:'none'}} ><strong className="text-warning"> Moina Travel Agency</strong> </a> </p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;