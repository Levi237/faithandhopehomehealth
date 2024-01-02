import React, { Component } from 'react';
import '../pages.css';

import EmailForm            from '../../components/EmailForm';

export default class ContactPage extends Component {
    render(){
        return (
            <div className="contact-page page-wrapper">
                <section className="page-width">
                    {/* <h1 className="header">Contact
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </small>
                    </h1> */}
                    <h1 className="header">Contact</h1>
                    <EmailForm form="contact" />
                </section>
            </div>
        );
    };
};