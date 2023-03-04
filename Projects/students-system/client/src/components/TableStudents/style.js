import styled from "styled-components";

export const Container = styled.div `
    .inputSection {
        position: relative;
    }

    .labelInputSearch {
        position: absolute;
        bottom: .4rem;
        left: .8rem;
        pointer-events: none;
        transition: 400ms;
        padding: 0 .4rem;
        color: ${({theme}) => theme.colors.neutralA};
    }

    .srOnly {
        position: absolute;
        width: 0.1rem;
        height: 0.1rem;
        overflow: hidden;
        color: transparent;
    }
    
    #inputSearchStudent {
        margin-top: 1.6rem;
        width: 100%;
        border: none;
        background: none;
        border-bottom: .2rem solid ${({theme}) => theme.colors.neutral8};
        padding: .4rem 1.2rem;
        border-radius: .4rem;
    }
    
    #inputSearchStudent:focus + .labelInputSearch,
    #inputSearchStudent:valid + .labelInputSearch {
        bottom: 2.6rem;
        font-size: 1.2rem;
        background: white;
        color: ${({theme}) => theme.colors.neutral6};
    }

    .searchIcon {
        position: absolute;
        bottom: 1.0rem;
        right: 1.6rem;
        font-size: 1.4rem;
        color: ${({theme}) => theme.colors.neutral8};
    }

    .tableStudents {
        margin-top: 1.6rem;
    }
`;