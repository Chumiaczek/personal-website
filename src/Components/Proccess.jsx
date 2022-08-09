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
                            <ContainerTitle>Jak wygląda proces wykonania Twojej strony</ContainerTitle>
                        </TitleWrapper>
                        <Section>
                            <Left>
                                <Number>1)</Number>
                            </Left>
                            <Right>
                                <Title>Napisz do mnie</Title>
                                <Description>Komunikacja to podstawa. Skontaktuj się ze mną, a na pewno coś wybierzemy. Przy kontakcie uwzględnij jak najwięcej szczegółów. PS. Nie jestem designerem, jeżeli nie masz projektu, wyślij pomysł.</Description>
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
                                <Description>Podczas przetworzenia danych o stronie, wyborze infrastruktury itp. dostaniesz rozpiskę ile strona będzie kosztować. Jeżeli wybrałeś opcję gotowca, dostaniesz również rozpiskę tego, co dany pakiet w sobie zawiera.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>3)</Number>
                            </Left>
                            <Right>
                                <Title>Wykonanie</Title>
                                <Description>Po dostarczeniu danych o stronie, wpłaceniu zaliczki oraz finalnym wyborze pakietu, zaczynam swoją część umowy. Przy wykonywaniu strony cały czas utrzymuję z Tobą kontakt, aby strona była dopasowana jak najlepiej do twoich oczekiwań.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>4)</Number>
                            </Left>
                            <Right>
                                <Title>Testowa wersja</Title>
                                <Description>Gdy wykonam większą część strony, jej niedokończoną wersję wgram na własny hosting. Możesz tam zobaczyć jak strona funkcjonuje, zajrzeć czy nie ma jakiś niedoskonałości lub czy występują jakieś problemy. Pamiętaj, im więcej mi napiszesz, tym więcej rzeczy dostrzegę.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>5)</Number>
                            </Left>
                            <Right>
                                <Title>Wpłata reszty kwoty</Title>
                                <Description>Po zakończeniu pracy na Twojej stronie, przed oddaniem oczekuję pełnej zapłaty. Masz możliwość zapoznania się z pełną wersją przed wpłatą pieniędzy, jednak nie zostanie ona tak na długo.</Description>
                            </Right>
                        </Section>
                        <Section>
                            <Left>
                                <Number>6)</Number>
                            </Left>
                            <Right>
                                <Title>Oddanie strony</Title>
                                <Description>Gdy już wpłaciłeś pieniądze, masz dwie możliwości. Albo dostajesz pełną stronę w danym języku, albo za dodatkową opłatą wgrywam ci ją na hosting oraz ustawiam domenę. Zakup tych poszczególnych rzeczy leży po Twojej stronie.</Description>
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