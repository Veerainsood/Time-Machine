
import React, { useState, useEffect } from 'react';
import "../assets/css/fontawesome.css"
import "../assets/css/templatemo-edu-meeting.css"
import "../assets/css/owl.css"
import "../assets/css/lightbox.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/images/service-icon-01.png"
import "../assets/images/service-icon-02.png"
import "../assets/images/service-icon-03.png"
import "../assets/images/5R.jpeg"

export default function HomePage(){
    //     // State to track the active section
    // const [activeSection, setActiveSection] = useState('#top');

    // // Scroll to a specific section
    // const scrollToSection = (sectionId, isAnimate) => {
    //     // Remove the '#' from the sectionId (direction)
    //     const direction = sectionId.replace(/#/, '');
        
    //     // Find the section based on data-section attribute
    //     const reqSection = document.querySelector(`[data-section="${direction}"]`);
        
    //     if (reqSection) {
    //     const reqSectionPos = reqSection.offsetTop - 80; // Adjust for header offset (if any)
        
    //     if (isAnimate) {
    //         // Scroll with animation
    //         window.scrollTo({
    //         top: reqSectionPos,
    //         behavior: 'smooth', // Smooth scrolling
    //         });
    //     } else {
    //         // Instant scroll
    //         window.scrollTo({
    //         top: reqSectionPos,
    //         behavior: 'auto', // Instant scroll
    //         });
    //     }
    //     }
    // };
    
    // // Scroll handler to check which section is active based on scroll position
    // const checkActiveSection = () => {
    //     const sections = document.querySelectorAll('.section');
    //     const scrollPosition = window.scrollY;
    
    //     sections.forEach((section) => {
    //     const topEdge = section.offsetTop - 80; // Adjust for any header offset
    //     const bottomEdge = topEdge + section.offsetHeight;
    
    //     if (scrollPosition >= topEdge && scrollPosition < bottomEdge) {
    //         setActiveSection(`#${section.id}`);
    //     }
    //     });
    // };
    
    // // Debounce the scroll event to avoid too many updates during scrolling
    // const debounceScroll = (func, delay) => {
    //     let timeout;
    //     return () => {
    //     clearTimeout(timeout);
    //     timeout = setTimeout(() => func(), delay);
    //     };
    // };
    
    // // Set up scroll event listener
    // useEffect(() => {
    //     const debouncedCheckActiveSection = debounceScroll(checkActiveSection, 100);
    //     window.addEventListener('scroll', debouncedCheckActiveSection);
    //     return () => {
    //     window.removeEventListener('scroll', debouncedCheckActiveSection);
    //     }; // Cleanup on unmount
    // }, []);

    return (
        <>
        <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="../assets/css/fontawesome.css" />
        <link rel="stylesheet" href="../assets/css/templatemo-edu-meeting.css" />
        <link rel="stylesheet" href="../assets/css/owl.css" />
        <link rel="stylesheet" href="../assets/css/lightbox.css" />
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    Save Nature
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section">
                      <a href="#top" className="active">
                        Home
                      </a>
                    </li>
                    <li className="scroll-to-section">
                        <a href="#apply">Practices</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="../assets/shop/index_2.html">Shop</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="./Login">3D</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#courses">Information</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#contact">Contact Us</a>
                    </li>
                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        {/* ***** Main Banner Area Start ***** */}
    <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay={true} muted={true} loop={true} id="bg-video">
            <source src="../../public/course-video.mp4" type="video/mp4" />
        </video>
          <div className="video-overlay header-text">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="caption">
                    <h1 id="MainId1">Small Steps Lead to Big Changes</h1>
                    <h2 id="MainId2">Welcome to Time-Machine</h2>
                    <div className="main-button-red">
                      <div className="scroll-to-section">
                        <a href="./Login">Time-Travel Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Main Banner Area End ***** */}
        <section className="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="owl-service-item owl-carousel">
                  <div className="item">
                    <div className="icon">
                      <img src="../assets/images/service-icon-01.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Education</h4>
                      <p>
                        Suspendisse tempor mauris a sem elementum bibendum. Praesent
                        facilisis massa non vestibulum.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="../assets/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Teachers</h4>
                      <p>
                        Suspendisse tempor mauris a sem elementum bibendum. Praesent
                        facilisis massa non vestibulum.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="../assets/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Students</h4>
                      <p>
                        Suspendisse tempor mauris a sem elementum bibendum. Praesent
                        facilisis massa non vestibulum.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="../assets/images/service-icon-02.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Online Meeting</h4>
                      <p>
                        Suspendisse tempor mauris a sem elementum bibendum. Praesent
                        facilisis massa non vestibulum.
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src="../assets/images/service-icon-03.png" alt="" />
                    </div>
                    <div className="down-content">
                      <h4>Best Networking</h4>
                      <p>
                        Suspendisse tempor mauris a sem elementum bibendum. Praesent
                        facilisis massa non vestibulum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="upcoming-meetings" id="meetings">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Nature Saving Habits</h2>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Categories">
                  <h4>Do's and Dont's</h4>
                  <br />
                  <h6>Do's</h6>
                  <ul>
                    <li>
                      🌱 Plant Trees: Support reforestation and local planting
                      efforts.
                    </li>
                    <li>
                      ♻️ Recycle &amp; Reuse: Minimize waste by recycling and
                      repurposing.
                    </li>
                    <li>
                      🚶 Conserve Water &amp; Energy: Opt for sustainable choices in
                      daily life.
                    </li>
                    <li>
                      🐾 Protect Wildlife Habitats: Support eco-friendly products and
                      tourism.
                    </li>
                  </ul>
                  <br />
                  <h6>Dont's</h6>
                  <ul>
                    <li>
                      🚫 Avoid Single-Use Plastics: Reduce plastic pollution by
                      choosing alternatives.
                    </li>
                    <li>
                      🏕️ Don't Disturb Natural Habitats: Respect wildlife and natural
                      areas.
                    </li>
                    <li>
                      🚗 Limit Fossil Fuel Use: Use public transport or eco-friendly
                      options.
                    </li>
                    <li>
                      🍃 Say No to Illegal Wildlife Products: Prevent exploitation of
                      endangered species.
                    </li>
                  </ul>
                  <div className="main-button-red">
                    <a href="Habbits/meetings.html">See More Ideas</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                          <img src="../assets/images/5R.jpeg" alt="" />
                      </div>
                      <div className="down-content">
                        <a href="Habbits/r.html">
                          <h4>5R's</h4>
                        </a>
                        <p>
                          Practicing this reduces the need for raw materials, saves
                          energy, and minimizes costs, promoting a sustainable and
                          circular economy.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="Habbits/water.html">
                          <img src="../assets/images/water.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="Habbits/water.html">
                          <h4>Conserve Water</h4>
                        </a>
                        <p>
                          Water conservation preserves limited freshwater resources
                          and ensures clean water for all. Simple actions, like
                          reducing waste and fixing leaks, make a big difference.
                          <br />
                          <br />{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="Habbits/single_use_plastic.html">
                          <img src="../assets/images/SingleUsePlasric.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="Habbits/single_use_plastic.html">
                          <h4>Reduce Single-Use Plastic</h4>
                        </a>
                        <p>
                          Reduces waste and pollution directly.
                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="meeting-item">
                      <div className="thumb">
                        <a href="Habbits/compost_food.html">
                          <img src="../assets/images/Compost_Food_Waste.jpeg" alt="" />
                        </a>
                      </div>
                      <div className="down-content">
                        <a href="Habbits/compost_food.html">
                          <h4>Compost Food Waste</h4>
                        </a>
                        <p>
                          Great for gardening and soil health but requires initial
                          setup
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-facts">
          <video autoPlay={true} muted={true} loop={true} id="bg-video">
            <source src="../../public/backVid.mp4" type="video/mp4" />
          </video>
          <div className="container">
            <div className="video-overlay1">
              <div className="row1">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>A Few Facts About Forests</h2>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-12">
                          <div className="count-area-content percentage">
                            <div className="count-digit">80</div>
                            <div className="count-title">
                              Species Dependent On Forest
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">662</div>
                            <div className="count-title">
                              Forest Carbon Storage in billion tons
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">1600</div>
                            <div className="count-title">
                              Indigenous Stewardship in million
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="count-area-content">
                            <div className="count-digit">10</div>
                            <div className="count-title">
                              Deforestation Rate in million hectares lost per year
                            </div>
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
        <section className="contact-us" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 align-self-center">
                <div className="row">
                  <div className="col-lg-12">
                    <form id="contact" action="" method="post">
                      <div className="row">
                        <div className="col-lg-12">
                          <h2>Let's get in touch</h2>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="name"
                              type="text"
                              id="name"
                              placeholder="YOURNAME...*"
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="email"
                              type="text"
                              id="email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="YOUR EMAIL..."
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-4">
                          <fieldset>
                            <input
                              name="subject"
                              type="text"
                              id="subject"
                              placeholder="SUBJECT...*"
                              required=""
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <textarea
                              name="message"
                              type="text"
                              className="form-control"
                              id="message"
                              placeholder="YOUR MESSAGE..."
                              required=""
                              defaultValue={""}
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="button">
                              SEND MESSAGE NOW
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right-info">
                  <ul>
                    <li>
                      <h6>Phone Number</h6>
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      <h6>Email Address</h6>
                      <span>info@meeting.edu</span>
                    </li>
                    <li>
                      <h6>Street Address</h6>
                      <span>Rio de Janeiro - RJ, 22795-008, Brazil</span>
                    </li>
                    <li>
                      <h6>Website URL</h6>
                      <span>www.meeting.edu</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Scripts */}
        {/* Bootstrap core JavaScript */}
      </>
    )
}