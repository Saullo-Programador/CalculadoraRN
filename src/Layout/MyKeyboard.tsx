import React from 'react'
import { ButtonComponents } from '../Components/ButtonComponents/ButtonComponents'
import { Container, BoxButton } from '../Styles/Styled'

export function MyKeyboard() {
  function HandleButton(){
    console.log('pressionado')
  }
  return (
    <Container>
      <BoxButton>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
      </BoxButton>
      {/* <boxButton>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
      </boxButton>
      <boxButton>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
      </boxButton>
      <boxButton>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
        <ButtonComponents onPress={HandleButton}/>
      </boxButton> */}
    </Container>
  )
}
