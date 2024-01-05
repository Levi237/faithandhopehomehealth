
import React            from 'react';

const DiscriminationClause = () => {

    return(
        <div className="page-width" style={{width: '100%', display: 'flex', margin: '80px auto'}}>
                        <section style={{flexGrow: '1'}}>
                
                </section>
            <section style={{maxWidth: '360px', width: '100%'}}>
                <div style={{display: 'flex', gap: '16px'}}>
                    <section>
                <h3>JOINT COMMISSION</h3>
                <h3>INTERNATIONAL</h3>
                <h3>QUALITY APPROVAL</h3>
                </section>
                <section>
                    <img src="JCIQA.png" alt="Joint Commission International Quality Approval"/>
                </section>
                </div>
                <p style={{textAlign: 'justify'}}>
                    Pursuant Title VI of the Civil Right Act of 1964,
                    Section 504 of the Rehabilitation Act of 1973,
                    and the Age Discrimination Act of 1975,
                    Faith & Hope Home Health Care, Inc. does not
                    discriminate ni the employment of staff or provision
                    of service on the basis of race, color, genetics,
                    handicap, age, religious or sexual preferences.
                </p>
            </section>

        </div>

    );
};

export default DiscriminationClause;