import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import giraffeicon from '../../Images/icon.png';
import './footer.scss';
class Footer extends Component{
    render(){
        return(
            <div class="footer_bg pt-5 pb-3 bg-light text-center" id="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 mb-4">
                        <a href='/'> <img src={giraffeicon} height="50px" alt="logo" id="footer-logo" /></a>
                    </div>
                    <div className=" col-md-4 text-center">
                        <div className="row">
                            <div className="col-md-3">

                                <p><SocialIcon url="https://www.instagram.com/madgiraffestudios/" bgColor="#8d18b4"/>
                                </p>
                            </div>
                            <div className="col-md-3">
                                <p><SocialIcon url="https://twitter.com/MadGiraffeStud1" bgColor="#8d18b4" />
                                </p>
                            </div>
                            
                            <div className="col-md-3">
                                <p>
                                    <SocialIcon url="https://www.linkedin.com/in/mackenzie-heslin-scott-70ab4a116/" bgColor="#8d18b4" />
                                </p>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-9 mt-4">
                            <span className="text-center"><p className="copyright text-muted">©2020 by <a href="https://github.com/MrGDS2">MrGDS2</a></p></span>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"><h6 className="font-weight-bolder line-height">CONTACT INFORMATION</h6><p>Madgiraffestudios@gmail.com</p>
                    </div>
                   
                    </div>
                    <div className="row">
                            <div className="col-md-11 mt-4">
                            <span className="text-center"><p className="copyright text-muted">©2020 by MrGDS2</p></span>

                            </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;
