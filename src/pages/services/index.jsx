import React, { Component }     from 'react';
import '../pages.css';

import Info                 from './Info';

export default class ServicesPage extends Component {
    render(){
        return (
            <div className="home-page page-wrapper">
                <Info />
            </div>
        );
    };
};