import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

import Onboard from './pages/Onboard'
import Signup from './pages/Signup'
import Signup2 from './pages/Signup2'
import Complete from './pages/Complete'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPasswowrdSuccess from './pages/ResetPasswowrdSuccess'
import Premium from './pages/Premium'

import Header from './components/Header'

import AppNavigation from './components/AppNavigation'

const Routes = () => {
    return (
        <NavigationContainer>
            <Navigator> 
                <Screen name="Onboard" component={Onboard} options={{headerShown: false}} />
                <Screen name="Signup" component={Signup} options={{headerShown: true, header: () => <Header title="Criar uma conta" />}} />
                <Screen name="Signup2" component={Signup2} options={{headerShown: true, header: () => <Header title="Criar uma conta" />}} />
                <Screen name="Complete" component={Complete} options={{headerShown: true, header: () => <Header title="Complete seu perfil" />}} />
                <Screen name="Login" component={Login} options={{headerShown: true, header: () => <Header title="Entrar" />}} />
                <Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: true, header: () => <Header title="Redefina sua senha" />}} />
                <Screen name="ResetPasswowrdSuccess" component={ResetPasswowrdSuccess} options={{headerShown: true, header: () => <Header title="Voltar" path="Login" />}} />
                <Screen name="App" component={AppNavigation} options={{headerShown: false}} />
                <Screen name="Premium" component={Premium} options={{headerShown: false}} />
            </Navigator>
            <StatusBar translucent={false} />
        </NavigationContainer>
    )
}

export default Routes