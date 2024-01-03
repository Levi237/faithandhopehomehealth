import React from 'react';

const Footer = () => {
    return(
        <footer>
            <div className="grid three-col">
            <section className="left">
                <div>
                    <b>Hours of Operation</b>
                    <br/>
                    9:00am-5:00pm
                </div>
                <div>
                    <b>Available on-Call:</b>
                    <br/>
                    24hours a day/7days a week
                </div>
                <div>
                    Tel: 818.290.3768 Fax: 818.616.3078
                </div>
                <div>
                    5435 Balboa BIvd.
                    <br/>
                    Suite 110 Encino,
                    <br/>CA 91316 
                </div>
                <div>
                    E-mail: fhhhealth@gmail.com
                </div>
                </section>
                <section className="mid"></section>
                <section className="right">
                    <div>
                        <h3>JOINT COMMISSION INTERNATIONAL</h3>
                        <h3>QUALITY APPROVAL</h3>
                        <p>
                            Pursuant Title VI of the Civil Right Act of 1964,
                            Section 504 of the Rehabilitation Act of 1973,
                            and the Age Discrimination Act of 1975,
                            Faith & Hope Home Health Care, Inc. does not
                            discriminate ni the employment of staff or provision
                            of service on the basis of race, color, genetics,
                            handicap, age, religious or sexual preferences.
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    );
};
export default Footer;