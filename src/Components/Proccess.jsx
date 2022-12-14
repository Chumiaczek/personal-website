import React from 'react'
import styled from 'styled-components'
import useCollapse from 'react-collapsed'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 90%;
    background: radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -ms-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -o-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -webkit-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -moz-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    border-radius: 5px;
`
const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 30px;
    flex-direction: column;
`
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #071c36;
    border-radius: 5px;
    margin-bottom: 15px;
    @media screen and (max-width: 1000px){
        flex-direction: column;
    }
`
const Left = styled.div`
    padding: 25px;
    padding-left: 50px;
    @media screen and (max-width: 1000px){
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 5px;
        width: 100%;
    }
`
const Number = styled.h1`
    font-size: 3vw;
    background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 1000px){
        font-size: 7vw;
        text-align: center;
        width: 100%;
    }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    @media screen and (max-width: 1000px){
        padding: 10px;
    }
`
const Title = styled.h1`
    font-size: 2vw;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    @media screen and (max-width: 1000px){
        font-size: 4.5vw;
        text-align: center;
    }
`
const Description = styled.p`
    color: #81AFDD;
    font-size: 1vw;
    @media screen and (max-width: 1000px){
        font-size: 3vw;
        text-align: center;
    }
`
const ContainerTitle = styled.h1`
    margin-bottom: 35px;
    font-size: 2.5vw;
    width: 100%;
    @media screen and (max-width: 1000px){
        font-size: 4vw;
        text-align: center;
    }
`
const Button = styled.button`
    background-color: #0a274aac;
    border: none;
    border-radius: 10px;
    font-size: 2.5vw;
    padding: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: #071c36;
    }
    @media screen and (max-width: 1000px){
        font-size: 5vw;
    }
`
const Sections = styled.div``
const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-right: 40px;
`
const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Proccess = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
        <Container>
            <Wrapper>
                <InnerWrapper>
                    <div>
                        <TitleWrapper>
                            <ContainerTitle>Jak wygl??da proces wykonania Twojej strony</ContainerTitle>
                        </TitleWrapper>
                        <Section>
                            <Left>
                                <Number>1)</Number>
                            </Left>
                            <Right>
                                <Title>Napisz do mnie</Title>
                                <Description>Komunikacja to podstawa. Skontaktuj si?? ze mn??, a na pewno co?? wybierzemy. Przy kontakcie uwzgl??dnij jak najwi??cej szczeg??????w. PS. Nie jestem designerem, je??eli nie masz projektu, wy??lij pomys??.</Description>
                            </Right>
                        </Section>
                    </div>
                    <Sections {...getCollapseProps()}>
                        <Section>
                            <Left>
                                <Number>2)</Number>
                            </Left>
                            <Right>
                                <Title>Wycena</Title>
                                <Description>Podczas przetworzenia danych o stronie, wyborze infrastruktury itp. dostaniesz rozpisk?? ile strona b??dzie kosztowa??. Je??eli wybra??e?? opcj?? gotowca, dostaniesz r??wnie?? rozpisk?? tego, co dany pakiet w sobie zawiera.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>3)</Number>
                            </Left>
                            <Right>
                                <Title>Wykonanie</Title>
                                <Description>Po dostarczeniu danych o stronie, wp??aceniu zaliczki oraz finalnym wyborze pakietu, zaczynam swoj?? cz?????? umowy. Przy wykonywaniu strony ca??y czas utrzymuj?? z Tob?? kontakt, aby strona by??a dopasowana jak najlepiej do twoich oczekiwa??.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>4)</Number>
                            </Left>
                            <Right>
                                <Title>Testowa wersja</Title>
                                <Description>Gdy wykonam wi??ksz?? cz?????? strony, jej niedoko??czon?? wersj?? wgram na w??asny hosting. Mo??esz tam zobaczy?? jak strona funkcjonuje, zajrze?? czy nie ma jaki?? niedoskona??o??ci lub czy wyst??puj?? jakie?? problemy. Pami??taj, im wi??cej mi napiszesz, tym wi??cej rzeczy dostrzeg??.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>5)</Number>
                            </Left>
                            <Right>
                                <Title>Wp??ata reszty kwoty</Title>
                                <Description>Po zako??czeniu pracy na Twojej stronie, przed oddaniem oczekuj?? pe??nej zap??aty. Masz mo??liwo???? zapoznania si?? z pe??n?? wersj?? przed wp??at?? pieni??dzy, jednak nie zostanie ona tak na d??ugo.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>6)</Number>
                            </Left>
                            <Right>
                                <Title>Oddanie strony</Title>
                                <Description>Gdy ju?? wp??aci??e?? pieni??dze, masz dwie mo??liwo??ci. Albo dostajesz pe??n?? stron?? w danym j??zyku, albo za dodatkow?? op??at?? wgrywam ci j?? na hosting oraz ustawiam domen??. Zakup tych poszczeg??lnych rzeczy le??y po Twojej stronie.</Description>
                            </Right>
                        </Section>
                    </Sections>
                    <Button {...getToggleProps()}>
                        {isExpanded === true &&
                            <Arrow><FaArrowUp /></Arrow>
                        }
                        {isExpanded === false &&
                            <Arrow><FaArrowDown /></Arrow>
                        }
                    </Button>
                </InnerWrapper>
            </Wrapper>
        </Container >
    )
}

export default Proccess