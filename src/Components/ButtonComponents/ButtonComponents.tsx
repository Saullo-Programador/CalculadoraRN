import React from 'react'
import { 
    TouchableOpacity, 
    Text,
    View,
    StyleSheet, 
    TouchableOpacityProps 
} from 'react-native';

import {AntDesign} from '@expo/vector-icons'
import { useTheme } from 'styled-components';

interface ButtonProps{
    title?: string;
    onPress: () => void;
    style?: TouchableOpacityProps['style'];
    disabled?: boolean;
    iconName?: keyof typeof AntDesign.glyphMap;
}

export function ButtonComponents({
    title,
    onPress,
    style,
    disabled,
    iconName
}: ButtonProps) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Button,{backgroundColor: colors.primary}]}>
      <AntDesign 
        name={iconName} 
        size={32} 
        color={'#FFFFFF'}
      />
      <Text style={[styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Button:{
      borderRadius: 12,
      width: '22%',
      height: '22%',
      justifyContent: 'center',
      alignItems: 'center',

    },
    title:{
        display:    'flex',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 30,
    },
})
