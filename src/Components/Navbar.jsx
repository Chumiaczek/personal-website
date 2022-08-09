import { FaBars } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
    color: white !important;
    z-index: ${({ isOpen }) => (isOpen ? "0" : "100")};
`;
const Wrapper = styled.div`
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    @media screen and (max-width: 768px){
        padding: 0px 25px;
    }
    @media screen and (max-width: 1250px){
        padding: 0px 25px;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Logo = styled.h1`
    font-weight: 600;
    font-size: 40px;
    @media screen and (max-width: 850px){
        font-size: 30px;
    }
`;
const Right = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 1250px){
        flex: 2;
    }
    
    @media screen and (max-width: 850px){
        display: none;
    }
`;
const Mobile = styled.div`
    flex: 1;
    display: none;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 850px){
        display: flex;
    }
`
const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    text-transform: uppercase;
    font-weight: 400;
    transition: 0.2s all ease-in-out;

    &:hover{
        color: lightskyblue;
    }
`;

const Navbar = ({ isOpen, toggle }) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Chumi</Logo>
                </Left>
                <Right>
                    <MenuItem>Strona Główna</MenuItem>
                    <MenuItem>Oferta</MenuItem>
                    <MenuItem>Projekty</MenuItem>
                    <MenuItem>Kontakt</MenuItem>
                </Right>
                <Mobile>
                    <FaBars fontSize="24px" cursor="pointer" z-index="999" onClick={toggle} />
                </Mobile>
            </Wrapper>
        </Container >
    );
};

export default Navbar;
