
export default function Meetings (){


    return(

        <>
  <header className="header-area header-sticky background-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a href="../index.html" className="logo">
              Nature Saving Ideas
            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
              <li>
                <a href="../index.html">Home</a>
              </li>
              <li>
                <a href="#top" className="active">
                  Practices
                </a>
              </li>
              <li>
                <a href="../shop/index_2.html">Shop</a>
              </li>
              <li>
                <a href="#apply">3D</a>
              </li>
              <li>
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
    <video autoPlay="true" muted="" loop="" id="bg-video">
      <source
        src="../assets/images/1113751_Earth_Handicraft_1280x720.mp4"
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
                      <a href="../Habbits/compost_food.html">
                        <img
                          src="../assets/images/Compost_Food_Waste.jpeg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/compost_food.html">
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
                      <a href="../Habbits/single_use_plastic.html">
                        <img
                          src="../assets/images/SingleUsePlasric.jpeg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/single_use_plastic.html">
                        <h4>Reduce Single-Use Plastic</h4>
                      </a>
                      <p>Reduces waste and pollution directly.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="../Habbits/small_Garden.html">
                        <img src="../assets/images/Small_Garden.webp" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/small_Garden.html">
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
                      <a href="../Habbits/eco_freindly_cleaning.html">
                        <img
                          src="../assets/images/Eco-freindly-cleaner.jpeg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/eco_freindly_cleaning.html">
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
                      <a href="../Habbits/natural_Light.html">
                        <img src="../assets/images/Natural_Light.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/natural_Light.html">
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
                      <a href="../Habbits/water.html">
                        <img src="../assets/images/water.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/water.html">
                        <h4>Conserve Water</h4>
                      </a>
                      <p>
                        Water conservation preserves limited freshwater
                        resources and ensures clean water for all. Simple
                        actions, like reducing waste and fixing leaks, make a
                        big difference.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all imp att">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="../Habbits/r.html">
                        <img src="../assets/images/5R.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/r.html">
                        <h4>5R's</h4>
                      </a>
                      <p>
                        Practicing this reduces the need for raw materials,
                        saves energy, and minimizes costs, promoting a
                        sustainable and circular economy..
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all soon imp">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="../Habbits/eco_freindly_appliances.html">
                        <img
                          src="../assets/images/Eco_Freindly_Appliances.jpeg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/eco_freindly_appliances.html">
                        <h4>Use Energy-Efficient Appliances</h4>
                        <p>Reduces household energy consumption long-term</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 templatemo-item-col all att soon">
                  <div className="meeting-item">
                    <div className="thumb">
                      <a href="../Habbits/unplug.html">
                        <img src="../assets/images/Unplug.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="../Habbits/unplug.html">
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

    )
}