import '../App.css';
import { Link,withRouter } from "react-router-dom";
import React from 'react';

const NavigationMenu=(props)=>{
    
    
    return(    
        <div className="NavigationMenu ">
            <nav className="navbar navbar-expand">
                        <Link to="/">
                            <img src="http://technorizen.com/company/images/logo.png" alt="logo" Style="height:60px"/>
                        </Link>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
 
 
                    <div class="collapse navbar-collapse navbar-right" Style="padding:0 30px">    
                        <ul className="navbar-nav navbar-brand ml-auto" Style=" padding:0 50px;">
                        
                        <li className={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className={`nav-item dropdown  ${props.location.pathname === "/services" ? "active" : ""}`}>
                            <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="/services">Services</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/webServices">Web Services</a></li>
                                 <li><a  href="http://technorizen.com/company/Webcontroller/viewPage/mobilityS">Mobility Solution</a></li>
                                 <li><a  href="http://technorizen.com/company/Webcontroller/viewPage/businessA">Business analysis</a></li>
                                 <li><a  href="http://technorizen.com/company/Webcontroller/viewPage/responsiveS">Responsive Solution</a></li>
                                 <li><a  href="http://technorizen.com/company/Webcontroller/viewPage/softwareT">Software Testing</a></li>
                                 <li><a  href="http://technorizen.com/company/Webcontroller/viewPage/softwareD">Software Development</a></li>
                            </ul>
                        </li>

                        <li className={`nav-item dropdown ${props.location.pathname === "/technology" ? "active" : ""}`}>
                            <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="/technology">Technology</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/mobile">Mobile</a></li>
                                <li class="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="http://technorizen.com/company/Webcontroller/viewPage/technology" data-toggle="dropdown" role="button">
                                        Web
                                    </a>
                                    <ul class="submenu" aria-labelledby="navbarDropdown" Style="list-style-type: none;background-color:white">
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/phpDevelopment">PHP Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/rorDevelopment">ROR Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/javaDevelopment">JAVA Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/angularJSDevelopment">Angular JS Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/nodeJSDevelopment">Node JS Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/html5Development">HTML5 Web Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/ASPnetweb">ASP.net web Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/microsoftDotnet">Microsoft DotNet Development</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/MicrosoftSharepoint">Microsoft sharepoint</a></li>
                                        <li><a class="dropdown-item" href="http://technorizen.com/company/Webcontroller/viewPage/MicrosoftSQLserver">Microsoft SQL Server</a></li>
                                    </ul>
                                </li>    
                                <li>
                                    <a href="http://technorizen.com/company/Webcontroller/viewPage/ria">RIA</a>
                                </li>
                            </ul>
                        </li>

                        <li className={`nav-item dropdown ${props.location.pathname === "/solution" ? "active" : ""}`}>
                            <Link className="nav-link dropdown-toggle" to="/solution">Solution</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/LMSSolutions">LMS Solutions</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/HRMS">HRMS Solutions</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/CMS">CMS Solutions</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/ERP">ERP Solutions</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/BookingSolution">Banking and Finance Solutions</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/HealthCare">Health Care</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/EventManagement">Event Management</a></li>
                                <li><a href="http://technorizen.com/company/Webcontroller/viewPage/E-commerce">E-commerce</a></li>
                               
                            </ul>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/products" ? "active" : ""}`}>
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/Gallery" ? "active" : ""}`}>
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/portfolio" ? "active" : ""}`}>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/career" ? "active" : ""}`}>
                            <Link className="nav-link" to="/career">Career</Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/contactus" ? "active" : ""}`}>
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                        </ul>
                    </div>
            </nav>
        </div>

    );
}

export default withRouter(NavigationMenu);