import React from 'react';
import styled from 'styled-components';
import Todos from '../components/Todos';
import Campaigns from '../components/Campaigns';


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

        </StyledHome>
    );
}

const StyledHome = styled.div ` 
max-width:1020px;
height: 100vh;
padding:50px 20px;
margin:0px auto;

.main-title {
    display:flex;
    align-items: center;
    margin-bottom: 22px;
    h2 {
        font-size: 1.125rem;
        margin: 0px 10px 0px 0px;
        color: var(--darkGrey);
    }
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
    & > * {
        text-transform: uppercase;
    }
    
}
`
const Wrapper = styled.div `
display: flex;
width:100%;
`


export default Home;
