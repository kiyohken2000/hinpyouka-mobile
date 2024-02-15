import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ScreenTemplate from "../../components/ScreenTemplate";
import Button from "../../components/Button";
import { colors, fontSize } from "../../theme";
import { useRoute, useNavigation } from "@react-navigation/native";
import RenderImage from "../hinpyoukai/RenderImage";
import { saveImage } from "../../utils/downloadFunctions";
import moment from "moment";
import * as Clipboard from 'expo-clipboard';
import { showToast } from "../../utils/showToast";

export default function HinpyoukaiResult() {
  const route = useRoute()
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const { imageResult } = route.params
  const [imageSource, setImageSource] = useState(imageResult)

  useEffect(() => {
    setImageSource(imageResult)
  }, [imageResult])

  const onBackPress = () => {
    navigation.goBack()
  }

  const onImagePress = async() => {
    await Clipboard.setStringAsync(imageSource);
    showToast({title: 'コピーしました', body: ''})
  }

  const onSavePress = async() => {
    setIsLoading(true)
    const fileName = `${moment().unix()}.jpg`
    await saveImage({url: imageSource, fileName})
    setIsLoading(false)
  }

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <RenderImage
          imagePath={imageSource}
          onPress={onImagePress}
        />
        <View style={styles.contentContainer}>
          <Button
            label='画像を保存'
            onPress={onSavePress}
            color={colors.bluePrimary}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
            isLoading={isLoading}
          />
          <View style={{paddingVertical: 10}} />
          <Button
            label='戻る'
            onPress={onBackPress}
            color={colors.darkPurple}
            disable={false}
            labelColor={colors.white}
            labelBold={false}
            isLoading={false}
          />
        </View>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  contentContainer: {
    paddingHorizontal: 10
  }
})