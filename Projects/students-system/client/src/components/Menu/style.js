import styled from 'styled-components' 

export const MenuContainer = styled.div`
    background: #000C;
    
    padding: 2.4rem;
    width: 100%;
    height: calc(100vh - 10.0rem);

    position: absolute;
    z-index: 1;    

    display: grid;
    place-content: center;

    ul {
        list-style: none;

        display: grid;
        gap: 4.8rem;

        font-size: 1.6rem;
        font-weight: 600;
        text-align: center;
    }
    
    a {
        padding: .2rem;
        border-radius: .4rem;
        color: ${({theme}) => theme.colors.neutralB};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
        border-bottom: 2px solid transparent;
    }

    a:hover {
        border-bottom-color: ${({theme}) => theme.colors.neutralB};
    }

    & .active {
        color: ${({theme}) => theme.colors.neutral1};
    }

    .iconMenuStudentsTable,
    .iconMenuAbout {
        font-size: 1.4rem;
    }
`;