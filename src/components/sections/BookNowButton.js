import styled from "styled-components";
import Media from "../global/Media";

const ButtonWrap = styled.div`
    position: absolute; 
    top: 2rem;
    right: 10.5rem;
    z-index: 1;
    ${Media.md} {
        position: fixed;
        left: 0;
        right: 0;        
        bottom: 0;
        top: auto;
        height: 30px;  
    }
`;

const Button = styled.a`
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    font-family: Roboto,sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: .14286em;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 20ch;
    color: #fff;
    border: solid 2px #f1f1f2;
    z-index: 1;
    ${Media.md} {   
        position: absolute;
        bottom: 0;       
        border: 0;    
        width: 100vw;
        padding: 0.75rem 0;
        background-color: #2a3830;
    }
`;

const BookNowButton = () => (
    <ButtonWrap>
        <Button
            href="#"
            target="_blank"
        >BOOK NOW
        </Button>
    </ButtonWrap>
);

export default BookNowButton;