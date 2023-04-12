import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {AirbnbRating} from 'react-native-ratings'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Offres = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView className='flex-1 bg-white' >
    <View className='px-6' >
    <Text className='text-4xl text-blue-600 font-extrabold' >Offres</Text>
    <TouchableOpacity className='w-full bg-gray-300/50 p-4 mt-4 rounded-lg flex-row items-center justify-between' 
    onPress={() => navigation.navigate('mapOffre', {
      from: {
        lat: 31.630431,
        lng: -8.0111
      },
      to: {
        lat: 31.5158158,
        lng: -8.062245
      }
    })}
    >
    <View className='flex-row items-center space-x-3' >
    <Image source={{uri: 'https://www.urban-driver.com/wp-content/uploads/2017/05/voiture-vtc.jpg'}} className='h-16 w-16 rounded-full' />
    <View className='flex-col' >
      <Text className='font-bold text-blue-600 mb-1' >Driver 1</Text>
      <AirbnbRating
  count={5}
  isDisabled={true}
  showRating={false}
  defaultRating={5}
  size={15}
/>
    </View>
    </View>
    <View className='flex-col space-y-2 items-center' >
    <View className='bg-blue-600 p-2 rounded-md' >
    <Ionicons name='car' color='white' size={24} />
    </View>
    <Text className='font-extrabold text-blue-600' >12 DHS</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity className='w-full bg-gray-300/50 p-4 mt-4 rounded-lg flex-row items-center justify-between' 
    onPress={() => navigation.navigate('mapOffre', {
      from: {
        lat: 31.6484,
        lng: -7.9947
      },
      to: {
        lat: 31.5158158,
        lng: -8.062245
      }
    })}
    >
    <View className='flex-row items-center space-x-3' >
    <Image source={{uri: 'https://www.urban-driver.com/wp-content/uploads/2017/05/voiture-vtc.jpg'}} className='h-16 w-16 rounded-full' />
    <View className='flex-col' >
      <Text className='font-bold text-blue-600 mb-1' >Driver 2</Text>
      <AirbnbRating
  count={5}
  isDisabled={true}
  showRating={false}
  defaultRating={5}
  size={15}
/>
    </View>
    </View>
    <View className='flex-col space-y-2 items-center' >
    <View className='bg-blue-600 p-2 rounded-md' >
    <Ionicons name='car' color='white' size={24} />
    </View>
    <Text className='font-extrabold text-blue-600' >7 DHS</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity className='w-full bg-gray-300/50 p-4 mt-4 rounded-lg flex-row items-center justify-between' 
    onPress={() => navigation.navigate('mapOffre', {
      from: {
        lat: 31.5744,
        lng: -8.0584
      },
      to: {
        lat: 31.5158158,
        lng: -8.062245
      }
    })}
    >
    <View className='flex-row items-center space-x-3' >
    <Image source={{uri: 'https://www.urban-driver.com/wp-content/uploads/2017/05/voiture-vtc.jpg'}} className='h-16 w-16 rounded-full' />
    <View className='flex-col' >
      <Text className='font-bold text-blue-600 mb-1' >Driver 3</Text>
      <AirbnbRating
  count={5}
  isDisabled={true}
  showRating={false}
  defaultRating={5}
  size={15}
/>
    </View>
    </View>
    <View className='flex-col space-y-2 items-center' >
    <View className='bg-blue-600 p-2 rounded-md' >
    <Ionicons name='car' color='white' size={24} />
    </View>
    <Text className='font-extrabold text-blue-600' >9 DHS</Text>
    </View>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Offres