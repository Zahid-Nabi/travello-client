import React from 'react';
import './Testimonial.css';
const Testimonial = () => {
    return (

        <section className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center mb-5">
                            <h5 className="section-subheading">Testimonials</h5>
                            <h2 className="section-heading">Our Happy <span>Customers</span></h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
                        <div id="travelloCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#travelloCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#travelloCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#travelloCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#travelloCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src="https://i.ibb.co/0Yrvkfw/client-1.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="username">
                                                <h3> Tobin John</h3>
                                                <span>Petra Visit</span>
                                                <p className="quote">Incredible experience! I had done a tour with another company in Europe so thought I knew what to expect but was blown away with my Travello tour. Better accommodation, such a great group of people and our trip leader was incredible. Saw so much stuff I would have missed without him. Highly recommended!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src="https://i.ibb.co/tK0N4q1/client-2.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="username">
                                                <h3> Thomas Karaki</h3>
                                                <span>Africa Forest Visit</span>
                                                <p className="quote">So much fun camping with the group every night. Amazing, unique experience to see these majestic animals with your own eyes in their natural setting. Incredible scenery.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src="https://i.ibb.co/2s8pCTs/client-3.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="username">
                                                <h3>Devid Woikalo</h3>
                                                <span>Pyramids of Giza Visit</span>
                                                <p className="quote">I would definitely recommend Travello. I had an amazing experience. I learnt a lot, tried a lot of food, and made friends. I’m quite a shy and reserved person and it was a perfect first solo trip</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-wrapper">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <img src="https://i.ibb.co/WzdW7Z4/client-4.png" alt="" className="img-fluid" />
                                            </div>
                                            <div className="username">
                                                <h3>Elizabeth Greeni</h3>
                                                <span>Machu Picchu Visit</span>
                                                <p className="quote">When I did this trip I was 18, had never travelled abroad without family. Travello  is a brilliant way to travel 'alone' but still give you that safety net. The coaches were really comfortable, everyone goes on the trip intending to get along. You get a synopsis of where you're going from your tour leader and some optional activities. I highly recommend</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Testimonial;