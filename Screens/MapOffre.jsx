import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions'
import { Ionicons } from '@expo/vector-icons';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MAP_KEY = "AIzaSyCxG9zixHyrC6w_jNLrjHOYoukkBuxrzYI"

const MapOffre = ({route}) => {
  const {from, to} = route?.params  
  const navigation = useNavigation()
  const map = useRef()
  const [infos, setInfos] = useState(null)
  return (
    <View className="flex-1" >
     <MapView style={{height: screen.height, width: screen.width}}
     initialRegion={{
      longitude: from?.lng,
      latitude: from?.lat,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }}
    ref={map}
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
    >
    <MapViewDirections 
       origin={{
        latitude: from.lat,
        longitude: from?.lng
       }}
       destination={{
        latitude: to?.lat,
        longitude: to?.lng
       }}
       apikey={MAP_KEY}
       strokeColor={'#0053b3'}
       strokeWidth={4}
       optimizeWaypoints={true}
       lineCap='round'
       lineDashPattern={[0]}
       onReady={result => {
        console.log(result.distance.toFixed(1))
        console.log(result.duration.toFixed(0))
         setInfos({
           distance: result?.distance,
           duration: result?.duration
         })
        
       }}
       />
       <Marker
       coordinate={{
        latitude: from?.lat,
        longitude: from?.lng
       }}
       >
      <Image source={require('../assets/driver.png')} className='h-10 w-10' />
       </Marker>
       <Marker
       coordinate={{
        latitude: to?.lat,
        longitude: to?.lng
       }}
       >
      <Image source={require('../assets/school.png')} className='h-10 w-10' />
       </Marker>
    </MapView>
    <View className='absolute bottom-0 p-8 rounded-t-3xl bg-white left-0 right-0' >
    <View className='flex-row mb-3 items-center justify-around' >
    <View className='flex-col items-center space-y-2' >
    <Text>Distance</Text>
    <Image source={require('../assets/route.png')} className='h-12 w-12' />
    <Text className='font-bold text-blue-600' > {infos?.distance?.toFixed(1)} KM </Text>
    </View>
    <View className='flex-col items-center space-y-2' >
    <Text>Duration</Text>
    <Image source={require('../assets/time.png')} className='h-12 w-12' />
    <Text className='font-bold text-blue-600' > {infos?.duration?.toFixed(0)} Minutes </Text>
    </View>
    </View>
    <TouchableOpacity className='w-full items-center rounded-lg bg-blue-600 p-3' 
    onPress={() => navigation.navigate('offres')}
    >
      <Text className='text-white font-bold' >Confirmer</Text>
    </TouchableOpacity>
    </View>
    <TouchableOpacity className='absolute top-10 left-6 h-12 w-12 bg-blue-600 rounded-full items-center justify-center' 
    onPress={() => navigation.goBack()}
    >
      <Ionicons name='chevron-back' size={24} color='white' />
    </TouchableOpacity>
    </View>
  )
}

export default MapOffre