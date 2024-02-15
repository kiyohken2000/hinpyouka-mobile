import axios from "axios";
import * as FileSystem from 'expo-file-system';
import { endpoints, imgurKey, headers } from "../../config";

const uploadImgur = async({imagePath}) => {
  try {
    const base64strings = await FileSystem.readAsStringAsync(imagePath, {
      encoding: FileSystem.EncodingType.Base64
    })
    const { data } = await axios.post(
      endpoints.imgur,
      {image: base64strings},
      {
        headers: {
          Authorization: `Client-ID ${imgurKey.client_id}`
        }
      }
    )
    return data.data.link
  } catch(e) {
    console.log('upload imgur error', e)
    throw new Error('upload imgur error')
  }
}

const requestHinpyoukai = async({inputImageUrl, numberPositionIndex, numberFontSize, isBrackets}) => {
  try {
    const requestBody = {
      data: inputImageUrl,
      numberPosition: numberPositionIndex,
      fontSize: numberFontSize,
      isBrackets: isBrackets,
    }
    const { data } = await axios.post(
      endpoints.hinpyoukai,
      requestBody,
      {headers: headers}
    );
    return data
  } catch(e) {
    console.log('request hinpyoukai error', e)
    throw new Error('request hinpyoukai error')
  }
}

export { uploadImgur, requestHinpyoukai }