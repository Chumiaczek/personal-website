import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 80%;
    background: radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -ms-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -o-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -webkit-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
    background: -moz-radial-gradient(circle at 3% 25%, rgba(0,40,83,1) 0%, #003f81 100%);
`

const Proccess = () => {
    return (
        <Container>
            <Wrapper>

            </Wrapper>
        </Container>
    )
}

export default Proccess