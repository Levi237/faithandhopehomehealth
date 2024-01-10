import React            from 'react';
// import TextIo           from '../../components/TextIo';
const ServicesList = () => {

    return(
        <section className="services-list-section">               
            <div className="section-container">
                <h2>What services do we provide?</h2>
                {/* <h5>[ INCLUDE BUT ARE NOT LIMITED TO ]</h5> */}
                <br/>
                <div className="">
                    <div className="grid two-col mobile-one-col jciqa">
                        <div>
                            <ul className="ul-two-colHIDE">
                                <li>Registered Nursing</li>
                                <li>Licensed Professional Nursing</li>
                                <li>Physical Therapy</li>
                                <li>Speech Therapy</li>
                                <li>Occupational Therapy</li>
                                <li>Certified Home Health Aides</li>
                                <li>Medical Social Work</li>
                                <li>Speciality services, such as infusion</li>
                                <li>Post Surgical Care</li>
                                <li>Coordinating supplies & </li>
                                specialty medical equipment
                                <li>Laboratory Services</li>
                            </ul>
                        </div>
                        <div>


                        <div>

            <section style={{}}>
                <div>
                <div className="container" style={{maxWidth: '300px', display: 'flex'}}>
                    <section className="title">
                        <h3><small>JOINT COMMISSION</small></h3>
                        <h3><small>INTERNATIONAL</small></h3>
                        <h3><small>QUALITY APPROVAL</small></h3>
                    </section>
                    <section>
                        <img src="JCIQA.png" alt="Joint Commission International Quality Approval"/>
                    </section>
                </div>
                {/* <p style={{textAlign: 'justify', lineHeight: '150%',maxWidth: '300px'}}>
                    <small>
                    Pursuant Title VI of the Civil Right Act of 1964,
                    Section 504 of the Rehabilitation Act of 1973,
                    and the Age Discrimination Act of 1975,
                    Faith & Hope Home Health Care, Inc. does not
                    discriminate ni the employment of staff or provision
                    of service on the basis of race, color, genetics,
                    handicap, age, religious or sexual preferences.
                    </small>
                </p> */}
                </div>
            </section>

        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesList;