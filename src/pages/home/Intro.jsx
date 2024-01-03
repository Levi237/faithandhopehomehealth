import React            from 'react';
import TextiO           from '../../components/TextiO';

const HomeInfo = () => {

    return(
        <section className="home-section-info">
            <div className="page-width">
                <div>
                    <h1>Faith & Hope </h1>
                    <h4>HOME HEALTH CARE, INC.</h4>

                    <TextiO>HOME IS WHERE THE HEART IS...</TextiO>

                </div>
                <div>
                    <h4>He who has health has hope And he who has hope has everything</h4>

                    <p>Our team of dedicated professionals will provide quality home health services to promote patient safety and wellbeing.</p>
                </div>
            </div>
        </section>
    );
};

export default HomeInfo;