import React from 'react';
import styled from 'styled-components';

const Stats = () => {
    return (
        <Wrapper>
            <h3>Statistics overview</h3>
            <Card>

            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:100%;
margin-right:50px;
`

const Card = styled.div `
max-width:300px;
height: 100%;
background: white;
`

export default Stats;
