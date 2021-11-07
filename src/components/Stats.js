import React from 'react';
import styled from 'styled-components';
import stats from '../img/stats.PNG';

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
                        <input type="select" />
                    </div>
                <img src={stats} alt="stats" />
                </div>
                <div className="card-buttons">
                    <button><span>123</span> <br /> posts</button>
                    <button><span>5789</span><br />likes</button>
                    <button><span>34567</span><br />snaps</button>
                    <button><span>5789</span><br />opens</button>
                </div>
               
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:100%;
margin-right:44px;
`

const Card = styled.div `
max-width:300px;
height: 370px;
background: white;

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
    padding:0px 20px;
    margin: 0px auto;
}
.dropdown {
    display: flex;
    padding:20px 10px;
    max-width:100%;
    justify-content: space-between;
    input {
        width:50%;
    }
}

img {
    width: 99%;
}
.card-buttons {
    max-width:100%;
    padding:20px;
    display:block;
    button {
        margin: 0px 6px 10px 0px;
        width:124px;
        height:55px;
        background: transparent;
        border: 1px solid var(--lightestGrey);
        border-radius: 5px;
        font-weight:bold;
        color: var(--lightestGrey);
        font-size:0.5rem;
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
        &:hover span {
            color:white;
        }
    }
}

`

export default Stats;
