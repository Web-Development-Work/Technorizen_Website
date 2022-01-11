import "../App.css";
const Footer=()=>{
    return(
        <div className="Footer">
            <div class="col-sm-6">
                    <h2 Style="color: #213d65">Have a question or need a custom quote?</h2>
                    <div class="confirm-div"></div> 
                    <div id="subscribeform" action="http://technorizen.com/company/home/subscribe" role="form" onsubmit=" return subscribeValidate()" method="post">
                        <div class="input-group inp-sub-par col-md-12">
                            <input type="text" name="semail" id="semail" placeholder="Your Email" class="form-control input-lg bor-inp"></input>
                            <div id="semail_error" class="error"></div>
                            <span class="input-group-btn">
                                <button class="btn btn-info btn-lg submi-but" type="submit">
                                    Subscribe Now
                                </button>
                            </span>
                        </div>
                    </div>
            </div>

            
            <section id="Footer">
              <div class="row" Style="background-image: url(http://technorizen.com/company/images/map-base.png); height: 260px; width: 100%; border-top: 1px solid aqua;border-bottom: 2px solid aqua">
                <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>OUR SERVICES</h3>
                        <ul>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/webServices">Web Services</a></li>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/mobilityS">Mobility Solution</a></li>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/businessA">Business Analysis</a></li>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/responsiveS">Responsive Solution</a></li>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/softwareT">Software Testing</a></li>
                            <li><a href="http://technorizen.com/company/Webcontroller/viewPage/softwareD">Software Development</a></li>
                          
                        </ul>
                    </div>    
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><a href="./">Home</a></li>
                            <li><a href="./about">About</a></li>
                            <li><a href="./services">Services</a></li>
                            <li><a href="./portfolio">Portfolio</a></li>
                            <li><a href="./career">Career</a></li>
                            <li><a href="./contactus">Contact Us</a></li>
                        </ul>
                    </div>    
                </div>

                <div class="col-md-3 col-sm-6 info">
                    <div class="widget">
                        <h3>CONTACT</h3>
                        <ul>
                            <li><p> 402, Sapphire House,Sapna Sangeeta Road, Indore (M.P.) 452002</p></li>   
                            <li><p><i class="fa fa-phone"></i> &nbsp; 0731-4279840</p></li>
                            <li><p><i class="fa fa-mobile"></i> &nbsp; +91-7828407092</p></li>
                            <li><p><i class="fa fa-envelope-o"></i> &nbsp; <a href="mailto:info@technorizen.com">info@technorizen.com</a></p></li>
                        </ul>
                    </div>    
                </div>

                <div class="col-md-3 col-sm-6">
                    <div class="widget">
                        <h3>Our Partners</h3>
                        <ul>
                           
                            <li><a href="https://in.godaddy.com/offers/default.aspx?tmskey=1dom_03&amp;isc=goflin130&amp;currencytype=INR&amp;cvosrc=ppc.google.go+daddy&amp;cvo_crid=153866832861&amp;matchtype=e" target="blank">Go Daddy</a></li>
                            <li><a href="https://www.bigrock.in/deals-on-domains?a_aid=4d2c643cb0d0a&amp;location=IN&amp;chan=ga_se_brgennew&amp;ad=ga_se_brgennew&amp;cmp=Bigrock_Generic(S)&amp;kw=Big%2520rock&amp;mt=e&amp;adg=Bigrock_Exact&amp;adid=88003821290&amp;coupon=BCOM073F037A&amp;gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVt2JNjuQMv2i_kgn3a6TJs3bhzSaDc2W4Ko-fnI6eEhoCUo7w_wcB" target="blank">Big Rock</a></li>
                            <li><a href="http://www.bluehost.in/web-hosting-offer?chan=ga_se_comp&amp;ad=ga_se_comp&amp;cmp=Competitors_(S)&amp;kw=Hosting%20raja&amp;mt=e&amp;adg=Hosting_Raja&amp;adid=102643814598&amp;coupon=BHABCOMFR&amp;a_aid=8a10h1801b&amp;gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEV5l_15u4L4zSBTCoBuh3Xw_j8rF77Si8P1pQiLCYfPBoCOozw_wcB" target="blank">Hosting Raja</a></li>
                            <li><a href="https://login.ccavenue.com/web/merchant-payment-gateway.do?command=navigateMerchantPaymentGateway&amp;gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVJO0WV2FUbN4-QqA9GENsWli-vWunU-fqiCdakNYqGhoC7CLw_wcB" target="blank">CC Avenue</a></li>
                            <li><a href="https://www.payumoney.com/?utm_source=google&amp;utm_medium=search&amp;utm_term=payu%20money&amp;utm_content=basic&amp;utm_campaign=search_brand&amp;keyword=payu%20money&amp;matchtype=e&amp;network=g&amp;device=c&amp;creative=106144760884&amp;placement=&amp;adposition=1t1&amp;gclid=CjwKEAiA3qXBBRD4_b_V7ZLFsX4SJAB0AtEVRpFggm3-mtYmkmo4_z6aEQNtubWtXxfurCey5xWpohoCk-Tw_wcB" target="blank">Payu Money</a></li>
                      
                        </ul>
                    </div>    
                </div>
              </div>
            </section>
            

            <div className="container">
            <div class="row">
                <div class="col-sm-6">
                    © 2021 <a id="flink" target="_blank" rel="noreferrer" href="./" title="Technorizen Software Solutions">Technorizen Software Solutions</a>. All Rights Reserved.
                </div>
                <div class="col-sm-6">
                       <div class="social">
                            <ul class="social-share">
                                <li><a href="https://www.facebook.com/technorizen/" title="facebook" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://twitter.com/InfoTechnorizen" title="twitter" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/9234528?trk=tyah&amp;trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A9234528%2Cidx%3A2-1-3%2CtarId%3A1478858372243%2Ctas%3Atechnorizen" title="linkdin" target="_blank" rel="noreferrer"><i class="fa fa-linkedin"></i></a></li> 
                                <li><a href="https://plus.google.com/106801452428907684746" title="google plus" target="_blank" rel="noreferrer"><i class="fa fa-google-plus"></i></a></li>
                            </ul>
                       </div>
                    </div>
            </div>
            </div>
    





        </div>
 

    );
}

export default Footer;