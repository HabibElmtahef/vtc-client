import { View, Text, SafeAreaView, TextInput, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Login = () => {
    const navigation = useNavigation()
    const [input, setInput] = useState({
        email: null,
        password: null
    })

    const handleLogin = async () => {
      try {
        const { data } = await axios.post('http://localhost:9000/users/login', {...input})
        if(data?.token) {
          console.log(data)
          navigation.navigate('map')
        }
        else {
          throw {
            message: 'Email ou Mot de passe incorrect'
          }
        }
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
    <Text className='text-2xl font-extrabold' >Login</Text>
    <View className='w-[80vw] self-center' >
    <TextInput 
    placeholder='Adresse Email'
    className='text-black p-3 bg-gray-200 rounded-md my-5'
    onChangeText={e => setInput({...input, email: e})}
    />
    <TextInput 
    placeholder='Mot de passe'
    secureTextEntry={true}
    className='text-black p-3 bg-gray-200 rounded-md mb-5'
    onChangeText={e => setInput({...input, password: e})}
    />
    <Button colorScheme='darkBlue' w='full' py='3'
    onPress={handleLogin}
    fontSize='xl'
    fontWeight='bold'
    rounded='lg'
    >
        Login
    </Button>
    <Text className='my-3 text-center' >Ou</Text>
    <Button colorScheme='amber' w='full' py='3'
    onPress={() => navigation.navigate('register')}
    fontSize='xl'
    fontWeight='bold'
    rounded='lg'
    >
        Créer une compte
    </Button>
    </View>
    </View>
    </SafeAreaView>
  )
}

export default Login