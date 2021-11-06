import React from 'react';
import styled from 'styled-components';
import CampaignsCard from './CampaignsCard';
import Stats from './Stats';
import Influencers from './Influencers';

const Campaigns = () => {
    return (
        <Wrapper>
            <h3>Ongoing Campaigns</h3>
            <StyledCampaign>
                <CampaignsCard/>
            </StyledCampaign>
            <Container>
                <Stats/>
                <Influencers/>
            </Container>
            
        </Wrapper>
    );
}

const Wrapper = styled.div ` 
display: flex;
flex-direction: column;
margin-right: 20px;
width:100%;

`

const StyledCampaign = styled.div `
margin: 0px 0px 20px;
`

const Container = styled.div `
display:flex;
width:100%;
`


export default Campaigns;