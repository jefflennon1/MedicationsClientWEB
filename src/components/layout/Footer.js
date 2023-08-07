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
                        JEFF Copyright © 2023 - All rights reserved
                    </div>
                </div>
            </footer>
        </>
    )
}