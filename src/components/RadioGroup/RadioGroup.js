import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize } from "../../theme";
import RadioButton from "./RadioButton";

export default function RadioGroup(props) {
  const { options, currentValue, onPress, label } = props

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={{alignItems: 'center', paddingBottom: 10}}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {options.map((item, i) => {
            return (
              <RadioButton
                key={i}
                item={item}
                isSelected={currentValue === item.value}
                onPress={() => onPress(item.value)}
              />
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  contentContainer: {
    borderWidth: 1,
    paddingVertical: 10,
    borderColor: colors.grayThird,
    borderRadius: 10,
  },
  label: {
    fontSize: fontSize.xLarge
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})