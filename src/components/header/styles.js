import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    img {
        width: 300px;
        margin: 0 20px;
    }


    @media(max-width:625px) {
        flex-direction: column;
        padding: 20px 0;
        text-align: center;

        img {
            width: 80%;
            margin: 0;
            padding: 10px 0;

        }
    }
    
`
