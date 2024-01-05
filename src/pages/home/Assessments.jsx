import React            from 'react';
import TextIo           from '../../components/TextIo';
const Assessments = () => {

    return(
        <section className="assessments-section">               
            <div className="section-container inverse">
                <h2>SKILLED NURSING ASSESSMENTS:</h2>
                <h5>[ INCLUDE BUT ARE NOT LIMITED TO ]</h5>
                <br/>
                <div className="">
                    <div className="grid two-col mobile-one-col">
                    <ul>
                        <li>Education on disease processes</li>
                        <li>Medication supervision</li>
                        <li>Diabetic management</li>
                        <li>Wound care</li>
                        <li>Nutrition education</li>
                        <li>Pain management</li>
                        <li>Safety education and monitoring</li>
                    </ul>
                    <ul>
                        <li>Incontinence care</li>
                        <li>Respiratory treatment</li>
                        <li>I.V. treatments</li>
                        <li>Patient & family health education/counseling</li>
                        <li>Pre-op and post-op care</li>
                        <li>Lab work monitoring</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assessments;