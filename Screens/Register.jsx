import { View, Text, SafeAreaView, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Register = () => {
    const navigation = useNavigation()
    const [input, setInput] = useState({
        email: null,
        password: null,
        nom: null,
        prenom: null,
        telephone: null
    })

    const handleReg = async () => {
      try {
        const res = await axios.post('http://localhost:9000/users', {...input})
        console.log(res.data)
      } catch (err) {
        Alert.alert(err?.message)
      }
    }
    
  return (
    <SafeAreaView className='flex-1 bg-white' > 
    <View className='flex-[0.3] items-center justify-center' >
    <Image source={require('../assets/logo.jpg')} className='h-72 w-72' />
    </View>
    <View className='flex-[0.7] items-center justify-center' >
    <Text className='text-2xl font-extrabold mb-5' >Register</Text>
    <View className='w-[80vw] self-center' >
    <TextInput 
    placeholder='Nom'
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, nom: e})}
    />
    <TextInput 
    placeholder='Prenom'
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, prenom: e})}
    />
    <TextInput 
    placeholder='Numero du telephone'
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, telephone: e})}
    />
    <TextInput 
    placeholder='Adresse Email'
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, email: e})}
    />
    <TextInput 
    placeholder='Mot de passe'
    secureTextEntry={true}
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, password: e})}
    />
    <Button colorScheme='darkBlue' w='full' py='3'
    onPress={handleReg}
    fontSize='xl'
    fontWeight='bold'
    rounded='lg'
    >
        Register
    </Button>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Register