import {AsyncStorage} from 'react-native';
import {Platform, Dimensions} from 'react-native';

// Save to AsyncStorage
const saveToStorage = async (name, value) => {
  try {
    await AsyncStorage.setItem(name, value);
  } catch (error) {
    console.log('Can not save to AsyncStorage');
  }
};

// Get from AsyncStorage
const getFromStorage = async name => {
  try {
    var value = await AsyncStorage.getItem(name);
    if (value !== null || value !== undefined) {
      return value;
    } else {
      return 0;
    }
  } catch (error) {
    console.log('Can not get data from AsyncStorage');
  }
};

// Random NonRepeat
const randomNonRepeat = max => {
  var arrayFinal = [];
  for (let i = 0; i < max; i++) {
    var result = checkExist(arrayFinal, max);
    arrayFinal.push(result);
  }
  return arrayFinal;
};

// Check for Random NonRepeat
const checkExist = (arrayFinal, max) => {
  var arrayVirtual = arrayFinal;
  var rand = Math.floor(Math.random() * max);
  var flag = 0;
  for (var i = 0; i < arrayFinal.max; i++) {
    if (arrayVirtual[i] === rand) {
      flag = 1;
    }
  }
  if (flag === 0) {
    return rand;
  } else {
    return this.check(arrayVirtual, max);
  }
};

// Check IOS phone
const isIOS = () => {
  return Platform.OS === 'ios' ? true : false;
};

// Check IOS phone
const isNull = value => {
  if (value == '' || value == null || value == undefined || value == NaN) {
    return true;
  } else {
    return false;
  }
};

// Check screen
const is18x9 = () => {
  const widthScreen = Dimensions.get('window').width;
  const heightScreen = Dimensions.get('window').height;
  if (heightScreen / widthScreen > 1.8) {
    return true;
  } else {
    return false;
  }
};

export {saveToStorage, getFromStorage, randomNonRepeat, isIOS, isNull, is18x9};
