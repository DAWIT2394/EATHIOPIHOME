import React from "react";

function CustomerReview() {
    return (
        <>
            <div className="customer-reviews-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-title text-center">
                                <h2>Customer Reviews</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 mr-auto ml-auto text-center">
                            <div id="reviews" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner mt-4">
                                    <div className="carousel-item text-center active">
                                        <div className="img-box p-1 border rounded-circle m-auto">
                                            <img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt="Quote" />
                                        </div>
                                        <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Paul Mitchel</strong></h5>
                                        <h6 className="text-dark m-0">Web Developer</h6>
                                        <p className="m-0 pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="img-box p-1 border rounded-circle m-auto">
                                            <img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt="Quote" />
                                        </div>
                                        <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Steve Fonsi</strong></h5>
                                        <h6 className="text-dark m-0">Web Designer</h6>
                                        <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="img-box p-1 border rounded-circle m-auto">
                                            <img className="d-block w-100 rounded-circle" src="images/quotations-button.png" alt="Quote" />
                                        </div>
                                        <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Daniel Vebar</strong></h5>
                                        <h6 className="text-dark m-0">SEO Analyst</h6>
                                        <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.</p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#reviews" role="button" data-slide="next">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-imfo-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 arrow-right">
                            <i className="fa fa-volume-control-phone"></i>
                            <div className="overflow-hidden">
                                <h4>Phone</h4>
                                <p className="lead">+01 123-456-4590</p>
                            </div>
                        </div>
                        <div className="col-md-4 arrow-right">
                            <i className="fa fa-envelope"></i>
                            <div className="overflow-hidden">
                                <h4>Email</h4>
                                <p className="lead">yourmail@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <i className="fa fa-map-marker"></i>
                            <div className="overflow-hidden">
                                <h4>Location</h4>
                                <p className="lead">800, Lorem Street, US</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerReview;
