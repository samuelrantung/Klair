import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Error getData', e);
  }
};

export const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
    console.log('error clearData : ', e);
  }

  console.log('Async Data Cleared.');
};
