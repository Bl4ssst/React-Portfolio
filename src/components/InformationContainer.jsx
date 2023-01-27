import React from 'react';
import {AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const informationcontainer = () => {
    return (
    <section id="information">
        <div className="info-card">
            <AiOutlineWhatsApp id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(24) 981547591</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>igorst3309@protonmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Valença - RJ</p>
            </div>
        </div>    
    </section>

    
    );
};

export default informationcontainer