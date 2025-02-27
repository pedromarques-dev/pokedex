import styled from "styled-components"

export const Input = styled.input`
    width: 500px;
    padding: 6px;
    margin-top: 16px;
    border-radius: 20px;
    border-color: #74CCF4;

    @media(max-width:625px) {
        width: 90%;
    }
`

export const ButtonSearch = styled.button`
    i:hover {
        color: #7c4dff;
    }
`