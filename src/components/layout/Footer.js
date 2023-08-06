import './styles/Footer.css';
import { email, github, linkedin, whatsapp } from '././styles/my-links/my-links';

export function Footer() {
    return (
        <>
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link>
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href={github} target='_blank'><i class="fa fa-github"></i></a>
                        <a href={linkedin} target='_blank'><i class="fa fa-linkedin"></i></a>
                        <a href={email} target='_blank'><i class="fa fa-envelope-o"></i></a>
                        <a href={whatsapp} target='_blank'><i class="fa fa-whatsapp"></i></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
                    </div>
                </div>
            </footer>
        </>
    )
}