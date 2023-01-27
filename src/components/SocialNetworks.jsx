import {FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../styles/components/SocialNetworks.sass";

const Socialnetworks = () => {
    return ( 
        <section id="social-networks">
            <a href="https://github.com/Bl4ssst" className="social-btn" id="github">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/igor-moreira-2b906024a" className="social-btn" id="linkedin">
                <FaLinkedinIn />
            </a>
        </section>
    );
};

export default Socialnetworks