import styled from "styled-components"

export const ButtonContainer = styled.button`
text-transform:capitaliza;
font-size: 1.4rem;
background:transparent;
border: 0.2rem solid var(--mainDark);
border-color: #F16000;
color: #F16000;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transitions: all 0.5s ease-in-out;
&:hover{
    background:#F16000;
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`