import React from 'react';
import "./footer.scss"
const Footer = () => {
    return (
        <nav className="navbar navbar-default navbar-sticky-bottom mt-5" role="navigation">
            <div className="container">
                <div className="row">

                    <div className="col"><i className="fa fa-facebook-official fa-2x"></i></div>
                    <div className="col"><i className="fa fa-instagram fa-2x"></i></div>
                    <div className="col"><i className="fa fa-twitter fa-2x"></i></div>
                    <div className="col"><i className="fa fa-youtube-play fa-2x"></i></div>
                

                </div>
                <div className="row justify-content-around princ">

                    <div className="col-3 col-md-3">
                      
                        <ul className="list-unstyled footer">
                            <li>Audio and Subtitles</li>
                            <li>Media Center</li>
                            <li>Privacy</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="col-3 col-md-3">
                        
                        <ul className="list-unstyled footer">
                            <li>Audio Description</li>
                            <li>Investor Relations</li>
                            <li>Legal Notices</li>
                        </ul>
                    </div>

                    <div className="col-3 col-md-3">
                                <ul className="list-unstyled footer">
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>

                    <div className="col-3 col-md-3">
                        <ul className="list-unstyled footer">
                            <li>Gift Cards</li>
                            <li>Terms of Use</li>
                            <li>Corporate Information</li>
                        </ul>
                    </div>

                </div>
                <div className="footer-bottom w-100">

                    <p className="text-xs-center"> &copy;1997-{new Date().getFullYear()} Netflix, Inc </p>

                </div>
            </div>
        </nav>
    );
}

export default Footer;
