import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: ${({MenuActive}) => MenuActive ? "hidden" : "auto"};
`;

export const MainArticle = styled.article`
    max-width: 32.0rem;
    margin: 0 auto;
    padding: 2.4rem .0rem;
    text-align: justify;
`;

export const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({theme}) => theme.colors.background};
    border-top: .4rem solid ${({theme}) => theme.colors.neutral8};
    color: white;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1.6rem;
    text-align: center;
`;