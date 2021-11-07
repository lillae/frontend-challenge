import React from 'react';
import styled from 'styled-components';
import stats from '../img/stats.PNG';
import downArrow from '../img/down-arrow.png';
import instaGrey from '../img/insta_grey.svg';

const Stats = () => {
    return (
        <Wrapper>
            <h3>Statistics overview</h3>
            <Card>
                <div className="card-header">
                    <p className="hover">Weekly</p>
                    <p>Monthly</p>
                </div>
                <div className="card-content">
                    <div className="dropdown">
                        <p>Choose Campaign:</p>
                        <button type="button">All<img src={downArrow} alt="down arrow" /></button>
                    </div>
                    <img src={stats} alt="stats" />
                    <div className="card-buttons">
                        <div className="buttons">
                            <span>123</span> 
                              <div className="posts">
                                <img src={instaGrey} alt="instagram icon" />
                                <p>posts</p>
                               </div>
                        </div>
                        <div className="buttons">
                            <span>5 789</span> 
                              <div className="posts">
                                <img src={instaGrey} alt="instagram icon" />
                                <p>likes</p>
                               </div>
                        </div>
                        <div className="buttons">
                            <span>34 567</span> 
                              <div className="posts">
                                <img src={instaGrey} alt="instagram icon" />
                                <p>snaps</p>
                               </div>
                        </div>
                        <div className="buttons">
                            <span>5 789</span> 
                              <div className="posts">
                                <img src={instaGrey} alt="instagram icon" />
                                <p>opens</p>
                               </div>
                        </div>
                        {/* <button><span>5789</span><br /><img src={instaGrey} alt="instagram icon" />likes</button>
                        <button><span>34567</span><br /><img src={instaGrey} alt="instagram icon" />snaps</button>
                        <button><span>5789</span><br /><img src={instaGrey} alt="instagram icon" />opens</button> */}
                    </div>
                </div>
             
               
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:100%;
margin-right:15px;
`

const Card = styled.div `
max-width:300px;
height: 370px;
background: white;
box-shadow: 0 2px 4px #d3d3d3;

.card-header {
    height: 40px;
    border-bottom: 1px solid #d8d8d8;
    display:flex;
    align-items:center;
    width:100%;
    justify-content:space-between;
    padding:0px 60px;
}
p {
    font-size: 0.75rem;
    color: var(--darkGrey);
    font-weight: 400;
    cursor:pointer;
    position:relative;
    }
    p.hover {
        &:after {
        content: "";
        position:absolute;
        width:55px;
        height: 3.5px;
        background: var(--pink);
        left: -5px;
        top:26px;
        opacity: 1;
    }
   

}
.card-content {
    padding:0px 10px;
    margin: 0px auto;
    display:flex;
    flex-direction:column;
    align-items: center;
}
.dropdown {
    display: flex;
    padding:20px 0px;
    max-width:100%;
    justify-content: space-between;
    align-items: center;
    p {
        margin-right:10px;
    }
    button {
        width: 165px;
        height:30px;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid var(--lightestGrey);
        padding: 0px 5px;
        font-size:12px;
        color: var(--darkGrey);
        text-transform: capitalize;
        img {
            width:10px;
        }
    }
}

img {
    width: 99%;
}
.card-buttons {
    max-width:100%;
    padding:0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top:5px;
    
    .buttons {
        margin: 0px 6px 10px 0px;
        width:124px;
        height:55px;
        background: transparent;
        border: 1px solid var(--lightestGrey);
        border-radius: 5px;
        font-weight:bold;
        font-size:0.5rem;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        p {
            color: var(--lightestGrey);
        }
        span {
            color:var(--pink);
            font-size:1.125rem;
        }
        &:hover {
            background: var(--pink);
            color:white;
            border: 1px solid transparent;
            transition: color 100ms ease;
        }
        &:hover p {
            color:white;
        }
        &:hover span {
            color:white;
        }
       
        img {
            max-width:10px;
            padding-top:3px;
            margin-right:2px;
        }
        .posts {
            display:flex;
        }
    }
}
@media (max-width:830px) {
    max-width:100%;
    height:100%;
}

`

export default Stats;
