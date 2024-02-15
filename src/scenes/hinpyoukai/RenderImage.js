import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { colors, fontSize } from "../../theme";

const { width } = Dimensions.get('window')

export default function RenderImage(props) {
  const { imagePath, onPress } = props

  if(!imagePath) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.imageContainer}
        >
          <View style={styles.imagePlaceHolder}>
            <Text style={styles.placeHolderText}>タップして画像を選択</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.imageContainer}
      >
        <Image
          source={{uri: imagePath}}
          style={styles.image}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: width * 0.9,
    height: width * 0.9,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imagePlaceHolder: {
    flex: 1,
    borderColor: colors.grayThird,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  placeHolderText: {
    fontSize: fontSize.xxLarge,
    fontWeight: '700',
  }
})