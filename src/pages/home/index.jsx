import React, { Component }     from 'react';
import '../pages.css';

import About                    from './About';
import Intro                     from './Intro';

export default class HomePage extends Component {
    render(){
        return (
            <div className="home-page page-wrapper">
                <Intro />
                <About />
            </div>
        );
    };
};