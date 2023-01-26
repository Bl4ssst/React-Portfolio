import React from 'react';
import '../styles/components/maincontent.sass';
import Sobre from './Sobre';
import Tecnologias from './Tecnologias';

const MainContent = () => {
    return (
        <main id="main-content">
            <Sobre />
            <Tecnologias />
        </main>
    );
};

export default MainContent