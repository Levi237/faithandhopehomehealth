import React, { useEffect, useRef } from 'react';

const About = () => {

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
            SKILLED NURSING ASSESSMENTS
INCLUDE BUT ARE NOT LIMITED TO:
* Education on disease processes
&Medication supervision
• Diabetic management
* Wound care
* Nutrition education
* Pain management
* Safety education and monitoring
* Incontinence care
* Respiratory treatment
« I.V. treatments
* Patient &family health education/counseling
* Pre-op and post-op care
* Lab work monitoring
CERTIFIED HOME HEALTH AIDE
SERVICES INCLUDE:
* Complete personal care
&• Exercise and ambulation
* Light house keeping essential to
health care at home
&Vital sign assessment
PHISICAL THERAPY SERVICES
INCLUDE:
* Develop/improve muscle and joint functions
* Improve/facilitate maximum self-care
• Therapeutic exercise/establish home
exercise program
Assessment of rehabilitation needs
& Teaching/training
(ex. safety, use of assisted devices, etc.)
OCCUPATIONAL THERAPY SERVICES
INCLUDE:
•Daily living activities training
•Prescribed specific therapy treatments
including fine or gross motor activities
•Adaptive machinery training
• Develop/improve upper body function
SPEECH THERAPY SERVICES INCLUDE:
•Effective communication therapy
•Assessment of safe swallowing and speech
• Language, speech disorder treatment
•Alternative voice/articulation t h e r a p y
•Speech rehabilitation
MEDICALANDSOCIALSERVICES
INCLUDE:
•Assessment of psychosocial status
• Referralst ocommunityresources
•Identify personal and emotional impacts
• Integration of financial assistance
•Identify level of support by family/caregiver        



</section>
    );
};

export default About;