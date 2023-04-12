import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DrawerContent = () => {
  const navigation = useNavigation()

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token')
      navigation.navigate('login')
    } catch (err) {
      Alert.alert(err?.message)
    }
  }
    return (
    <View>
      <TouchableOpacity
      className='mt-20 mx-4 bg-green-500 py-3 items-center rounded-md'
      onPress={() => navigation.navigate('vtc')}
      >
      <Text className='text-white font-bold' >Devenir VTC</Text>
      </TouchableOpacity>
      <TouchableOpacity
      className='mt-4 mx-4 bg-gray-200 py-3 items-center rounded-md'
      onPress={handleLogout}
      >
      <View className='flex-row space-x-3 items-center' >
      <Ionicons name='log-out-outline' size={24} />
      <Text className='text-black font-bold' >Deconnexion</Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default DrawerContent