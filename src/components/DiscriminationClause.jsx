
import React            from 'react';
import styled from 'styled-components';

const DiscriminationClause = () => {

    return(
        <Wrapper className="jciqa-container" style={{}}>
            <div>
                <section className="title">
                    <h3>JOINT COMMISSION</h3>
                    <h3>INTERNATIONAL</h3>
                    <h3>QUALITY APPROVAL</h3>
                </section>
                <section>
                    <img src="JCIQA.png" alt="Joint Commission International Quality Approval"/>
                </section>
            </div>
        </Wrapper>

    );
};

const Wrapper = styled.div`
`;

export default DiscriminationClause;