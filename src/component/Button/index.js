import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

const MainButton = (props) => {
  const {
    onPress,
    title,
    style,
    testID,
  } = props
  return (
    <TouchableOpacity 
        onPress = {onPress} 
        style = {[styles.ButtonContainer, style]}
        activeOpacity = {0.6}
      >
          <Text style = {styles.ButtonText}>
            {title}
          </Text>
      </TouchableOpacity>
  )
}

export default MainButton;
