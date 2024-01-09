import React, { Component }     from 'react';
import '../pages.css';

import Services                 from './Services';
import Hero                     from './Hero';
import Intro                    from './Intro';
import Assessments              from './Assessments';
import Locations                 from './Locations';
export default class HomePage extends Component {
    render(){
        return (
            <div className="home-page page-wrapper">
                <Hero />
                <Intro />
                <Assessments />
                <Services scrollToTop={this.props.scrollToTop} />
                <Locations />
            </div>
        );
    };
};