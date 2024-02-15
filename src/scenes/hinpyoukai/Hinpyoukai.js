import React, { useState, useEffect } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";
import { colors, fontSize } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import RenderImage from "./RenderImage";
import { fontSizeOptions, positionOptions, bracketsOptions } from "./optionData";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { uploadImgur, requestHinpyoukai } from "./functions";

export default function Hinpyoukai() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [imagePath, setImagePath] = useState('')
  const [numberPositionIndex, setNumberPositionIndex] = useState(positionOptions[0].value)
  const [numberFontSize, setNumberFontSize] = useState(fontSizeOptions[1].value)
  const [isBrackets, setIsBrackets] = useState(bracketsOptions[1].value)

  const onButtonPress = async() => {
    try {
      setIsLoading(true)
      const inputImageUrl = await uploadImgur({imagePath})
      const hinpyoukaiResult = await requestHinpyoukai({inputImageUrl, numberPositionIndex, numberFontSize, isBrackets})
      if(hinpyoukaiResult) {
        navigation.navigate('HinpyoukaiResult', {imageResult: hinpyoukaiResult})
      }
    } catch(e) {
      console.log('on button press error', e)
    } finally {
      setIsLoading(false)
    }
  }

  const onImageButtonPress = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: false,
    });
    if (!result.canceled) {
      setImagePath(result.assets[0].uri);
    }
  }

  return (
    <ScreenTemplate>
      <ScrollView style={styles.container}>
        <RenderImage
          imagePath={imagePath}
          onPress={onImageButtonPress}
        />
        <View style={styles.contentContainer}>
          <RadioGroup
            options={fontSizeOptions}
            currentValue={numberFontSize}
            onPress={(value) => setNumberFontSize(value)}
            label='フォントサイズ'
          />
          <RadioGroup
            options={positionOptions}
            currentValue={numberPositionIndex}
            onPress={(value) => setNumberPositionIndex(value)}
            label='番号の位置'
          />
          <RadioGroup
            options={bracketsOptions}
            currentValue={isBrackets}
            onPress={(value) => setIsBrackets(value)}
            label='カッコをつける'
          />
          <Button
            label='解析する'
            onPress={onButtonPress}
            color={colors.bluePrimary}
            disable={!imagePath}
            labelColor={colors.white}
            labelBold={false}
            isLoading={isLoading}
          />
          <View style={{paddingVertical: 20}} />
        </View>
      </ScrollView>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingHorizontal: 10
  }
})