import {createGlobalStyle} from 'styled-components';


const Globalstyles = createGlobalStyle  ` 

:root {
 --bg:  #EAE9EB;
 --pink: #F60051;
 --darkGrey: #484848;
 --lightGrey: #8d8d8d;
 --lightestGrey: #c6c6c6;
 --cardHeader: #f4f4f4;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    width:100%;
    height:100%;
}

body {
    background: var(--bg);
    font-family: 'Lato', sans-serif;
}

h2 {
        font-size: 1.125rem;
        margin: 0px 10px 0px 0px;
        color: var(--darkGrey);
        text-transform: uppercase;
        @media (max-width:830px) {
         font-size:1rem;
    }
        
    }

.tweets-heading {
    @media (max-width:830px) {
         margin-top: 25px;
    }
}

h3 {
    font-weight: 300;
    color: var(--darkGrey);
    font-size: 1rem;
    margin-bottom:10px;
    @media (max-width:830px) {
    margin-top: 25px;
}

}

a {
    text-decoration:none;
}

li {
    list-style-type: none;
}

button {
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
}

`


export default Globalstyles;
