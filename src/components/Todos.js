import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';

const Todos = () => {
    return (
        <Wrapper>
            <h3>My to do's (3)</h3>
            <StyledTodo>
                <TodoCard/>
            </StyledTodo>
        </Wrapper>
    );
}

const Wrapper = styled.div ` 
display: flex;
flex-direction: column;
h3 {
padding-left:10px;     
}
`
const StyledTodo = styled.div ` 
background: #d3d3d3;
max-width: 319px;
padding:10px;
width:100%;
max-height: 700px;
overflow-y: auto;
overflow-x: hidden;
display:flex;
justify-content: center;
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
    background: #a6a6a6;
}

`

export default Todos;
