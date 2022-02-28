import styled from "styled-components"

export const Section = styled.section`
    font-family: 'Pokemon';
    display: flex;
    width: 100%;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    background-repeat: no-repeat;
    background-size: cover;


`

export const Container = styled.div`
    width: 80%;
    border: 1px dotted black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    padding: 30px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    
`

export const CardPhoto = styled.div`
    width: 50%;
    text-align: center;

    div {
        font-family: 'Pokemon';
    }

    img {
        position: relative;
        top: -20px;
        width: 350px;
    }

    h2{
        font-size: 3rem;
        margin-bottom: 30px;
        text-transform: capitalize;
    }
`

export const CardDetails = styled.div`
    width: 50%;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;

    img {
        width:400px;
        padding: 50px;
    }

    h3 {
        font-size: 30px;
    }

    h4 {
        font-size: 25px;
    }

    p, li{
        font-size: 15px;
        text-transform: uppercase;
        padding: 5px 0;
        font-weight: 600;
    }

`