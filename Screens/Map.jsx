import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const Map = () => {
  const navigation = useNavigation()
  return (
    <View className="flex-1" >
     <MapView style={{height: screen.height, width: screen.width}}
     initialRegion={{
      longitude: -8.0111,
      latitude: 31.6304,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }}
    provider={PROVIDER_GOOGLE}
    followsUserLocation={true}
    showsUserLocation={true}
    loadingEnabled={false}
    showsTraffic={false}
    rotateEnabled={false}
    showsCompass={false}
    showsMyLocationButton={false}
    minZoomLevel={7}
    maxZoomLevel={18}
    ></MapView>
    <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    className='absolute top-12 left-6 h-12 w-12 rounded-full bg-blue-600 items-center justify-center'
    >
    <Ionicons name='grid-outline' size={24} color={'white'} />
    </TouchableOpacity>
    <View className='absolute bottom-0 p-8 rounded-t-3xl bg-white left-0 right-0' >
    <Text>Votre Destination</Text>
    <View className='p-3 bg-gray-300 w-full rounded-lg my-3' >
    <Text className='font-bold' >Université privée du marrakech</Text>
    </View>
    <TouchableOpacity className='w-full items-center rounded-lg bg-blue-600 p-3' 
    onPress={() => navigation.navigate('offres')}
    >
      <Text className='text-white font-bold' >Search</Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Map