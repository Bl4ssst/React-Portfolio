import React from 'react';
import "../styles/components/Sidebar.sass";
import Socialnetworks from "./SocialNetworks";
import InformationContainer from './InformationContainer';


const Sidebar = () => { 
    return (
        <aside id="sidebar">
          <p className="title">Dev. Front-end</p>
          <Socialnetworks />
          <InformationContainer />
        </aside>
    );
};

export default Sidebar