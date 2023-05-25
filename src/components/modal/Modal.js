import styled from "styled-components";

export const FormTitle = styled.h1`
    color: #E9B206; 
    text-transform: uppercase; 
    text-align: center;
`;

export const FormModal = styled.form`
    display: flex; 
    flex-direction: column;
`;

export const InputText = styled.input`
    border: none; 
    border-bottom: solid #A3A3A3 1px;
    font-size: 16px; 
    padding: 4px; 
    margin-top: 10px;
`;

export const ButtonForm = styled.button`
    margin-top: 60px; 
    margin-right: auto;
    margin-left: auto; 
    transition-duration: 0.5s;
    
    &:hover {
        background: rgba(242, 246, 249, 1); 
        color: #C01870; 
        cursor: pointer;
        transition-duration: 0.5s;
    }
`;
