import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CheckIcon, Select } from 'native-base'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Vtc = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState(null)
    const [service, setService] = useState(null)
    const [voit, setVoit] = useState(null)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const pickVoit = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0,
        });
    
        //console.log(result);
    
        if (!result.cancelled) {
          setVoit(result.uri);
        }
      };
  return (
    <SafeAreaView className='flex-1 bg-white' >
        <ScrollView contentContainerStyle={{paddingBottom: 18}} >
      <View className='flex-1 px-4' >
      <TouchableOpacity 
      onPress={() => navigation.goBack()}
      className='bg-blue-500 items-center justify-center h-12 w-12 rounded-full' >
        <Ionicons name='arrow-back' size={24} color={'white'} />
      </TouchableOpacity>
      <Text className='font-black text-blue-600 text-3xl my-3' >Devenir VTC</Text>
      {
    image
    ?
    <Image source={{uri: image}} 
    className='w-full items-center justify-center rounded-xl h-[20vh] mt-2 mb-4'
    resizeMode='cover'
    />
    :
    <TouchableOpacity
    className='w-full items-center justify-center rounded-xl bg-gray-100 h-[20vh] mt-2 mb-4'
    onPress={pickImage}
    >
    <Image source={require('../assets/gal.png')}
    className='h-20 w-20'
    />
    <Text className='mt-2 text-black font-bold ' >Permis Photo</Text>
    </TouchableOpacity>
    }
    <Text>Vehicule type</Text>
    <Select selectedValue={service} accessibilityLabel="choisir votre vehicule type" placeholder="choisir votre vehicule type" _selectedItem={{
        bg: "blue.400",
        endIcon: <CheckIcon size="5" />
      }}
      my={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Motor" value="Motor" />
          <Select.Item label="Voiture" value="Voiture" />
          <Select.Item label="Vane" value="Vane" />
        </Select>
        {
    voit
    ?
    <Image source={{uri: image}} 
    className='w-full items-center justify-center rounded-xl h-[20vh] mt-2 mb-4'
    resizeMode='cover'
    />
    :
    <TouchableOpacity
    className='w-full items-center justify-center rounded-xl bg-gray-100 h-[20vh] mt-2 mb-4'
    onPress={pickVoit}
    >
    <Image source={require('../assets/gal.png')}
    className='h-20 w-20'
    />
    <Text className='mt-2 text-black font-bold ' >Voiture Photo</Text>
    </TouchableOpacity>
    }
    <TouchableOpacity className='bg-green-400 py-3 rounded-xl items-center py-3' >
     <Text className='text-white font-extrabold' >Envoyer Votre Demande</Text>
    </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Vtc