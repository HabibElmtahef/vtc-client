import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Map from '../Screens/Map'
import MapOffre from '../Screens/MapOffre'
import Offres from '../Screens/Offres'
import Register from '../Screens/Register'
import Vtc from '../Screens/Vtc'

const { Screen, Navigator } = createNativeStackNavigator()

const Nav = () => {
    return(
        <Navigator
        screenOptions={{
            headerShown: false
        }}
        >
        <Screen name='login' component={Login} />
        <Screen name='map' component={Map} />
        <Screen name='register' component={Register} />
        <Screen name='offres' component={Offres} />
        <Screen name='mapOffre' component={MapOffre} />
        <Screen name='vtc' component={Vtc} />
        </Navigator>
    )
}

export default Nav