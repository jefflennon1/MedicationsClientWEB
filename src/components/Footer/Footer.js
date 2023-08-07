import './Footer.css';
import { email, github, linkedin, whatsapp } from '../../utils/targets';

export function Footer() {
    return (
        <>
            <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link>
            <footer>
                <div className="footer">
                    <div className="row">
                        <a href={github} target='_blank'><i className="fa fa-github"></i></a>
                        <a href={linkedin} target='_blank'><i className="fa fa-linkedin"></i></a>
                        <a href={email} target='_blank'><i className="fa fa-envelope-o"></i></a>
                        <a href={whatsapp} target='_blank'><i className="fa fa-whatsapp"></i></a>
                    </div>

                    <div className="row">
                        JEFF Copyright © 2023 - All rights reserved
                    </div>
                </div>
            </footer>
        </>
    )
}