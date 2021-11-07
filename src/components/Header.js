import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import mail from '../img/mail.png';
import arrow from '../img/arrow-down-sign-to-navigate.png';
import blackCircle from '../img/blackIcon.svg';
import { GoThreeBars } from "react-icons/go";


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
                    <img className="circle" src={blackCircle} alt="black circle icon" />
                    <button>My Profile <img src={arrow} alt="arrow down" /></button>
                </div>
                <GoThreeBars className='icon' />
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
box-shadow: 0 2px 4px #d3d3d3;
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width:1024px;
    width:100%;
    margin:0px auto;
    padding: 0px 30px 0px 40px;
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
    position:relative;
    img {
        cursor:pointer;
    }
    .mail {
        padding-right:10px;
    }
   
    & img:nth-of-type(2) {
    padding-right:5px;
    }
    &:after {
            content: "2";
            position: absolute;
            width:12px;
            height:12px;
            color: var(--pink);
            background-color: white;
            border: 1px solid var(--lightestGrey);
            border-radius: 50%;
            top:15px;
            right:120px;
            font-size:0.6rem;
            text-align:center;
            font-family:'Lato', sans-serif;
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

.icon {
    cursor:pointer;
    display:none;
}
@media (max-width:767px) {
    nav {
        padding:10px;
        
    }
    .links {
        padding-left:0;
    }
    li {
        padding: 0px 5px;
    }
    a {
        font-size: 0.5rem;
    }
    .mail, .circle, .profile:after {
        display:none;
    }

 

    button {
        font-size: 0.6rem;
        margin-top:5px;
    }
    img {
        width:20%;
    }
    
}
@media (min-width:768px) and (orientation:portrait) {
    .links {
        padding:0;
    }
}
`

export default Header;
