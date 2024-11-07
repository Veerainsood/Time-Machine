export default function EduVids(){
    return (
        <>
  {/* ***** Header Area Start ***** */}
  <header className="header-area header-sticky background-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="index.html" className="logo">
              Nature Saving Ideas
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li className="scroll-to-section">
                <a href="./">Home</a>
              </li>
              <li>
                <a href="#top" className="active">
                  Videos
                </a>
              </li>
              <li className="scroll-to-section">
                <a href="#apply">Shop</a>
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
  <section className="heading-page header-text" id="top">
    <video autoPlay={true} muted={true} loop={true} id="bg-video">  
      <source
        src="../../public/1113751_Earth_Handicraft_1280x720.mp4"
        type="video/mp4"
      />
    </video>
  </section>
  <section className="meetings-page" id="meetings">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="filters">
                <ul>
                  <li data-filter="*">All Ideas</li>
                  <li data-filter=".soon">Coming Soon</li>
                  <li data-filter=".imp">Critical</li>
                  <li data-filter=".att">Essential</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row grid">
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>12</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Compost Food Waste</h4>
                      </a>
                      <p>
                        Great for gardening and soil health but requires initial
                        setup
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>14</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Reduce Single-Use Plastic</h4>
                      </a>
                      <p>Reduces waste and pollution directly.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>16</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Grow a Small Garden</h4>
                      </a>
                      <p>
                        Supports the local environment and air quality but may
                        require time, space, and resources.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-04.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>18</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Eco-Friendly Cleaning Products</h4>
                      </a>
                      <p>
                        Reduces harmful chemical runoff,
                        <br />
                        benefiting local water systems.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>22</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Opt for Natural Light </h4>
                      </a>
                      <p>
                        Saves energy costs and is easy to implement in most
                        homes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>24</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Conserve Water</h4>
                      </a>
                      <p>
                        Essential for resource preservation,
                        <br /> especially in areas facing water scarcity.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-01.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>27</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Recycle and Repurpose</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-02.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="meeting-details.html">
                        <h4>Use Energy-Efficient Appliances</h4>
                        <p>Reduces household energy consumption long-term</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="meeting-details.html">
                        <img src="../../../public/meeting-03.jpg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>30</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4> Unplug Devices When Not in Use</h4>
                      </a>
                      <p>
                        Prevents energy wastage and is simple to adopt daily
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="pagination">
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <p>
        Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
        <br />
        Design:{" "}
        <a
          href="https://templatemo.com"
          target="_parent"
          title="free css templates"
        >
          TemplateMo
        </a>
        <br />
        Distibuted By:{" "}
        <a
          href="https://themewagon.com"
          target="_blank"
          title="Build Better UI, Faster"
        >
          ThemeWagon
        </a>
      </p>
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

    );
}