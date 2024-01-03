import React, { Component }     from 'react';
import '../pages.css';

import Info                 from './Info';
import Hero from './Hero';

export default class ServicesPage extends Component {
    render(){
        return (
            <div className="services-page">
                <Hero />
                <div className="home-page page-wrapper">
                    <Info />
                </div>
            </div>
        );
    };
};