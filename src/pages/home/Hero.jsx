import React            from 'react';
import TextIo           from '../../components/TextIo';
const Hero = () => {

    return(
        <section className="hero-section">               
            <div>
                <section>
                    <div>
                        <img src="care-at-home.png"/>
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