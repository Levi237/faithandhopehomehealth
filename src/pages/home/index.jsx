import React, { Component }     from 'react';
import '../pages.css';

import About                    from './About';
import Intro                     from './Intro';
import Services                     from './Services';

export default class HomePage extends Component {
    render(){
        return (
            <div className="home-page page-wrapper">
                <Intro />
                <Services />
                <About />
            </div>
        );
    };
};