import React            from 'react';
// import TextIo           from '../../components/TextIo';
const Assessments = () => {

    return(
        <section className="assessments-section">               
            <div className="section-container inverse">
                <h2>What services do we provide?</h2>
                {/* <h5>[ INCLUDE BUT ARE NOT LIMITED TO ]</h5> */}
                <br/>
                <div className="">
                    <div>
                    <ul className="ul-two-col">
                        <li>Licensed Professional Nursing</li>
                        <li>Registered Nursing</li>
                        <li>Physical Therapy</li>
                        <li>Occupational Therapy</li>
                        <li>Certified Home Health Aides</li>
                        <li>Medical Social Work</li>
                        <li>Speciality services, such as infusion</li>
                        <li>Coordinating supplies and specialty medical equipment</li>
                        <li>Laboratory Services</li>
                        <li>Speech Therapy</li>
                        <li>Post Surgical Care</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Assessments;