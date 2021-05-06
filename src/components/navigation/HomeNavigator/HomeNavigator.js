import React from 'react';
import MenuIcon from '../MenuIcon/MenuIcon'
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import Signin from '../../../screens/SignInScreen/Signin';
import SignUp from '../../../screens/SignUpScreen/SignUp';
import Home from '../../../screens/HomeScreen/Home';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: true,
            }}
        >
            <HomeStack.Screen
                name='Signin'
                component={Signin}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name='Home'
                component={Home}
                options={
                    Platform.OS === 'android'
                        ? {
                            headerRight: () => <MenuIcon />,
                        }
                        : {
                            headerTitle: 'Home',
                        }
                }
            />
            <HomeStack.Screen
                name='SignUp'
                component={SignUp}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
