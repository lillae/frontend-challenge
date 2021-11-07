import React from 'react';
import styled from 'styled-components';


const Tweet = ({text}) => {
    return (
             <Card>
                <p>{text}</p> 
            </Card>
        
    );
}



const Card = styled.div ` 
max-width:400px;
width:100%;
height:fit-content;
background: white;
margin: 0px auto 5px;
padding: 20px;
border-radius: 5px;

p {
    color:var(--lightGrey);
    font-size: 0.75rem;
}

`
export default Tweet;
