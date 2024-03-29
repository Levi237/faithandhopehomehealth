import React, { Component }     from 'react';
import { Link }                 from 'react-router-dom';
import * as routes              from '../../constants/routes'
import '../pages.css';

import Hero                     from '../../components/Hero';
import InfoGrid                 from '../../components/InfoGrid';

export default class HomePage extends Component {
    state = {
        content: [``],
        image: {
            src: `registered-nurse-assisting-client.png`,
            alt: `Caregiver advising elderly patient with his options`
        },
        textInfoIntro: {
            title: [`Who do we serve?`],
            body: [`Medicare patients who need ongoing assistance to manage their health care needs at home and are referred for home health services by physicians, local hospitals, board & care centers, and skilled nursing homes.`]
        },
        info : [{
            img: 'shield-heart.png',
            title: 'Who are we?',
            body: 'We are a Medicare certified, Joint Commision accredited medical home health care agency serving Los Angeles, Orange County, Riverside, Ventura, and parts of San Bernardino Counties.'
        },{
            img: 'home-care.png',
            title: 'Why do we stand out?',
            body: 'We are owned and operated by a Licensed Medical Professional with over fifty years of experience in patient care.'
        },{
            img: 'stethoscope.png',
            title: 'What do we do?',
            body: `We provide a full array of medical services to homebound patients under Physicians orders.`
        },{
            img: 'heart-location.png',
            title: 'Where do we go?',
            body: 'We serve Los Angeles, Orange County, Riverside, Ventura, and parts of San Bernardino Counties.'
        },{
            img: 'holding-heart.png',
            title: 'When do we start?',
            body: 'We contact the patient and send RNs to open the case within 24-48 hours of receiving the home health order.'
        },{
            img: 'service-heart.png',
            title: 'Who do we serve?',
            body: 'Patients who need ongoing assistance to manage their health care needs at home and are referred for home health services by physicians, local hospitals, board and care centers, and skilled nursing homes. Medicare and select insurances accepted.'
        }]
    }
    render(){
        const { content, image, info } = this.state;
        const { scrollToTop } = this.props;
        return (
            <div className="home-page page-wrapper">
                <Hero content={content} image={image} />
                <div className="contact-section-container">
                    <div className="contact-section">
                        <h2>Available 24/7</h2>
                        <div>
                        <section>
                        <a href="tel:1-818-290-3768" target="_blank" rel="noopener noreferrer"><h3>818.290.3768</h3></a>
                        </section>
                        <section className="button-box">
                            <Link className="button" to={routes.SERV} onClick={() => {scrollToTop()}}>Services We Provide</Link>
                        </section>
                        <section>
                        <a href="mailto:fhhhealth@gmail.com" target="_blank" rel="noopener noreferrer"><h3>fhhhealth@gmail.com</h3></a>
                        </section>
                        </div>
                    </div>
                </div>
                <InfoGrid info={info} />
                <center>
                <br/><br/>
                <div className="button-box">
                    <Link className="button" to={routes.SERV} onClick={() => {scrollToTop()}}>Services We Provide</Link>
                </div>
                <br/><br/><br/><br/><br/><br/>
                </center>
            </div>
        );
    };
};