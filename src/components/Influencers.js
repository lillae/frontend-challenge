import React from 'react';
import styled from 'styled-components';
import inf1 from '../img/inf1.svg'
import inf2 from '../img/inf2.svg'
import inf3 from '../img/inf3.svg'
import inf4 from '../img/inf4.PNG'
import inf5 from '../img/inf5.svg'

const Influencers = () => {
    return (
        <Wrapper>
            <h3>Top Influencers</h3>
            <Card>
                <div>
                    <img src={inf1} alt="influcencer" />
                    <p>Mildred Estrada<br /><span>Engagement rate: 25%</span></p>
                    <button>Add to Favourites</button>
                </div>
                <div>
                    <img src={inf2} alt="influcencer" />
                    <p>Charlotte Morris<br /><span>Engagement rate: 20%</span></p>
                    <button>Add to Favourites</button>
                </div>
                <div>
                    <img src={inf3} alt="influcencer" />
                    <p>Sadie Brooks<br /><span>Engagement rate: 18%</span></p>
                    <button>Add to Favourites</button>
                </div>
                <div>
                    <img src={inf4} alt="influcencer" />
                    <p>Mary Nichols<br /><span>Engagement rate: 18%</span></p>
                    <button>Add to Favourites</button>
                </div>
                <div className="no-border">
                    <img src={inf5} alt="influcencer" />
                    <p>Teresa Austin<br /><span>Engagement rate: 17%</span></p>
                    <button>Add to Favourites</button>
                </div>
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`
width:100%;
`

const Card = styled.div `
max-width:300px;
height: 354px;
max-height: 370px;
background: white;
& > * {
height:70.8px;
border-bottom: 1px solid var(--lightestGrey);
display:flex;
align-items:center;
justify-content:space-around;
padding:10px;
}
.no-border {
    border-bottom: 1px solid transparent;
}
p {
    font-size:0.75rem;
    color: var(--darkGrey);
    span {
        color: var(--lightGrey);
        font-size: 0.625rem;
    }
}
button {
    width:85px;
    height:34px;
    color: var(--pink);
    background: transparent;
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: bold;
    border: 1px solid var(--lightestGrey);
}
`

export default Influencers;