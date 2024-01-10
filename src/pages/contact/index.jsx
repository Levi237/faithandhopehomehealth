import React, { Component } from 'react';
import '../pages.css';

import EmailForm            from '../../components/EmailForm';

export default class ContactPage extends Component {
    render(){
        return (
            <div className="contact-page page-wrapper">
                <section className="page-width">
                    <div className="grid two-col mobile-one-col">
                        <div>
                            <h1 className="header">Contact Us</h1>
                            <div data-contact-info="phone">
                                <section className="contact-buttons" style={{}}>
                                <a href="tel:1-818-290-3768" target="_blank" rel="noopener noreferrer">
                                    <h4 className="button"><svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="512" viewBox="0 0 32 32" width="512" data-name="Layer 3"><path d="m30.035 22.6c-.082-.065-6.035-4.356-7.669-4.048-.78.138-1.226.67-2.121 1.735-.144.172-.49.584-.759.877a12.517 12.517 0 0 1 -1.651-.672 13.7 13.7 0 0 1 -6.321-6.321 12.458 12.458 0 0 1 -.672-1.651c.294-.27.706-.616.882-.764 1.06-.89 1.593-1.336 1.731-2.118.283-1.62-4.005-7.614-4.05-7.668a2.289 2.289 0 0 0 -1.705-.97c-1.738 0-6.7 6.437-6.7 7.521 0 .063.091 6.467 7.988 14.5 8.025 7.888 14.428 7.979 14.491 7.979 1.085 0 7.521-4.962 7.521-6.7a2.283 2.283 0 0 0 -.965-1.7z"/></svg> 818.290.3768</h4>
                                </a>
                                <a href="mailto:fhhhealth@gmail.com" target="_blank" rel="noopener noreferrer"><h4 className="button">fhhhealth@gmail.com</h4></a>
                                </section>
                            </div>
                        </div>
                        <div>
                            <div data-contact-info="oncall">
                                <section><h3>Available On-Call</h3></section>
                                <section>
                                24 hours a day&nbsp;|&nbsp;7 days a week
                                </section>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <EmailForm form="contact" />
                </section>
            </div>
        );
    };
};