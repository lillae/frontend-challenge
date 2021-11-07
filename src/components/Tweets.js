import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Tweet from './Tweet';
import styled from 'styled-components';

const Tweets = () => {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        
        async function fetchTweets() {
            const res = await axios.get('./tweets.json');

            if(res) {
                setTweets(res.data.data);
                console.log(tweets);
            }
    
            return res;
        }

        fetchTweets();
        
    }, [])

    return (
        <>
            <h2 className="tweets-heading">Latest Tweets</h2>
            <Wrapper>
            {!!tweets.length && tweets.map(tweet => (
                <Tweet key={tweet.id} text={tweet.text}/>
            ))}
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div `
  background: #f60051ad;  
  max-width:420px;
  height: 500px;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 20px;
  &::-webkit-scrollbar {
    width: 6px;
}

&::-webkit-scrollbar-track {
    background: #c6c6c6; 
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    height: 50%;
    background: #bbaeb0;
}
@media (max-width: 767px) and (orientation:landscape) {
    max-width:500px;
}
@media (min-width:768px) and (orientation:portrait) {
    max-width:620px;
}


`

export default Tweets;
