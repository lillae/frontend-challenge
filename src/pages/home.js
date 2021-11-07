import React from 'react';
import styled from 'styled-components';
import Todos from '../components/Todos';
import Campaigns from '../components/Campaigns';
import Tweets from '../components/Tweets';


const Home = () => {
    return (
        <StyledHome>
            <div className="main-title">
                <h2>My Dashboard</h2>
                <button>Create a New campaign</button>
            </div>
            <Wrapper>
                <Campaigns />
                <Todos/>
            </Wrapper>
            <h2>Latest Tweets</h2>
            <Tweets/>
        </StyledHome>
    );
}

const StyledHome = styled.div ` 
max-width:1024px;
height: 100%;
padding:50px 20px;
margin:0px auto;

.main-title {
    display:flex;
    align-items: center;
    margin-bottom: 22px;
    
    button {
        color: white;
        background: var(--pink);
        border: 1px solid #E6004C;
        font-size: 0.813rem;
        font-weight: bold;
        width: 185px;
        height: 34px;
        border-radius: 2px;
        
    }
}
`
const Wrapper = styled.div `
display: flex;
width:100%;
height: 812px;
`


export default Home;
