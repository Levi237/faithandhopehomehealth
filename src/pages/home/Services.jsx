import React            from 'react';
import { Link }         from 'react-router-dom';
import TextIo           from '../../components/TextIo';
import * as routes      from '../../constants/routes';

const Services = ({scrollToTop}) => {

    return(
        <section className="services-section page-width">               
            <div className="grid five-col">
                <section className="one">
                    <img src="icons/home_aid.png" alt="HOME HEALTH AIDE"/>
                    <img className="desktop-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                    <TextIo><h4>HOME HEALTH<br/>AIDE</h4></TextIo>
                    <img className="mobile-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                </section>
                <section className="two">
                    <img src="icons/physical_therapy.png" alt="PHYSICAL THERAPY"/>
                    <img className="desktop-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                    <TextIo><h4>PHYSICAL<br/>THERAPY</h4></TextIo>
                    <img className="mobile-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                </section>
                <section className="three">
                    <img src="icons/occupational_therapy.png" alt="OCCUPATIONAL THERAPY"/>
                    <img className="desktop-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                    <TextIo><h4>OCCUPATIONAL<br/>THERAPY</h4></TextIo>
                    <img className="mobile-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                </section>
                <section className="four">
                    <img src="icons/speech_therapy.png" alt="SPEECH THERAPY"/>
                    <img className="desktop-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                    <TextIo><h4>SPEECH<br/>THERAPY</h4></TextIo>
                    <img className="mobile-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                </section>
                <section className="five">
                    <img src="icons/care.png" alt="MEDICAL & SOCIAL CARE"/>
                    <img className="desktop-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                    <TextIo><h4>MEDICAL &<br/>SOCIAL CARE</h4></TextIo>
                    <img className="mobile-only" width="auto" src="swoosh_line_underline.png" alt="wavy-line-break"/> 
                </section>
            </div>
            <div className="button-box">
                <Link className="button" to={routes.SERV} onClick={() => {scrollToTop()}}>Services We Provide</Link>
            </div>
        </section>
    );
};

export default Services;