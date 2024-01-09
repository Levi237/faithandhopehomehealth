import React            from 'react';
import TextIo           from '../../components/TextIo';

const HomeInfo = () => {

    return(
        <section className="home-section-info">
            <div className="page-width">
                <div>
                    <TextIo>
                        <h3>Who are we?</h3>
                    </TextIo>
                    <br/>
                    <p>
                        We are a medicare certified, Joint Commission 
                        accredited medical home health care agency 
                        serving Los Angeles, Orange County, Riverside, 
                        Ventura, and parts of San Bernardino Counties.
                    </p>
                </div>
            </div>
            <div className="page-width">
                <div>
                    <TextIo>
                        <h3>Why do we stand out?</h3>
                    </TextIo>
                    <br/>
                    <p>
                        We are owned and managed by a licensed clinician 
                        with over 50 years of experience in patient care.
                    </p>
                </div>
            </div>
            <div className="page-width">
                <div>
                    <TextIo>
                        <h3>Who do we serve?</h3>
                    </TextIo>
                    <br/>
                    <p>
                        Medicare patients who need ongoing assistance 
                        to manage their health care needs at home and 
                        are referred for home health services by physicians, 
                        local hospitals, board and care centers, and 
                        skilled nursing homes.
                    </p>
                </div>
            </div>
            <div className="page-width">
                <div>
                    <TextIo>
                        <h3>What do we do?</h3>
                    </TextIo>
                    <br/>
                    <p>
                        We provide clinical home care under the supervision 
                        of a Registered Nurse.
                    </p>
                </div>
            </div>
            <div className="page-width">
                <div>
                    <TextIo>
                        <h3>When do we start services?</h3>
                    </TextIo>
                    <br/>
                    <p>
                        We contact the patient and send RNs to open the case 
                        within 24-48 hours of receiving the home health order.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;