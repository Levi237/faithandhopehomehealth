import React, { useEffect, useRef } from 'react';
import TextIo           from '../../components/TextIo';
const Info = () => {

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
        <section ref={ref} className=" hide-item item page-width">
            <div>
                <TextIo><h3>CERTIFIED HOME HEALTH AIDE SERVICES INCLUDE:</h3></TextIo>
            <br/>
            <ul>
                <li>Complete personal care</li>
                <li>Exercise and ambulation</li>
                <li>Light house keeping essential to health care at home</li>
                <li>Vital sign assessment</li>
            </ul>
            <div>
                <TextIo><h3>PHYSICAL THERAPY SERVICES INCLUDE:</h3></TextIo>
            <br/>
            </div>
            <ul>
                <li>Develop/improve muscle and joint functions</li>
                <li>Improve/facilitate maximum self-care</li>
                <li>Therapeutic exercise/establish home exercise program</li>
                <li>Assessment of rehabilitation needs</li>
                <li>Teaching/training</li>
                (ex. safety, use of assisted devices, etc.)
            </ul>
            </div>
            <div>
                <TextIo><h3>OCCUPATIONAL THERAPY SERVICES INCLUDE:</h3></TextIo>
            <br/>
            <ul>
                <li>Daily living activities training</li>
                <li>Prescribed specific therapy treatments including fine or gross motor activities</li>
                <li>Adaptive machinery training</li>
                <li>Develop/improve upper body function</li>
            </ul>
            <div>
                <TextIo><h3>SPEECH THERAPY SERVICES INCLUDE:</h3></TextIo>
            <br/>
            </div>
            <ul>
                <li>Effective communication therapy</li>
                <li>Assessment of safe swallowing and speech</li>
                <li>Language, speech disorder treatment</li>
                <li>Alternative voice/articulation therapy</li>
                <li>Speech rehabilitation</li>
            </ul>
            <div>
                <TextIo><h3>MEDICAL AND SOCIAL SERVICES INCLUDE:</h3></TextIo>
            </div>
            <br/>
            <ul>
                <li>Assessment of psychosocial status</li>
                <li>Referrals to community resources</li>
                <li>Identify personal and emotional impacts</li>
                <li>Integration of financial assistance</li>
                <li>Identify level of support by family/caregiver</li>     
            </ul>

</div>
<div>
                <div>
                    <h3>FAITH & HOPE HOME HEALTH CARE, INC.</h3>
                    <br/>
                <p>
                    Is known for dedicated and quality care within the home. 
                    Nurses collaborate with patients, families, physicians, 
                    and other members of the healthcare team to meet the physical, 
                    emotional, and clinical needs of each individual.
                </p>

            <h3>DURABLE MEDICAL EQUIPMENT.</h3>

</div>
<h3>LABORATORY SERVICES</h3>
            <br/>
            <p>
                We will facilitate arrangements to be
                made with the medical equipment
                provider, Laboratory services will be
                arranged and facilitated as ordered by
                the physician. Medications prescribed
                by the physician will be followed-up
                with the pharmacy.
            </p>
            <h3>HOW TO ACCESS OUR SERVICES:</h3>
            <br/>
            <p>
                Individuals who meet the homebound criteria
                may be referred for home health services.
                Referral may include: Physicians, local
                hospitals, board and care centers, skilled
                nursing homes.
            </p>
            <p>
                Within 24-48 hours, or as directed by physicians,
                a Faith & Hope Home Health. Inc.
                representative will contact and visit the patient
                for admission and start of services.
            </p>

            </div>
        </section>
    );
};

export default Info;