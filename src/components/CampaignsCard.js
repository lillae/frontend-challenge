import React from 'react';
import styled from 'styled-components';
import camp1 from '../img/camp1.svg';
import camp2 from '../img/camp2.svg';
import notification from '../img/notification.svg';
import miniNotification from '../img/miniNotification.svg';
import pinkInsta from '../img/pinkinsta.svg';


const CampaignsCard = () => {
    return (
        <Wrapper>
           <StyledCard>
            <div className="images">
            <img className="picture" src={camp1} alt="nike shoes" />
            <img className="notification" src={notification} alt="notification icon" />
            <div className="mini-icons">
                <img src={miniNotification} alt="notification" />
                <img src={pinkInsta} alt="insta" />
            </div>
            </div>
            <div className="content">
            <div className='details'>
                <div className='active'>
                    <p>Active </p>
                    <span>Closes in 3 days</span>
                </div>
                <h6>9 influencers</h6>
                <p>Nike Sneaker Campaign Summer II</p>
            </div>
            <div className="numbers">
                <p><span>12 567</span><br />reach</p>
                <p><span>1768</span><br />likes</p>
                <p><span>876</span><br />comments</p>
                <p><span>10782</span><br />opens</p>
                <p><span>789</span><br />screens</p>
                <p><span>67%</span><br />completion</p>
            </div>
            </div>
           </StyledCard>
           <StyledCard>
            <div className="images">
                <img src={camp2} alt="Yoga" />
                <div className="mini-icons insta">
                    <img className="instaMini" src={pinkInsta} alt="insta" />
                </div>
                </div>
            <div className="content">
            <div className='details'>
                <div className='active'>
                    <p>Active</p>
                    <span>Closes in 8 days</span>
                </div>
                <h6>11 influencers</h6>
                <p>#DOYOUYOGA Campaign</p>
            </div>
            <div className="numbers">
                <p><span>34 567</span><br />reach</p>
                <p><span>5768</span><br />likes</p>
                <p><span>234</span><br />comments</p>
            </div>
            </div>
       
           </StyledCard>
        </Wrapper>
    );
}

const Wrapper = styled.div ` 
width:100%;

`

const StyledCard = styled.div ` 
max-width: 620px;
width:100%;
background: White;
height: 114px;
margin-bottom:10px;
display: flex;
flex-direction: row;
align-items: center;
box-shadow: 0 2px 4px #d3d3d3;
img {
    max-width:100%;
}
.images {
    width:120px;
    height:100%;
    display:flex;
    position:relative;
    .notification {
        position:absolute;
        right:-10px;
        top:14px;
    }
    .mini-icons {
        background:white;
        width:30px;
        padding:3px;
        position: absolute;
        bottom:10px;
        display: flex;
        justify-content:center;
        & > * {
            margin-right:2px;
        }

    }
    .insta {
        width:15px;
        bottom: 15px;
        .instaMini{
            margin-left:2px;
        }
    }

}
.content {
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    @media (max-width:830px) {
    flex-direction: column;
    align-items:flex-start;
    width: auto;
    & > * {
        margin-bottom:5px;
    }
}
}

.details {
    margin-left: 15px;
    max-width:205px;
}

.active {
    display:flex;
    align-items:center;
    & > * {
        margin-bottom: 5px;
    }
    p {
        text-transform: uppercase;
        font-size: 0.7rem;
        color: var(--lightGrey);
        border: 1px solid var(--lightestGrey);
        font-weight: bold;
        padding: 0px 4px;
        
    }
    span {
        font-size: 0.625rem;
        font-weight:400;
        color: var(--lightGrey);
        padding-left: 5px;

    }
    
}

h6 {
    color: var(--pink);
    font-weight:bold;
    font-size: 0.75rem;
    text-transform:uppercase;
}

p {
    font-size: 1rem;
    color: var(--darkGrey);
    font-weight: 300;
    @media (max-width:830px) {
    font-size: 0.75rem;
}
}
.numbers {
    max-width:100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:10px;
    margin-right:30px;
    p {
        color: var(--lightGrey);
        font-size: 0.5rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align:center;
        span {
            color: var(--pink);
            font-size: 1.125rem;
            @media (max-width:830px) {
                font-size: 0.5rem;
            }
        }
    }
}
@media (max-width:830px) {
    height:100%;
    .numbers {
        margin-left: 5px;
        margin-right:0px;
        
    }
}
`

export default CampaignsCard;