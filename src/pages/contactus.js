const Contactus = () => {
  return (
    <div className="Contactus">
      <div id="top">
        <div id="particles-js" class="khaki4-colour opacitydiv">
          <div class="content-right-panel">
            <h1>
              <span class="span">Contact</span> Us
            </h1>
            <h3 class="header-deco">How to Find Us?</h3>
          </div>
          <div class="blank-left-panel">
            <a href="./">
              <span Class="span">Home</span>
            </a>
            <i class="fa fa-long-arrow-right"></i> Contact us
          </div>
        </div>
      </div>

      <section id="contact-page" Style="background:#f2f2f2;">
        <div className="container">
          <div className="center" Style="border-color:#ccc8c8">
            <h2 Style="margin-top:40px">
              <span className="span">Drop </span> Your Message
            </h2>
            <div className="divider_wrap" Style="border-color:#ccc8c8">
              <span class="span">
                <i></i>
              </span>
            </div>
            <p className="lead">
              For the latest update and services please contact us here
            </p>
            <div className="confirm-div"></div>
          </div>

          <div className="row contact-wrap">
            <div
              className="status alert alert-success"
              Style="display:none"
            ></div>

            <form
              className="log-form"
              method="post"
              action="http://technorizen.com/company/home/contact_submit"
            >
              <div class="col-sm-5 col-sm-offset-1">
                <div class="form-group">
                  <label>
                    Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label>
                    Phone <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    class="form-control"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label>Company Name</label>
                  <input type="text" name="company_name" class="form-control" />
                </div>
              </div>

              <div class="col-sm-5">
                <div class="form-group">
                  <label>Subject </label>
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    required="required"
                  />
                </div>
                <div class="form-group">
                  <label>Message </label>
                  <textarea
                    name="message"
                    id="message"
                    required="required"
                    class="form-control"
                    rows="8"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg"
                    required="required"
                  >
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section
        class="background-lgt-grey"
        Style="
    background-color: whitesmoke;
"
      >
        <div class="container">
          <h1 class="text-center x-large">Corporate Headquarters</h1>
          <div class="col-sm-4 col-md-4">
            <div
              class="thumbnail info-thumbnail color-black"
              Style="padding:20px;"
            >
              <h3>INDIA</h3>
              <h4 class="color-lead">Indore</h4>
              <p>Technorizen Software Solutions Pvt. Ltd.</p>
              <p>
                402, Sapphire House, Sapna Sangeeta Road
                <br />
                Indore (M.P.) India
              </p>
              <br />
              <p>
                <span class="fa fa-phone-square"></span> 0731-4279840
              </p>
              <p>Mobile: +91-7828407092</p>
            </div>
          </div>

          <div class="col-sm-8 col-md-8">
            <div class="thumbnail info-thumbnail padding1 color-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.69387249491!2d75.87146697969779!3d22.702437216467363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1e12bc720f%3A0xa7161cdf6fcae127!2sSapphire+House%2C+Sapna+Sangita+Sneash+Nagar+Main+Rd%2C+Snehnagar%2C+Indore%2C+Madhya+Pradesh+452001!5e0!3m2!1sen!2sin!4v1483707158662"
                width="100%"
                height="278px"
                frameborder="0"
                Style="border:0"
                title="Indore-office"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section
        class="background-lgt-grey"
        Style="
    background-color: whitesmoke;padding-top:0px;
"
      >
        <div class="container">
          <h1 class="text-center x-large" Style="color: #4E4646;">
            US Based Office
          </h1>
          <div class="col-sm-4 col-md-4">
            <div
              class="thumbnail info-thumbnail color-black"
              Style="padding:20px;"
            >
              <h3>US</h3>
              <h4 class="color-lead">US Based Office</h4>
              <p>Technorizen Software Solutions Pvt. Ltd.</p>
              <p>
                9001 Wurzbach Rd
                <br />
                San Antonio, TX. 78240
              </p>
              <p></p>
              <p></p>
            </div>
          </div>

          <div class="col-sm-8 col-md-8">
            <div class="thumbnail info-thumbnail padding1 color-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.6175040461917!2d-98.57064198537503!3d29.527506349762394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c60b3c795c92b%3A0x1573cbed61e2c187!2s9001%20Wurzbach%20Rd%2C%20San%20Antonio%2C%20TX%2078240%2C%20USA!5e0!3m2!1sen!2sin!4v1615873996787!5m2!1sen!2sin"
                width="100%"
                height="258"
                Style="border:0;"
                allowfullscreen=""
                loading="lazy"
                title="US-office"
              >
                
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contactus;

