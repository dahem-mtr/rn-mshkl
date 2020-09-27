import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key ,data) => {
    try {
        await AsyncStorage.setItem(key, data)
    } catch (e) {
        // console.warn("error ")
    }
}
export const storeDataObject = async (key, data) => {
    try {
        const jsonData = JSON.stringify(data)
        await AsyncStorage.setItem(key, jsonData)
    } catch (e) {
        // saving error
    }
}

export const getStoredData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
             return value
        }
    } catch (e) {
        console.warn("error ")

    }
}


export const getStoredDataObject = async (key) => {
    try {
        const jsonData = await AsyncStorage.getItem(key)
        return jsonData != null ? JSON.parse(jsonData) : null;
    } catch (e) {
        // error reading value
    }
}
