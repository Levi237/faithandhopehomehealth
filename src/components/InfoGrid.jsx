import React, { useEffect, useRef } from 'react';
import TextIo           from './TextIo';
const InfoGrid = ({info}) => {

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

    const mapInfo = info.map((i, k) => {
        return (     
            <div className="box-info">
            <section>
                <img className="icon" src={`icons/${i.img}`} alt="MEDICAL AND SOCIAL SERVICES"/>
            </section>               
            <section className={`section_${k}`}>
                <TextIo><h3>{i.title}</h3></TextIo>
                <p>{i.body}</p>
            </section>
            </div>
        );
    });


    return(
        <section className="page-width">
            <div className="top-image">
                    <img className="mobile-only" src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg"  alt="Nurse assisting elderly woman standing up from couch to get to her walker." />
                </div>
            <div className="info-grid-section">
            <div ref={ref} className="box-image  ref hide-item see-item">
                    <img src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg" alt="At home care, nurse with elderly woman in wheelchair"/>
                </div>
                {mapInfo}
            </div>
        </section>
    );
};

export default InfoGrid;