import { ButtonProps } from '@/types/ButtonType.type'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ title, onPress, buttonColor, textColor }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, buttonColor ? { backgroundColor: buttonColor } : null]} onPress={onPress}>
      <Text style={[styles.buttonText, textColor ? { color: textColor } : null]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0CA201',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})