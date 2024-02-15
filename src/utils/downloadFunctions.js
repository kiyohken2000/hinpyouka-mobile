import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { showToast } from './showToast';

const saveImage = async({url, fileName}) => {
  try {
    const { uri } = await FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + fileName
    )
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if(status === 'granted') {
      await MediaLibrary.saveToLibraryAsync(uri)
      showToast({title: '保存しました'})
    }
  } catch(e) {
    console.log('save image error:', e)
    showToast({title: '保存に失敗しました'})
  }
}

export { saveImage }