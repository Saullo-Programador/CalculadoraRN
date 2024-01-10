import React, { useContext } from 'react'
import { Container} from '../Styles/Styled'
import { ResultComponent } from '../Components/ResultComponents/ResultComponent'
import { ThemeContext, ThemeType } from '../Themes/theme'
import { Switch } from 'react-native'

export function HomeScreen() {
  const {toggleTheme , theme} = useContext(ThemeContext)
  const isDarkMode = theme === ThemeType.dark
  function HandleButton(){
    console.log('pressionado')
  }
  return (
    <Container>
      <Switch 
        value={isDarkMode} 
        onValueChange={toggleTheme} 
      />

    </Container>
  )
}
