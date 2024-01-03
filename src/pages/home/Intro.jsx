import React            from 'react';
import TextIo           from '../../components/TextIo';

const HomeInfo = () => {

    return(
        <section className="home-section-info">
            <div className="page-width">
                <div>
                    <TextIo>
                    <h3>He who has health has hope</h3>
                    </TextIo>
                    <TextIo>
                    <h3>And he who has hope has everything</h3>
                    </TextIo>
                    <br/>
                    <p>Our team of dedicated professionals will provide quality home health services to promote patient safety and wellbeing.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;