import React from 'react';
import styled from 'styled-components';
import girl1 from '../img/girl1.PNG';
import girl2 from '../img/girl2.PNG';
import girl3 from '../img/girl3.PNG';

const Todocard = () => {
    return (
    <Wrapper>
        <StyledCard>
            <div className="card-header">
                <p><span>Ellaria Dorne</span> uploaded instagram contet for proof to your campign 'Nike Sneaker Campaign II'</p>
            </div>
            <div className="card-content">
                <img src={girl1} alt="girl" />
                 <div className="text-content">
                     <small>02.07.1016</small>
                     <p><span>Who sasy you can't be elegant in sneakers?! :)</span> #nike #sneakers #morningoutfit #liveyourlife #fashion #dailyfashion #fashionista</p>
                 </div>
            </div>
            <div className="card-footer">
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </StyledCard>
        <StyledCard>
            <div className="card-header">
                
                <p><span>Amy Champeon</span> just applied to your open campaign 'Tennis clothing for men'</p>
            </div>
            <div className="content-two">
                <img src={girl2} alt="girl" />
                <div className="text-content">
                     <p>Amy Champeon</p>
                     <div className="followers">
                        <div>
                            <p><span>34 567</span> <br /> instagram <br /> followers</p>
                        </div>
                        <div>
                            <p><span>3567</span> <br /> snapchat <br /> followers</p>
                        </div>
                     </div>
                 </div>
            </div>
            <div className="card-footer">
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </StyledCard>
        <StyledCard>
            <div className="card-header">
            <p><span>Mike Jones</span> published content to instagram for campign '#DOUYOUYOGA'</p>
            </div>
            <div className="card-content">
                <img src={girl3} alt="girl" />
                 <div className="text-content">
                     <small>02.07.1016</small>
                     <p><span>My new yoga pants from Nike has arrived, I adore it!</span> #nike #yoga #sun  #namaste #liveyourlife #fashion #dailyfashion #sport #sporty #nature</p>
                 </div>
            </div>
            <div className="card-footer">
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </StyledCard>
        </Wrapper>
    );
}
const Wrapper = styled.div `
display: flex;
flex-direction: column;
`
const StyledCard = styled.div `
max-width: 293px;
height:100%;   
color: var(--darkGrey);
padding: 0px 0px 10px;
.card-header {
    font-size:0.75rem;
    font-weight: 400px;
    padding: 16px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: var(--cardHeader);
    span {
        color:var(--pink);
    }
}
.card-content {
    background: white;
    padding: 5px;
    display:flex;
    border-bottom:1px solid #D8D8D8;

    small {
        font-size: 0.563rem;
        color: var(--lightestGrey)
    }
    p {
        font-size: 0.625rem;
        color: var(--lightestGrey)
       
    }
    span {
            color: var(--darkGrey);
        }
    .text-content {
        padding:0 10px;
        margin: 0px auto;
    }
}

.content-two {
   display:flex;
   background: white;
   padding: 10px;
   border-bottom:1px solid #D8D8D8;
   img {
       margin-right: 15px;
   }
   .text-content {
       margin-left:10px;
    p{
        font-size: 0.75rem;
    }
   }
    .followers {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        p{
            font-size: 0.5rem;
            text-transform: uppercase;
            font-weight: bold;
            color: var(--lightestGrey);
            line-height:1.5;
        span {
            font-size: 0.875rem;
            color: var(--pink);
        }
        }
        & > * {
            margin: 10px 15px 0px 0px;
        }
        
    }
}
.card-footer {
    height:56px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
}
button {
        color: var(--pink);
        text-transform: uppercase;
        font-size: 0.625rem;
        font-weight: bold;
        width: 116px;
        height:34px;
        border: 1.5px solid #d9d9d9;
        border-radius: 2px;
        background: transparent;
        margin: 0px 10px;
    }  
`


export default Todocard;
