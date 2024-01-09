import React            from 'react';
import TextIo           from '../../components/TextIo';

import './hero.css';
const Hero = () => {

    return(
        <section className="hero-section">               
            <div>
                <section>
                    <div>
                    <img src="happiness-cheerful-elderly-woman-men-talking-with-female-caregiver-nurse-doctor-having-health-checking-consult-living-areacaretakers-with-senior-couple-sitting-living-room-nursing-home.jpg" alt="At home care, nurse with elderly woman in wheelchair"/>
                        <div className="hero-info">
                            <div>
                                <h1>Faith & Hope </h1>
                                <h4>HOME HEALTH CARE, INC.</h4>
                                <div className="spacer"></div>
                                <TextIo>HOME IS WHERE THE HEART IS...</TextIo>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;