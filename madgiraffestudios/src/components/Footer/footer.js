import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import giraffeicon from '../../Images/icon.png';
import './footer.scss';
class Footer extends Component{
    render(){
        return(
            <div class="footer_bg pt-5 pb-3 bg-light text-center" id="footer">
            <div class="container">
                <div class="row">
                    <div class=" col-md-4 text-center">
                        <a href='/'> <img src={giraffeicon} height="50px" alt="logo" id="footer-logo" /></a>
                    </div>
                    <div class=" col-md-4 text-center">
                        <div class="row">
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
                    </div>
                    <div class="col-md-4 bg-light"><h6 class="font-weight-bolder line-height">CONTACT INFORMATION</h6><p>Madgiraffestudios@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Footer;