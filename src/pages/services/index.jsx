import React, { Component }     from 'react';
import '../pages.css';

import DiscriminationClause                 from './DiscriminationClause';
import Info                 from './Info';
import Hero from './Hero';

export default class ServicesPage extends Component {
    render(){
        return (
            <div className="services-page">
                <Hero />
                <div className="home-page page-wrapper">
                    <Info />
                    <br/><br/>
                    <DiscriminationClause />
                </div>
            </div>
        );
    };
};