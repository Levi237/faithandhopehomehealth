import React            from 'react';
import TextIo           from '../../components/TextIo';
const Hero = () => {

    return(
        <section className="hero-section">               
            <div>
                <section>
                    <div>
                        <img src="care-at-home-services-hero.jpg" alt="At home care, nurse with elderly woman in wheelchair"/>
                        <div className="hero-info">
                            <div>
                                <h1>Faith & Hope </h1>
                                <h4>HOME HEALTH CARE, INC.</h4>
                                <div className="spacer"></div>
                                    <TextIo>
                                            Known for dedicated & quality<br/>care within the home. 

                                    </TextIo>
<br/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;