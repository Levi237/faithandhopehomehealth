import React, { Component }     from 'react';
import '../pages.css';

import DiscriminationClause     from './DiscriminationClause';
import InfoGrid                 from '../../components/InfoGrid';
import Hero                     from '../../components/Hero';

export default class ServicesPage extends Component {
    state = {
        content: ['Known for dedicated & quality', 'care within the home.'],
        image: {
            src: 'assisting-standing-care.png',
            alt: 'Caregiver advising elderly patient to her walker'
        },
        info : [{
            img: 'shield-heart.png',
            title: 'Who are we?',
            body: 'We are a medicare certified, Joint Commission accredited medical home health care agency '
        },{
            img: 'home-care.png',
            title: 'Why do we stand out?',
            body: 'We are owned and managed by a licensed clinician with over 50 years of experience in patient care.'
        },{
            img: 'heart-location.png',
            title: 'Where do we go?',
            body: 'We serve Los Angeles, Orange County, Riverside, Ventura, and parts of San Bernardino Counties.'
        },{
            img: 'stethoscope.png',
            title: 'What do we do?',
            body: 'We provide clinical home care under the supervision of a Registered Nurse.'
        },{
            img: 'holding-heart.png',
            title: 'When do we start?',
            body: 'We contact the patient and send RNs to open the case within 24-48 hours of receiving the home health order.'
        }]
    }
    render(){
        const { content, image, info } = this.state;
        return (
            <div className="services-page">
                <Hero content={content} image={image} />
                <div className="home-page page-wrapper">
                    <InfoGrid info={info} />
                    <br/><br/>
                    <DiscriminationClause />
                </div>
            </div>
        );
    };
};