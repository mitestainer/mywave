import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {Feather} from '@expo/vector-icons/'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import Main from '../pages/Main'
import Forecast from '../pages/Forecast'
import Beach from '../pages/Beach'
import Log from '../pages/Log'
import Log2 from '../pages/Log2'
import Market from '../pages/Market'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'

import Header from '../components/Header'

const home = require('../images/icon-home.png')
const note = require('../images/icon-note.png')
const profile = require('../images/icon-profile.png')

const ProfileNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: true, header: () => <Header title="Meu perfil" extended={true} />}} />
            <Stack.Screen name="Settings" component={Settings} options={{headerShown: true, header: () => <Header title="Configurações" extended={true} />}} />
        </Stack.Navigator>
    )
}

const LogNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Log" component={Log} options={{headerShown: true, header: () => <Header title="Diário de Bordo" />}} />
            <Stack.Screen name="Log2" component={Log2} options={{headerShown: true, header: () => <Header title="Diário de Bordo" />}} />
        </Stack.Navigator>
    )
}

const ForecastNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Forecast" component={Forecast} options={{headerShown: true, header: () => <Header title="Previsão das Ondas" />}} />
            <Stack.Screen name="Beach" component={Beach} options={{headerShown: true, header: () => <Header title="Comentários" />}} />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let icon;

                switch (route.name) {
                    case 'Main':
                        icon = <Image source={home} style={{opacity: focused ? 1 : 0.3}} />
                        break
                    case 'ForecastNavigation':
                        icon = <Feather name="sun" size={24} style={{opacity: focused ? 1 : 0.3}} color="#0C4459" />
                        break
                    case 'LogNavigation':
                        icon = <Image source={note} style={{opacity: focused ? 1 : 0.3}} />
                        break
                    case 'Market':
                        icon = <Feather name='shopping-cart' size={24} style={{opacity: focused ? 1 : 0.3}} color="#0C4459" />
                        break
                    case 'ProfileNavigation':
                        icon = <Image source={profile} style={{opacity: focused ? 1 : 0.3}} />
                        break
                    default:
                        break
                }

                return icon
            },
        })}
        tabBarOptions={{
            activeTintColor: '#0C4459',
            inactiveTintColor: '#88AABF',
            showLabel: false,
            style: {
                height: 80,
                backgroundColor: '#fff'
            }
        }}
        >
            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="ForecastNavigation" component={ForecastNavigation} />
            <Tab.Screen name="LogNavigation" component={LogNavigation} />
            <Tab.Screen name="Market" component={Market} />
            <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
        </Tab.Navigator>
    )
}

export default AppNavigation