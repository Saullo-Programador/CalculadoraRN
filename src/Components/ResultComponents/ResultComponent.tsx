import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from '../../Styles/Styled'

export function ResultComponent() {
  return (
      <View style={styles.Container}>
        <Text>test</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
}) 
