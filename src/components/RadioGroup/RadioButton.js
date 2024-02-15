import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../../theme";
import FontIcon from 'react-native-vector-icons/Feather'

export default function RadioButton(props) {
  const { item, isSelected, onPress } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        disabled={isSelected}
        style={styles.buttonContainer}
      >
        <FontIcon
          name={isSelected?'check-circle':'circle'}
          color={isSelected?colors.darkPurple:colors.pink}
          size={fontSize.xxxLarge}
        />
        <View style={{paddingLeft: 5}}>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  label: {
    fontSize: fontSize.xLarge
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})