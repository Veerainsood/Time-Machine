
export default function Compost_Food_Waste(){

    return (
    <>
        <header className="header-area header-sticky">
            <div className="container">
            <div className="row">
                <div className="col-12">
                <nav className="main-nav">
                    {/* ***** Logo Start ***** */}
                    <a href="index.html" className="logo">
                    Compost Food-Waste
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
                            src="https://www.youtube.com/embed/oFlsjRXbnSk?si=rngAYS54Urc7-NiP"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen=""
                        />
                        </div>
                        <div className="down-content">
                        <h4>Food Composting</h4>
                        <p className="description">
                            Composting is a powerful way to reduce food waste and
                            contribute to a sustainable environment by turning organic
                            scraps into nutrient-rich soil. Composting at home is an
                            impactful way to reduce waste and enrich your soil
                            naturally. Here, you’ll find everything you need to start
                            your own compost, from understanding the right ingredients
                            to mastering techniques that keep your compost healthy and
                            thriving. Learn how to layer food scraps, maintain moisture
                            and airflow, and avoid common composting mistakes.
                        </p>
                        <div className="row">
                            <ul>
                            <li>
                                <p>
                                <b>Balance Greens and Browns:</b> Use a mix of "green"
                                materials like fruit and vegetable scraps, and "brown"
                                materials like leaves and cardboard. This balance
                                speeds up decomposition and prevents odors.
                                </p>
                            </li>
                            <li>
                                <p>
                                <b>Turn Your Pile Regularly:</b> Aerating the compost
                                by turning it regularly will help break down the
                                materials faster and reduce unpleasant smells.
                                </p>
                                .
                            </li>
                            <li>
                                <p>
                                <b>Avoid Certain Foods:</b> Meat, dairy, and oily
                                foods should be kept out of compost as they attract
                                pests and slow down decomposition.
                                </p>
                            </li>
                            <li>
                                <p>
                                <b>Keep It Moist:</b> Compost should be damp, like a
                                wrung-out sponge. Add water if it’s too dry, or add
                                dry materials if it’s too wet.
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
                                <p>USDA Guide to Composting</p>
                                </li>
                                <li>
                                <p>EPA's Composting at Home</p>
                                </li>
                                <li>
                                <p>Rodale Institute's Composting Guide</p>
                                </li>
                                <li>
                                <p>Food and Agriculture Organization (FAO)</p>
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