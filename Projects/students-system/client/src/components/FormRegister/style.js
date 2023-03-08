import styled from 'styled-components'

export const Form = styled.form `
    background: ${({theme}) => theme.colors.neutralE};
    border-radius: .8rem;

    padding: 1.2rem;

    section {
        margin-top: 1.6rem;
        position: relative;
    }

    label {
        font-size: 1.2rem;
        line-height: 2.4rem;
        cursor: pointer;
    }
    
    section > input, select {
        width: 100%;  
        padding: .2rem .8rem;
        border: .1rem solid ${({theme}) => theme.colors.neutralB};
    }

    section > input:focus, select:focus {
        width: 100%;  
        padding: .2rem .8rem;
        outline: .1rem solid orange;
        border: .1rem solid orange;
    }

    .error {
        color: red;
        display: block;
        position: absolute;
        font-size: 1.0rem;
        margin-top: .2rem;
    }

    .radioGender div:first-child {
        font-size: 1.2rem;
    }

    .radioGender span {
        margin: 0 1.6rem 0 0;
    }

    .radioGender label {
        margin: 0 0 -0.4rem .4rem;
    }

    button {
        width: 100%;
        margin-top: 3.2rem;
        border: none;
        border-radius: .8rem;
        padding: .4rem;
        font-size: 1.6rem;
        font-weight: 600;
        background: ${({theme}) => theme.colors.neutral4};
        color: white;
    }
    
    button:hover {
        background: ${({theme}) => theme.colors.neutral3};
        
    }
`; 