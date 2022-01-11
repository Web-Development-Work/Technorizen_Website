import React from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { useTheme } from "@material-ui/core/Styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { Box } from "@material-ui/core";

const MyCollection = [
  {
    label: "first picture",
    imgPath:
      "http://technorizen.com/company/uploads/images/banner_IMG27557.png",
  },

  {
    label: "Second picture",
    imgPath: "http://technorizen.com/company/uploads/images/banner_IMG1104.png",
  },

  {
    label: "Third picture",
    imgPath:
      "http://technorizen.com/company/uploads/images/banner_IMG51150.png",
  },
  {
    label: "Fourth picture",
    imgPath:
      "http://technorizen.com/company/uploads/images/banner_IMG66378.png",
  },
];
// for Auto slide show

const images = [
  {
    label: "admin1",
    imgPath: "http://technorizen.com/company/uploads/images/admin1.png",
  },
  {
    label: "admin2",
    imgPath: "http://technorizen.com/company/uploads/images/admin2.png",
  },
  {
    label: "admin3",
    imgPath: "http://technorizen.com/company/uploads/images/admin3.png",
  },
  {
    label: "admin4",
    imgPath: "http://technorizen.com/company/uploads/images/admin4.png",
  },
  {
    label: "admin5",
    imgPath: "http://technorizen.com/company/uploads/images/admin5.png",
  },
  {
    label: "admin6",
    imgPath: "http://technorizen.com/company/uploads/images/admin6.png",
  },
];

function Index(props) {
  const CollectionSize = MyCollection.length;
  const theme = useTheme();

  const [index, setActiveStep] = React.useState(0);
  const [activeStep, setActiveS] = React.useState(0);

  const maxSteps = images.length;

  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToBackPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveS((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveS((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div classNameName="Container">
      <div
        Style={{
          marginLeft: "0%",
        }}
      >
        <div
          Style={{
            maxWidth: 1400,
            flexGrow: 1,
          }}
        >
          <Paper
            square
            elevation={0}
            Style={{
              height: 10,
              display: "flex",
              paddingLeft: theme.spacing(4),
              backgroundColor: theme.palette.background.default,
              alignItems: "center",
            }}
          ></Paper>
          <img
            src={MyCollection[index].imgPath}
            Style={{
              height: 455,
              width: "100%",
              maxWidth: 1400,
              display: "block",
              overflow: "hidden",
            }}
            alt={MyCollection[index].label}
          />
          <MobileStepper
            variant="dots"
            steps={4}
            index={index}
            position="static"
            sx={{ maxWidth: 400, flexGrow: 1 }}
            nextButton={
              <Button
                size="small"
                onClick={goToNextPicture}
                disabled={index === CollectionSize - 1}
              >
                <span className="span">Next</span>
                {theme.direction !== "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={goToBackPicture}
                disabled={index === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                <span className="span">Prev</span>
              </Button>
            }
          />
        </div>
      </div>

      <section id="feature">
        <div classNameName="container">
          <div
            classNameName="center wow fadeInDown animated animated"
            Style="visibility: visible; animation-name: fadeInDown; margin-top:150px"
          >
            <h3>
              <span Style="color:aqua">Our</span> Service
            </h3>
            <div
              classNameName="divider_wrap"
              Style="border-top: 1px solid #ffffff;"
            >
              {" "}
              <span>
                <i></i>
              </span>
            </div>
            <p classNameName="lead">
              We work with great zeal to bring innovative and user friendly web
              applications.
            </p>
          </div>
          <br />

          <div classNameName="row">
            <div classNameName="features">
              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-crosshairs"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Web Services</h2>
                      <h4>
                        A web service is an accumulation of open conventions and
                        guidelines utilized for trading information.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-tablet"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Mobility Solution</h2>
                      <h4>
                        Your smartphone can work wonders for you and we can make
                        that possible with our Mobility Solution.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-briefcase"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Bussiness Analysis</h2>
                      <h4>
                        Business Analysis is the discipline of identifying
                        business needs and determining solutions to business
                        problems.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-crop"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Responsive Solution</h2>
                      <h4>
                        Programming User Interface and User Experience Design
                        and Development is a critical part of Responsive
                        Solution.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-cogs"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Software Setting</h2>
                      <h4>
                        Testing are extremely crucial in the software
                        development cycle and should be introduced at the
                        earliest stage of the project.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-braille"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Software Development</h2>
                      <h4>
                        From start ups to well established businesses, all kind
                        of industries have trusted us for their software
                        development requirement.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-paint-brush"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Graphics Design</h2>
                      <h4>
                        Graphic designers create visual concepts, using computer
                        software or by hand, to communicate ideas that inspire,
                        inform, and captivate consumers.{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-btc"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Bitcoin</h2>
                      <h4>
                        Bitcoin is different than what you know and use every
                        day there are a few things that you need to know in
                        order to use it securely and avoid common pitfalls.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-md-4 col-sm-6 wow fadeInDown animated animated"
                data-wow-duration="1000ms"
                data-wow-delay="600ms"
                Style="visibility: visible; animation-duration: 1000ms; animation-delay: 600ms; animation-name: fadeInDown;"
              >
                <div className="feature-wrap">
                  <div className="media">
                    <div className="media-left media-middle">
                      <a href="http://technorizen.com/company/index.php/Webcontroller/viewPage/webServices">
                        <i className="fa fa-gamepad"></i>
                      </a>
                    </div>
                    <div className="media-body">
                      <h2>Game Development</h2>
                      <h4>
                        As a games developer you can work in design,
                        programming, art or animation and are likely to progress
                        quickly in this fast-paced industry.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feature" Style="padding-top:100px">
        <div classNameName="container">
          <div
            className="center wow fadeInDown animated animated"
            Style="visibility: visible; animation-name: fadeInDown;"
          >
            <h2>
              <span>Our</span> Skills
            </h2>
            <div
              className="divider_wrap"
              Style="border-top: 1px solid #ffffff;"
            >
              {" "}
              <span>
                <i></i>
              </span>
            </div>
            <p className="lead">
              Technorizen Software Solutions has created some of the best
              technologies for majority of its clients. Our technologies have
              become the industry standards and still rule various domains.
            </p>
          </div>

          <div
            className="col-sm-6 wow fadeInDown animated animated"
            Style="visibility: visible; animation-name: fadeInDown;"
          >
            <div className="skill">
              <div className="progress-wrap">
                <h3>Android Development</h3>
                <div className="progress">
                  <div
                    className="progress-bar  color1"
                    role="progressbar"
                    aria-valuenow="40"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    Style="width: 80%"
                  >
                    <span className="bar-width">80%</span>
                  </div>
                </div>
              </div>

              <div className="progress-wrap">
                <h3>IOS Development</h3>
                <div className="progress">
                  <div
                    className="progress-bar color2"
                    role="progressbar"
                    aria-valuenow="20"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    Style="width: 90%"
                  >
                    <span className="bar-width">90%</span>
                  </div>
                </div>
              </div>

              <div className="progress-wrap">
                <h3>Web Development</h3>
                <div className="progress">
                  <div
                    className="progress-bar color3"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    Style="width: 95%"
                  >
                    <span className="bar-width">95%</span>
                  </div>
                </div>
              </div>

              <div className="progress-wrap">
                <h3>App Development</h3>
                <div className="progress">
                  <div
                    className="progress-bar color4"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    Style="width: 85%"
                  >
                    <span className="bar-width">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-sm-6 wow fadeInDown animated animated"
            Style="visibility: visible; animation-name: fadeInDown;"
          >
            <div class="progress-wrap">
              <h3>Responsive Web Design</h3>
              <div class="progress">
                <div
                  class="progress-bar  color5"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  Style="width: 95%"
                >
                  <span class="bar-width">95%</span>
                </div>
              </div>
            </div>

            <div class="progress-wrap">
              <h3>Graphic Design</h3>
              <div class="progress">
                <div
                  class="progress-bar color6"
                  role="progressbar"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  Style="width: 90%"
                >
                  <span class="bar-width">90%</span>
                </div>
              </div>
            </div>

            <div class="progress-wrap">
              <h3>Business Analysis</h3>
              <div class="progress">
                <div
                  class="progress-bar color7"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  Style="width: 85%"
                >
                  <span class="bar-width">85%</span>
                </div>
              </div>
            </div>

            <div class="progress-wrap">
              <h3>SEO Marketing</h3>
              <div class="progress">
                <div
                  class="progress-bar color8"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  Style="width: 95%"
                >
                  <span class="bar-width">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" Style="display:none">
        <div className="container">
          <div
            class="center wow fadeInDown animated animated"
            Style="visibility: visible;"
          >
            <h2>Our Partners</h2>
            <div class="divider_wrap">
              {" "}
              <span>
                <i></i>
              </span>
            </div>
            <p class="lead">
              Trusted by Some of the World's Most Respected Companies
            </p>
          </div>

          <div className="partners">
            <section id="clients">
              <div className="container">
                <div className="row">
                  <ul>
                    <div className="slider4 owl-carousel owl-theme owl-hidden owl-loaded">
                      <div class="owl-stage-outer">
                        <div
                          class="owl-stage"
                          Style="transform: translate3d(-137.5px, 0px, 0px); transition: all 0.25s ease 0s; width: 385px;"
                        >
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/jpdabgs2q9cs8sg84.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/10fqvtl4kl80s4cskk.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/273ujhgfdpgkks0cwg.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/bue90gl4q1sk8480cw.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/2qpx46lqgr8k4occc4.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item active"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/83ofa7yymmo8wocw48.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item active"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="/#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/jpdabgs2q9cs8sg84.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item active"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/10fqvtl4kl80s4cskk.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item active"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/273ujhgfdpgkks0cwg.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/bue90gl4q1sk8480cw.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/# ">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/2qpx46lqgr8k4occc4.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/# ">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/83ofa7yymmo8wocw48.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/jpdabgs2q9cs8sg84.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                          <div
                            class="owl-item cloned"
                            Style="width: 17.5px; margin-right: 10px;"
                          >
                            <li>
                              <div class="slide">
                                <a href="/#">
                                  <img
                                    alt="#"
                                    class="img-responsive wow fadeInDown"
                                    data-wow-duration="1000ms"
                                    data-wow-delay="300ms"
                                    src="http://technorizen.com/company/uploads/images/10fqvtl4kl80s4cskk.png"
                                    Style="visibility: hidden; animation-duration: 1000ms; animation-delay: 300ms; animation-name: none;"
                                  />
                                </a>
                              </div>
                            </li>
                          </div>
                        </div>
                      </div>
                      <div class="owl-controls">
                        <div class="owl-nav">
                          <div class="owl-prev" Style="display: none;">
                            prev
                          </div>
                          <div class="owl-next" Style="display: none;">
                            next
                          </div>
                        </div>
                        <div class="owl-dots" Style="">
                          <div class="owl-dot active">
                            <span></span>
                          </div>
                          <div class="owl-dot">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <section class="about-breifing">
            <div class="col-md-3 col-sm-6">
              <div
                class="item media wow animated fadeInLeft animated animated"
                data-wow-delay=".35s"
                Style="visibility: visible; animation-delay: 0.35s; animation-name: fadeInLeft;"
              >
                <div class="section-padding">
                  <div class="item-details media-body text-center">
                    <div class="item-icon">
                      <i class="fa fa-heart-o"></i>
                    </div>
                    <div class="divider_wrap">
                      {" "}
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div class="countdown">
                      <span class="count-number counter">8,236</span>
                    </div>
                    <span class="about-item">Love Bites</span>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div class="col-md-3 col-sm-6">
              <div
                class="item media wow animated fadeInLeft animated animated"
                data-wow-delay=".55s"
                Style="visibility: visible; animation-delay: 0.55s; animation-name: fadeInLeft;"
              >
                <div class="section-padding">
                  <div class="item-details media-body text-center">
                    <div class="item-icon">
                      <i class="fa fa-rss"></i>
                    </div>
                    <div class="divider_wrap">
                      {" "}
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div class="countdown">
                      <span class="count-number counter">1,203</span>
                    </div>
                    <span class="about-item">Wifi Zones</span>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div class="col-md-3 col-sm-6">
              <div
                class="item media wow animated fadeInLeft animated animated"
                data-wow-delay=".75s"
                Style="visibility: visible; animation-delay: 0.75s; animation-name: fadeInLeft;"
              >
                <div class="section-padding">
                  <div class="item-details media-body text-center">
                    <div class="item-icon">
                      <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="divider_wrap">
                      {" "}
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div class="countdown">
                      <span class="count-number counter">3,679</span>
                    </div>
                    <span class="about-item">Customer Centers</span>
                  </div>
                </div>
              </div>{" "}
            </div>

            <div class="col-md-3 col-sm-6">
              <div
                class="item media wow animated fadeInLeft animated animated"
                data-wow-delay=".95s"
                Style="visibility: visible; animation-delay: 0.95s; animation-name: fadeInLeft;"
              >
                <div class="section-padding">
                  <div class="item-details media-body text-center">
                    <div class="item-icon">
                      <i class="fa fa-cogs"></i>
                    </div>
                    <div class="divider_wrap">
                      {" "}
                      <span>
                        <i></i>
                      </span>
                    </div>
                    <div class="countdown">
                      <span class="count-number counter">3,210</span>
                    </div>
                    <span class="about-item">Mechanical Cogs</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              class="center wow fadeInDown animated animated"
              Style="padding-bottom: 10px; visibility: visible; animation-name: fadeInDown;"
            >
              <h2>
                <span>Provide Best</span> Admin
              </h2>
              <div class="divider_wrap" Style="border-top: 1px solid #ffffff;">
                {" "}
                <span>
                  <i></i>
                </span>
              </div>
            </div>
            <div class="container" Style="margin-bottom: 50px;">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1" class=""></li>
                  <li data-target="#myCarousel" data-slide-to="2" class=""></li>
                </ol>

                <div
                  class="carousel-inner"
                  Style="height: 100%; border-radius: 20px;
    -webkit-box-shadow: 7px 5px 30px rgb(0 192 243 / 30%);
    box-shadow: 7px 5px 30px rgb(0 192 243 / 30%); border: 1px solid #ddd;"
                >
                  <div class="item active">
                    <img
                      alt="#"
                      src="uploads/images/admin1.png"
                      Style="width:100%;"
                    />
                  </div>

                  <div class="item">
                    <img
                      alt="#"
                      src="uploads/images/admin2.png"
                      Style="width:100%;"
                    />
                  </div>

                  <div class="item">
                    <img
                      alt="#"
                      src="uploads/images/admin3.png"
                      Style="width:100%;"
                    />
                  </div>

                  <div class="item">
                    <img
                      alt="#"
                      src="uploads/images/admin4.png"
                      Style="width:100%;"
                    />
                  </div>

                  <div class="item">
                    <img
                      alt="#"
                      src="uploads/images/admin5.png"
                      Style="width:100%;"
                    />
                  </div>

                  <div class="item">
                    <img
                      alt="#"
                      src="uploads/images/admin6.png"
                      Style="width:100%;"
                    />
                  </div>
                </div>

                <a
                  class="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span
                    class="fa fa-arrow-circle-o-left"
                    Style="font-size:48px;color:#01c0f3"
                  ></span>

                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span
                    class="fa fa-arrow-circle-o-right"
                    Style="font-size:48px;color:#01c0f3"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>

      <br />
      <div>
        <h1 align="center">
          <span Style="color:#00c0f3">Provide Best</span> Admin
        </h1>
      </div>
      <br />

      <Box
        sx={{ maxWidth: 1250, flexGrow: 1, paddingLeft: 50, paddingRight: 50 }}
      >
        <Paper
          square
          elevation={0}
          s={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            paddingLeft: 20,
            bgcolor: "background.default",
          }}
        ></Paper>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              <span className="span">Next</span>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              <span className="span">Back</span>
            </Button>
          }
        />
      </Box>

      <section>
        <div
          class="center wow fadeInDown animated animated"
          Style="padding-bottom: 10px; visibility: visible;"
        >
          <h2>
            <span>Provide Best</span> Admin
          </h2>
          <div class="divider_wrap" Style="border-top: 1px solid #ffffff;">
            {" "}
            <span>
              <i></i>
            </span>
          </div>
        </div>
        <div class="container" Style="margin-bottom: 50px;">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class=""></li>
              <li data-target="#myCarousel" data-slide-to="1" class=""></li>
              <li
                data-target="#myCarousel"
                data-slide-to="2"
                class="active"
              ></li>
            </ol>

            <div
              class="carousel-inner"
              Style="height: 100%; border-radius: 20px;
    -webkit-box-shadow: 7px 5px 30px rgb(0 192 243 / 30%);
    box-shadow: 7px 5px 30px rgb(0 192 243 / 30%); border: 1px solid #ddd;"
            >
              <div class="item">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin1.png"
                  Style="width:100%;"
                />
              </div>

              <div class="item">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin2.png"
                  Style="width:100%;"
                />
              </div>

              <div class="item active">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin3.png"
                  Style="width:100%;"
                />
              </div>

              <div class="item">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin4.png"
                  Style="width:100%;"
                />
              </div>

              <div class="item">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin5.png"
                  Style="width:100%;"
                />
              </div>

              <div class="item">
                <img alt="#"
                  src="http://technorizen.com/company/uploads/images/admin6.png"
                  Style="width:100%;"
                />
              </div>
            </div>

            <a
              class="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span
                class="fa fa-arrow-circle-o-left"
                Style="font-size:48px;color:#01c0f3"
              ></span>

              <span class="sr-only">Previous</span>
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span
                class="fa fa-arrow-circle-o-right"
                Style="font-size:48px;color:#01c0f3"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      <div
        id="testimonial"
        className="testimonial text-center"
        data-stellar-background-ratio="0.1"
        data-stellar-vertical-offset="0"
        Style="background-position: 12% -135.886px; padding: 0px; width: 100%; float: left;"
      >
        <div
          className="pattern-overlay"
          Style="background: url('http://technorizen.com/company/images/testimonial-background.jpg') no-repeat;
    background-size: cover;"
        >
          <div
            className="section-padding"
            Style="background: rgba(0, 0, 0, 0.38);"
          >
            <div className="container">
              <div
                className="section-top wow animated fadeInUp animated animated"
                data-wow-delay=".5s"
                Style="visibility: visible; animation-delay: 0.5s;"
              >
                <h2 className="section-title">
                  <span>Our</span> Testimonials
                </h2>
                <div className="divider_wrap">
                  {" "}
                  <span>
                    <i></i>
                  </span>
                </div>
              </div>
              <div
                className="section-details wow animated fadeInUp animated animated"
                data-wow-delay=".5s"
                Style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
              >
                <div
                  id="testimonial-slider"
                  className="testimonial-slider carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#testimonial-slider"
                      data-slide-to="0"
                      className=""
                    ></li>

                    <li
                      data-target="#testimonial-slider"
                      data-slide-to="1"
                      className="active"
                    ></li>
                  </ol>

                  <div
                    className="carousel-inner"
                    role="listbox"
                    Style="height:auto"
                  >
                    <div className="item">
                      <blockquote className="client-quote">
                        <div className="single-photo-img">
                          <img
                            className="scale-with-grid"
                            src="http://technorizen.com/company/uploads/images/Testimonials_IMG98522.png"
                            alt="Michael Thomas"
                            Style="width:90px;"
                          />
                        </div>
                        <div className="author">
                          <h5 color="Red">Michael Thomas</h5>
                          <span className="company"></span>
                        </div>
                        <i className="fa fa-quote-left highlight"></i>
                        <span Style="color:#fff">
                          The team is wonderful to work with, you don't feel
                          that you are talking to someone outside your own team,
                          they work very closely with us, understand our
                          requirements, add value to our product in every stage.
                          Its been more than 2 yrs that we have been associated
                          with them, it feels like a family now!.
                        </span>
                        <i className="fa fa-quote-right highlight"></i>
                      </blockquote>
                    </div>
                    <div className="item active">
                      <blockquote className="client-quote">
                        <div className="single-photo-img">
                          <img
                            className="scale-with-grid"
                            src="http://technorizen.com/company/uploads/images/Testimonials_IMG18373.png"
                            alt="Derrick Scott"
                            Style="width:90px;"
                          />
                        </div>
                        <div className="author">
                          <h5 color="black">Derrick Scott</h5>
                          <span className="company"></span>
                        </div>
                        <i className="fa fa-quote-left highlight"></i>
                        <span Style="color:#fff">
                          Technorizen Software Solution is a very strong team
                          and very professional. Work very hard to meet and
                          exceed the customers expectations - Quality work!.
                        </span>
                        <i className="fa fa-quote-right highlight"></i>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Index);
