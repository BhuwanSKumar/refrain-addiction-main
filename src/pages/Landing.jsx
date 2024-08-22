import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { sbIcon,client1,client2,client3,confi } from '../assets';

function Landing() {
  return (
    <>
      <div>
        {/* mian-content */}
        <div className="main-w3layouts-header-sec">
          {/* header */}
          <header>
            <div className="container">
              <div className="header d-lg-flex justify-content-between align-items-center">
                <div className="header-section">
                  <h1>
                    <a
                      className="navbar-brand logo editContent"
                      href="index.html"
                    >
                      <div className="flex">
                        <img src={sbIcon} width={45} alt="" />
                        <a href="https://breadsbangalore.org/" className=" mt-2 mx-2 text-4xl font-bold">
                          Refrain Addiction
                        </a>
                      </div>
                    </a>
                  </h1>
                </div>
                <div className="nav_section">
                  <nav>
                    <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                      <span className="fa fa-bars" aria-hidden="true" />
                    </label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-3">
                  
                      <li>
                        <Link to="/loginc">
                          <button className="menu">
                            LOGIN AS COUNCELOR
                          </button>{' '}
                        </Link>
                      </li>
                      <li>
                        <Link to="/adminlogin">
                          <button className="menu">
                            LOGIN AS ADMIN
                          </button>{' '}
                        </Link>
                      </li>
                      <li>
                        {/* First Tier Drop Down */}
                        <label htmlFor="drop-2" className="toggle">
                          Dropdown{' '}
                          <span
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          />{' '}
                        </label>
                        <a href="#">
                          Dropdown{' '}
                          <span
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          />
                        </a>
                        <input type="checkbox" id="drop-2" />
                        <ul className="inner-dropdown">
                          <li>
                            <a href="#stats">Stats</a>
                          </li>
                          <li>
                            <a href="#lab">Laboratory</a>
                          </li>
                          <li>
                            <a href="#test">Reviews</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://breadsbangalore.org/">Contact Us</a>
                      </li>
                      <li className="icons">
                        <a href="https://breadsbangalore.org/" className="face-bk">
                          <span className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="icons">
                        <a href="https://breadsbangalore.org/" className="twitter">
                          <span className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                      <li className="icons">
                        <a href="https://breadsbangalore.org/" className="dribble">
                          <span className="fa fa-dribbble" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* //header */}
          {/* banner */}
          <section className="banner_w3pvt" id="home">
            <div className="csslider infinity" id="slider1">
              <input
                type="radio"
                name="slides"
                defaultChecked="checked"
                id="slides_1"
              />
              <input type="radio" name="slides" id="slides_2" />
              <input type="radio" name="slides" id="slides_3" />
              <input type="radio" name="slides" id="slides_4" />
              <ul>
                <li>
                  <div className="banner-top">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We care and protect <span>your </span> health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top1">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We do our best for you and <span>your </span>{' '}
                              health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top2">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We care and protect <span>your </span> health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="banner-top3">
                    <div className="overlay">
                      <div className="container">
                        <div className="banner-info">
                          <div className="banner-w3layouts-inner">
                            <h3>
                              We do our best for you and <span>your </span>{' '}
                              health.
                            </h3>
                            <h4>We will help to find health, to everyone.</h4>
                            <Link className="read btn mt-3" to="/login">
                              Start a New Life
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="arrows">
                <label htmlFor="slides_1" />
                <label htmlFor="slides_2" />
                <label htmlFor="slides_3" />
                <label htmlFor="slides_4" />
              </div>
            </div>
          </section>
          {/* //banner */}
        </div>
        {/* //header */}
        {/*/banner-bottom */}
        <section className="banner-bottom py-5">
          <div className="container-fluid inner-sec-w3ls">
            <div className="feature-grids row text-center">
              <div className="col-lg-3 gd-bottom one">
                <div className="bottom-gd">
                  <span className="fa fa-life-ring" aria-hidden="true" />
                  <h3 className="mb-2">Medication-Assisted Treatment (MAT):</h3>
                  <p>
                    {' '}
                    MAT involves the use of medications, such as methadone,
                    buprenorphine, or naltrexone, in combination with counseling
                    and behavioral therapies. These medications help manage
                    withdrawal symptoms, reduce cravings, and normalize brain
                    chemistry, making it easier for individuals to recover from
                    addiction .
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-dribbble" aria-hidden="true" />
                  <h3 className="mb-2">Cognitive-Behavioral Therapy (CBT): </h3>
                  <p>
                    CBT is a widely used therapy for drug addiction. It focuses
                    on identifying and changing negative thought patterns and
                    behaviors associated with drug use. CBT helps individuals
                    develop coping skills, manage triggers, and build a strong
                    support system..
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-mobile" aria-hidden="true" />
                  <h3 className="mb-2">Motivational Interviewing (MI):</h3>
                  <p>
                    {' '}
                    MI is a counseling technique that helps individuals find
                    motivation to change their addictive behaviors. It involves
                    open-ended questions, active listening, and empathy to
                    enhance an individual's motivation and commitment to
                    recovery.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd">
                  <span className="fa fa-folder-open-o" aria-hidden="true" />
                  <h3 className="mb-2">Online Appointment Booking System: </h3>
                  <p>
                    Many treatment centers now offer online appointment booking
                    systems, allowing individuals to conveniently schedule a
                    visit for drug addiction treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //banner-bottom */}
        {/* /last-content */}
        <section className="last-content">
          <div className="overlay-last">
            <div className="container text-center">
              <div className="last-w3pvt-inner-content row">
                <div className="col-md-6 offset-md-6">
                  <form action="#" className="booking" method="post">
                    <h3 className="mb-4">Book Appointment</h3>
                    <div className="form-group">
                      <input
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        required
                      />
                      <input
                        placeholder="Contact Number"
                        name="number"
                        type="text"
                        required
                      />
                      <input placeholder="Address" type="text" required />
                      <input placeholder="Timing" type="text" required />
                      <span disabled className="book-appo btn mt-3">
                        Quick Appointment{' '}
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //last-content */}
        <section className="banner-bottom py-8">
          <div className="container py-md-5">
            <div className="row banner-grids mb-lg-5">
              <div className="col-lg-4 content-left">
                <img src="images/vk.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-4 content-left">
                <img src="images/vk1.jpeg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-4 content-right">
                <h5 className="mt-1 text-xl">Trust Us</h5>
                <h4>We will help to find health, to everyone.</h4>
                <p className="mt-2 text-left">
                  Overcoming drug addiction can significantly improve your
                  physical and mental health. It allows you to regain control
                  over your life, reduce the risk of health complications, and
                  increase your overall well-being.
                </p>
                <ul className="tic-info list-unstyled">
                  <li>
                    <span className="fa fa-hand-o-right" /> Rebuilding
                    Relationships
                  </li>
                  <li>
                    <span className="fa fa-hand-o-right" /> Personal Growth and
                    Self-Esteem
                  </li>
                  <li>
                    <span className="fa fa-hand-o-right" /> Role Model for
                    Others
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-lg-5 mt-4 pt-5 text-center" id="stats">
              <div className="col-lg-4 counter editContent mt-3">
                <span className="fa fa-users" />
                <div className="counter-info">
                  <h4>7200+</h4>
                  <p>Healthy and happy customers treated by BREADS</p>
                </div>
              </div>
              <div className="col-lg-4 counter two editContent mt-3">
                <span className="fa fa-user-md" />
                <div className="counter-info">
                  <h4>150+</h4>
                  <p>
                    Professional medical specialist for counseling at BREADS
                  </p>
                </div>
              </div>
              <div className="col-lg-4 counter editContent mt-3">
                <span className="fa fa-diamond" />
                <div className="counter-info">
                  <h4>15+</h4>
                  <p>
                    Years of impeccable and successful work by our organization
                    BREADS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /tabs */}
        <section className="tabs-blue py-5">
          <div className="container pt-md-5">
            <div className="header-w3layouts text-center mb-5">
              <h3 className="title-w3pvt mb-3">Our Services</h3>
            </div>
            <div className="tab-main mx-auto">
              <input
                id="tab1"
                type="radio"
                name="tabs"
                className="w3layouts-sm"
                defaultChecked
              />
              <label htmlFor="tab1">Drug </label>
              <input
                id="tab2"
                type="radio"
                className="w3layouts-sm"
                name="tabs"
              />
              <label htmlFor="tab2">Gadget </label>
              <input
                id="tab3"
                type="radio"
                className="w3layouts-sm"
                name="tabs"
              />
              <label htmlFor="tab3">Porn </label>

              <section id="content1" className="inner-w3layouts-wrap ">
                <div className="row part-grids text-center inner-sec-w3ls d-flex justify-content-center">
                  <div className="col-md-6 partgrid2 ">
                    <div className="thumbnail cardd">
                      <div className="img-event">
                        <img
                          className="img-fluid"
                          src="images/g1.jpeg"
                          alt=""
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      <div className="caption cardd-body p-md-4">
                        <h4 className="mb-4 editContent">Natural Drugs</h4>
                        <p>
                          Natural drugs are derived from substances found in
                          nature, such as plants. These drugs have been used for
                          centuries for various purposes, including medicinal,
                          recreational, or spiritual use. Examples of natural
                          drugs include marijuana, opium, psilocybin mushrooms,
                          and cocaine derived from the coca plant.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 partgrid1">
                    <div className="thumbnail cardd">
                      <div className="img-event">
                        <img
                          className="img-fluid"
                          src="images/g2.jpeg"
                          alt=""
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      <div className="caption cardd-body p-md-4">
                        <h4 className="mb-4 editContent">Synthetic Drug</h4>
                        <p>
                          Synthetic drugs are artificially created in
                          laboratories and are designed to mimic the effects of
                          natural substances or create entirely new effects.
                          These drugs are often produced through chemical
                          processes using various compounds. Synthetic drugs
                          include substances like MDMA (ecstasy),
                          methamphetamine, synthetic cannabinoids, and synthetic
                          opioids.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="content2" className="inner-w3layouts-wrap">
                <div className="row part-grids text-center">
                  <div className="col-md-6 partgrid2 d-flex justify-content-center">
                    <div className="thumbnail cardd">
                      <div className="img-event">
                        <img
                          className="img-fluid"
                          src="images/g3.jpeg"
                          alt=""
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      <div className="caption cardd-body p-md-4">
                        <h4 className="mb-4 editContent">Social Media</h4>
                        <p>
                          Social media addiction is a pervasive issue
                          characterized by excessive use and dependency on
                          social media platforms, often resulting in decreased
                          productivity, isolation, and negative impacts on
                          mental health.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 partgrid1 d-flex justify-content-center">
                    <div className="thumbnail cardd">
                      <div className="img-event">
                        <img
                          className="img-fluid"
                          src="images/g10.jpeg"
                          alt=""
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      <div className="caption cardd-body p-md-4">
                        <h4 className="mb-4 editContent">
                          Technology Dependency
                        </h4>
                        <p>
                          Technology Dependency refers to the excessive reliance
                          and attachment to electronic devices beyond social
                          media platforms, such as smartphones, laptops,
                          tablets, and gaming consoles. It involves compulsive
                          use and difficulty in controlling the time spent on
                          these devices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="content3" className="inner-w3layouts-wrap">
                <div className="row part-grids text-center">
                  <div className="col-md-12 partgrid d-flex justify-content-center">
                    <div className="thumbnail cardd">
                      <div className="img-event">
                        <img
                          className="img-fluid"
                          src="images/p.jpeg"
                          alt=""
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      <div className="caption cardd-body p-md-4">
                        <h4 className="mb-4 editContent">Porn</h4>
                        <p>
                          Porn addiction is a complex issue that affects
                          individuals globally. It involves compulsive and
                          excessive consumption of pornography, leading to
                          negative consequences. It can impair relationships,
                          mental health, and overall well-being. Seeking
                          professional help, support from loved ones, and
                          developing healthy coping mechanisms are essential for
                          overcoming porn addiction.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* //tabs */}
        {/* //last-content */}
        <section className="lab-test py-5" id="lab">
          <div className="container py-md-5">
            <div className="row banner-grids mb-lg-5">
              <div className="col-lg-6 content-right pt-md-4">
                <h5 className="mt-1 font-bold text-2xl">Privacy and Confidentiality</h5>
                <p className="mt-2 text-left">
                  We prioritize the privacy and confidentiality of our visitors.
                  Any personal information collected on our website is handled
                  securely and in compliance with relevant data protection laws.
                  Our privacy policy statement ensures transparency in how we
                  handle data.{' '}
                </p>
                <ul className="tic-info list-unstyled">
                  <li>
                    <span className="fa fa-hand-o-right" /> strict
                    confidentiality policy in place to protect your privacy
                  </li>
                  <li>
                    <span className="fa fa-hand-o-right" /> We respect your
                    right to remain anonymous or use a pseudonym when
                    interacting with our website
                  </li>
                  <li>
                    <span className="fa fa-hand-o-right" /> We are transparent
                    about our privacy practices
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 content-left">
                <img src={confi} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
        {/* //lab-test */}
        {/* /grids-content1 */}
        <section className="testimonials py-5" id="test">
          <div className="container py-lg-3">
            <div className="header-w3layouts text-center mb-5">
              <h3 className="title-w3pvt two mb-3"> Client Reviews </h3>
            </div>
            <div className="test-content">
              <div className="testimonials_grid">
                <div className='flex justify-center mb-4'>
                  <span className="fa fa-quote-left mr-2" aria-hidden="true" />
                <p className="sub-test editContent">Great website! I would recommend it to all my friends who are seeking for help :P</p>
                <span className="fa fa-quote-right ml-2" aria-hidden="true" />
                </div>

                <div className='flex'>
                  <div className="testi_grid mr-4">
                  <img src={client1} alt=" " className="img-fluid h-40 w-40 mx-2" />
                  <h5>Thomas Carl</h5>
                  <label>I used this website to overcome my addiction of consuming alcohol. </label>
                </div>
                <div className="testi_grid mr-4 ">
                  <img src={client2} alt=" " className="img-fluid h-40 w-40 ml-3" />
                  <h5>Lana Del Ray</h5>
                  <label>This website boosted my confidence and motivated me to overcome my addiction.</label>
                </div><div className="testi_grid gap-8">
                  <img src={client3} alt=" " className="img-fluid h-40 w-40" />
                  <h5>Ana De armas</h5>
                  <label>I used this website to overcome my addiction of consuming alcohol. </label>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //grids-content1 */}
        {/* footer */}
        <footer>
          <div className="container">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_w3layouts">
                <h2 className="logo-2 mb-lg-4 mb-3">
                  <div className="flex">
                    <img src={sbIcon} width={35} alt="" />
                    <a href="/" className="mx-2 mt-2">
                      Refrain Addiction
                    </a>
                  </div>
                </h2>
                <p>A BREADS' PROGRAM</p>
                <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
                <ul className="w3layouts_social_list list-unstyled">
                  <li>
                    <a href="#" className="w3pvt_facebook">
                      <span className="fa fa-facebook-f" />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="w3pvt_twitter">
                      <span className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w3pvt_dribble">
                      <span className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li className="ml-2">
                    <a href="#" className="w3pvt_google">
                      <span className="fa fa-google-plus" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 footer-right">
                <div className="w3layouts-news-letter">
                  <h3 className="footer-title mb-lg-4 mb-3">Newsletter</h3>
                  <p>
                    By subscribing to our mailing list you will always get
                    latest news and updates from us.
                  </p>
                  <form
                    action="#"
                    method="post"
                    className="w3layouts-newsletter"
                  >
                    <input
                      type="email"
                      name="Email"
                      className="h-12"
                      placeholder="Enter your email..."
                      required
                    />
                    <button className="btn1 h-12">
                      <span
                        className="fa fa-paper-plane-o"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                </div>
                <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                  <div className="col-md-4 footer-grid_section_w3layouts">
                    <h3 className="footer-title mb-lg-4 mb-3">Information</h3>
                    <ul className="list-unstyled w3layouts-icons">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="mt-3">
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="mt-3">
                        <a>Departments</a>
                      </li>
                      <li className="mt-3">
                        <a href="services.html">Services</a>
                      </li>
                      <li className="mt-3">
                        <Link to="https://breadsbangalore.org/">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 footer-grid_section_w3layouts">
                    {/* social icons */}
                    <div className="agileinfo_social_icons">
                      <h3 className="footer-title mb-lg-4 mb-3">
                        Customer Service
                      </h3>
                      <ul className="list-unstyled w3layouts-icons">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li className="mt-3">
                          <a href="#">Delivery &amp; Returns</a>
                        </li>
                        <li className="mt-3">
                          <a href="#">Waranty</a>
                        </li>
                        <li className="mt-3">
                          <a href="#">Terms &amp; Condition</a>
                        </li>
                        <li className="mt-3">
                          <a href="#">Privacy Plolicy</a>
                        </li>
                      </ul>
                    </div>
                    {/* social icons */}
                  </div>
                  <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                    <h3 className="footer-title mb-lg-4 mb-3">Contact Info</h3>
                    <div className="contact-info">
                      <div className="footer-address-inf">
                        <h4 className="ad-info mb-2">Phone</h4>
                        <p>+91 00010209247</p>
                      </div>
                      <div className="footer-address-inf my-4">
                        <h4 className="ad-info mb-2">Email </h4>
                        <p>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </p>
                      </div>
                      <div className="footer-address-inf">
                        <h4 className="ad-info mb-2">Location</h4>
                        <p>Honey Avenue, Delhi, 100201</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* //footer */}
        <div className="cpy-right py-3">
          <div className="container">
            <div className="row">
              <p className="col-md-10 text-left">
                © 2023 Refrain Addiction. All rights reserved{' '}
              </p>
              {/* move top icon */}
              <a
                href="#home"
                className="move-top text-lg-right text-center col-md-2"
              >
                <span className="fa fa-angle-double-up" aria-hidden="true" />
              </a>
              {/* //move top icon */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
