import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import mail from '../img/mail.png';
import arrow from '../img/arrow-down-sign-to-navigate.png';
import blackCircle from '../img/blackIcon.svg';

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <div className="logo">
                    <h1><Link to = '/'>StyleLike</Link></h1>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to = '/'>Campaigns</Link></li>
                        <li><Link to = '/'>Influencers</Link></li>
                        <li><Link to = '/'>Statistics</Link></li>
                        
                    </ul>
                </div>
                <div className = "profile">
                    <img className="mail" src={mail} alt="mail icon" />
                    <img src={blackCircle} alt="black circle icon" />
                    <button>My Profile <img src={arrow} alt="arrow down" /></button>
                </div>
            </nav>
        </StyledHeader>
    );
}

const StyledHeader = styled.div `
height: 59px;
max-width: 100%;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
background:white;

box-shadow: 0 2px 4px rgba(100, 100, 100, 0.5);
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1020px;
    width:100%;
    margin:0px auto;
    padding: 0px 20px;
}

.logo {
    h1 {
    
    a {
    font-size: 1.375rem;
    color: #1F1f1F;
    text-transform: capitalize;
    font-weight: 400;
    }
}
}

ul {
    display: flex;
    width:100%;
}
li {
    padding: 0px 20px;
}

a {
    font-size: 0.938rem;
    color: var(--darkGrey);
    text-transform: uppercase;
}
.links {
    padding-left:100px;
}
.profile {
    display: flex;
    align-items: center;
    img {
        cursor:pointer;
    }
    .mail {
        padding-right:10px;
    }
    & img:nth-of-type(2) {
    padding-right:5px;
    }
}



button {
    font-size: 0.875rem;
    text-transform: capitalize;
    border:none;
    background: transparent;
    font-family: 'Lato', sans-serif;
    color: var(--darkGrey);
    img {
        padding:0px 0px 0px 5px;
       
    }
}
`

export default Header;
