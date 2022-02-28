import styled from "styled-components";

export const BoxButton = styled.div`
    text-align: center;
    width: 100%;
    border-style:none;
    background: none;
    padding: 10px;

    button {
        width: 200px;
        font-family: 'Arial';
        padding: 16px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        color: white;
    }

    button:hover {
        transform: scale3d(1.1, 1.1, 1.3);
    }

`