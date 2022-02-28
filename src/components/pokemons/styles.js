import styled from "styled-components"

export const Section = styled.section`
    font-family: 'Pokemon';
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    text-align: center;
    min-height: 100vh;

    > button{
        position: relative;
        left: -25px;
    }

    i {
        color: darkblue;
    }

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Card = styled.div`
    box-shadow: 3px 3px 8px rgba(0,0,0,0.1);
    width:180px;
    padding: 30px;
    margin: 40px;
    text-align: center;
    background-image: linear-gradient(to top,#e1f5fe, #81d4fa,#7c4dff, #651fff);
    cursor: pointer;

    :hover{
        transform: scale(1.1);
    }

    :hover img{
        transform: scale3d(1.3, 1.3, 1.3);
        
    }

    img {
        width: 150px;
        transition: 0.5s ease-in-out;
    }

    h3 {
        margin-top: 20px;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 25px;
    }

    ul {
        display: flex;
        justify-content: space-around;
        font-family: 'Pokemon Alternative';
        text-transform: capitalize;
    }

`

