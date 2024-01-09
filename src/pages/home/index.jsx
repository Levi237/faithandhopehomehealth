import React, { Component }     from 'react';
import '../pages.css';

import Services                 from './Services';
import Hero                     from '../../components/Hero';
import Intro                    from './Intro';
import Assessments              from './Assessments';
import Locations                from './Locations';
export default class HomePage extends Component {
    state = {
        content: ['HOME IS WHERE THE HEART IS...'],
        image: {
            src: 'registered-nurse-assisting-client.png',
            alt: 'Caregiver advising elderly patient with his options'
        }
    }
    render(){
        const { content, image } = this.state;
        return (
            <div className="home-page page-wrapper">
                <Hero content={content} image={image} />
                <Intro />
                <Assessments />
                <Services scrollToTop={this.props.scrollToTop} />
                <Locations />
            </div>
        );
    };
};