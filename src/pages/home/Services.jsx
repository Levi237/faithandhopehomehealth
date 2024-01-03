import React            from 'react';
import TextIo           from '../../components/TextIo';
const Services = () => {

    return(
        <section className="services-section page-width">               
            <div className="grid five-col">
                <section className="one">
                    <img src="icons/home_aid.png" alt="HOME HEALTH AIDE"/>
                    <TextIo><h4>HOME HEALTH<br/>AIDE</h4></TextIo>
                </section>
                <section className="two">
                    <img src="icons/physical_therapy.png" alt="PHYSICAL THERAPY"/>
                    <TextIo><h4>PHYSICAL<br/>THERAPY</h4></TextIo>
                </section>
                <section className="three">
                    <img src="icons/occupational_therapy.png" alt="OCCUPATIONAL THERAPY"/>
                    <TextIo><h4>OCCUPATIONAL<br/>THERAPY</h4></TextIo>
                </section>
                <section className="four">
                    <img src="icons/speech_therapy.png" alt="SPEECH THERAPY"/>
                    <TextIo><h4>SPEECH<br/>THERAPY</h4></TextIo>
                </section>
                <section className="five">
                    <img src="icons/care.png" alt="MEDICAL & SOCIAL CARE"/>
                    <TextIo><h4>MEDICAL &<br/>SOCIAL CARE</h4></TextIo>
                </section>
            </div>
        </section>
    );
};

export default Services;