import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const Container = styled.aside`
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: black;
    display: none;
    left: 0;
    transition: all 0.2s ease;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    color: white;
    padding: ${({ isOpen }) => (isOpen ? "100px 0 0 0" : "0")};
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 850px){
        display: flex;
    }
`
const CloseIcon = styled(FaTimes)`
    color: white;
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
const LogoWrapper = styled.h1`
    margin-bottom: 40px;
`
const Logo = styled.h1`
    font-weight: 600;
    font-size: 60px;
    text-align: center;
`;
const MenuItems = styled.div`
display: flex;
flex-direction: column;
width: 50%;
align-items: center;
`
const MenuItem = styled.span`
margin-bottom: 40px;
font-size: 24px;
font-weight: 400;

    &:hover{
    color: lightskyblue;
}
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <LogoWrapper>
                <Logo>Chumi</Logo>
            </LogoWrapper>
            <MenuItems>
                <MenuItem onClick={toggle}>Strona Główna</MenuItem>
                <MenuItem onClick={toggle}>Oferta</MenuItem>
                <MenuItem onClick={toggle}>Projekty</MenuItem>
                <MenuItem onClick={toggle}>Kontakt</MenuItem>
            </MenuItems>
        </Container>
    )
}

export default Sidebar