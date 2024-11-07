


export default function Eco_friendly_appliance () {

    return (
        <>
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <a href="index.html" className="logo">
                    Use Eco-Freindly Appliances
                  </a>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="meetings.html" className="active">
                        Practices
                      </a>
                    </li>
                    <li>
                      <a href="index.html">Apply Now</a>
                    </li>
                    <li className="has-sub">
                      <a href="javascript:void(0)">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="meetings.html">Upcoming Meetings</a>
                        </li>
                        <li>
                          <a href="meeting-details.html">Meeting Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="index.html">Courses</a>
                    </li>
                    <li>
                      <a href="index.html">Contact Us</a>
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
        <section className="meetings-page" id="meetings">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="meeting-single-item">
                      <div className="thumb">
                        <iframe
                          src="https://www.youtube.com/embed/qA4GQDUgQBc?si=-L_zjI0H98eUDWB8"
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen=""
                        />
                      </div>
                      <div className="down-content">
                        <h4>Use Energy-Efficient Appliances</h4>
                        <p className="description">
                          Energy-efficient appliances reduce electricity consumption
                          and help lower utility bills. This section provides guidance
                          on choosing appliances that save energy and protect the
                          environment.
                        </p>
                        <div className="row">
                          <ul>
                            <li>
                              <p>
                                <b>Look for ENERGY STAR Ratings:</b> ENERGY STAR
                                appliances meet strict energy efficiency criteria,
                                saving you money over time.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Use Smart Power Strips:</b> Smart power strips cut
                                power to devices when they’re not in use, reducing
                                energy drain.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Choose the Right Size:</b> An appliance that's too
                                large for your needs will waste energy.
                              </p>
                            </li>
                            <li>
                              <p>
                                <b>Maintain Appliances Regularly:</b> Proper
                                maintenance keeps appliances efficient and prolongs
                                their lifespan.
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-12">
                          <div className="share">
                            <h5>Reference:</h5>
                            <br />
                            <ul>
                              <li>
                                <p>
                                  U.S. Department of Energy - Guide to
                                  Energy-Efficient Appliances
                                </p>
                              </li>
                              <li>
                                <p>ENERGY STAR - Certified Products Directory</p>
                              </li>
                              <li>
                                <p>
                                  Green Home Guide - Tips for Choosing
                                  Energy-Efficient Appliances
                                </p>
                              </li>
                              <li>
                                <p>
                                  Sustainable Living Resources - Appliance Maintenance
                                  Tips../
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button-red">
                    <a href="meetings.html">Back To Practices List</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Scripts */}
        {/* Bootstrap core JavaScript */}
      </>
      
    
    );
}