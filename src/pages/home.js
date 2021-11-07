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
            
            <Tweets/>
        </StyledHome>
    );
}

const StyledHome = styled.div ` 
max-width:1024px;
height: 100%;
padding:50px 30px 50px 40px;
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
@media (max-width:830px) {
    padding: 50px 10px;
}
`
const Wrapper = styled.div `
display: flex;
width:100%;
height: 750px;

@media (max-width:830px) {
    height: 100%;
    flex-direction:column;
}
@media (max-width: 1023px) and (orientation:landscape) {
    max-width:500px;
}

`


export default Home;
