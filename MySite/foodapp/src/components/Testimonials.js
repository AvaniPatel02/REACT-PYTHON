import React from 'react'
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div>
     <div className= "hiiiii">
    <h1>Review Section</h1>
    <h6>What Our Customers Say</h6>
<div className="review my-4" >
        <div className="row mb-2">
            <div className="col-md-6 px-4">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Vansh Patel</strong>
                        <p className="card-text mb-auto">This app has made my life so much easier. Highly recommend it!.</p>
                        <h5 className="mb-1 text-body-secondary">May 28</h5> 
                        <h2 className="rating">⭐⭐⭐⭐⭐</h2>

                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="/imageT1.jpg" alt=""/>
                        
                        
                    </div>
                </div>
            </div>


            <div className="col-md-6 ">
            <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Avani Patel</strong>
                        <p className="card-text mb-auto">Excellent service and great support. Totally worth it!.</p>
                        <h5 className="mb-1 text-body-secondary">Jan 2</h5>
                        
                        <h2 className="rating">⭐⭐⭐⭐⭐</h2>

                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="/imageT2.jpg" alt=""/>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2">
            <div className="col-md-6">
            <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Sakshi Patel</strong>
                        <p className="card-text mb-auto">This app has made my life so much easier. Highly recommend it!.</p>
                        <h5 className="mb-1 text-body-secondary">Aug 23</h5>
                        
                        <h2 className="rating">⭐⭐⭐⭐⭐</h2>

                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="/imageT3.jpg" alt=""/>
                        
                        
                    </div>
                </div>
            </div>


            <div className="col-md-6 ">
            <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary-emphasis">Ravi Patel</strong>
                        <p className="card-text mb-auto">Excellent service and great support. Totally worth it!.</p>
                        <h5 className="mb-1 text-body-secondary">Nov 12</h5>
                        
                        <h2 className="rating">⭐⭐⭐⭐⭐</h2>

                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img className="bd-placeholder-img" width="200" height="250" src="/imageT4.jpg" alt=""/>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Testimonials;
