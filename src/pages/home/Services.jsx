import React, { useEffect, useRef } from 'react';

const Services = () => {

    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.remove('hide-item');
                    observer.disconnect();
                }, 300)
            };
        });
        observer.observe(ref.current);
    }, []);

    return(
        <section ref={ref} className="services-section page-width">               
            <div className="grid five-col">
                <section className="one">
                    <img src="icons/home_aid.png" alt="HOME HEALTH AIDE"/>
                    <h4>HOME HEALTH AIDE</h4>
                </section>
                <section className="two">
                    <img src="icons/physical_therapy.png" alt="PHYSICAL THERAPY"/>
                    <h4>PHYSICAL THERAPY</h4>
                </section>
                <section className="three">
                    <img src="icons/occupational_therapy.png" alt="OCCUPATIONAL THERAPY"/>
                    <h4>OCCUPATIONAL THERAPY</h4>
                </section>
                <section className="four">
                    <img src="icons/speech_therapy.png" alt="SPEECH THERAPY"/>
                    <h4>SPEECH THERAPY</h4>
                </section>
                <section className="five">
                    <img src="icons/care.png" alt="MEDICAL & SOCIAL CARE"/>
                    <h4>MEDICAL & SOCIAL CARE</h4>
                </section>
            </div>
        </section>
    );
};

export default Services;