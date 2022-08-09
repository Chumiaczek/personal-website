import React from 'react'
import styled from 'styled-components'
import image from '../Assets/experience-design.svg'

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
`
const Wrapper = styled.div`
    padding: 100px 70px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
    @media screen and (max-width: 1000px) {
        padding: 50px 20px;
    }
`
const Left = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const LeftWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 60px;
    width: 90%;
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Introduction = styled.h1`
    font-size: 3vw;
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
    @media screen and (max-width: 1000px) {
        font-size: 7vw;
        text-align: center;
    }
`
const Image = styled.img`
    width: 100%;
    height: auto;
    @media screen and (max-width: 1000px) {
        width: 50vw;
    }
`
const Description = styled.p`
    text-align: left;
    width: 100%;
    font-size: 1vw;
    color: #81AFDD;
    @media screen and (max-width: 1000px) {
        font-size: 3vw;
        text-align: center;
    }
`
const ButtonWrapper = styled.div`
    @media screen and (max-width: 1000px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
const Button = styled.button`
    background-color: #FF4820;
    border: none;
    width: 174px;
    height: 73px;
    border-radius: 5px;
    font-size: 30px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #c93a19;
    }
    @media screen and (max-width: 1000px) {
        font-size: 20px;
        width: 100px;
        height: 40px;
    }
`


const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LeftWrapper>
                        <Introduction>
                            Stwórzmy Twoją stronę marzeń używając nowoczesnych rozwiązań!
                        </Introduction>
                        <Description>
                            Potrzebujesz własnej strony? Czy może chciałbyś przez nią zareklamować swoją firmę? Nie szukaj dalej!
                        </Description>
                        <ButtonWrapper>
                            <Button>Oferta</Button>
                        </ButtonWrapper>
                    </LeftWrapper>
                </Left>
                <Right>
                    <Image src={image} />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Hero