import React from 'react';
import MenuIcon from '../MenuIcon/MenuIcon'
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import MyJobList from '../../../screens/MyJobListScreen/MyJobList';

const MyJobListStack = createStackNavigator();

const MyJobListNavigator = () => {
    return (
        <MyJobListStack.Navigator
            initialRouteName='MyJobList'
            screenOptions={{
                headerShown: true,
            }}
        >
            <MyJobListStack.Screen
                name='MyJobList'
                component={MyJobList}
                options={
                    Platform.OS === 'android'
                        ? {
                            headerRight: () => <MenuIcon />,
                        }
                        : {
                            headerTitle: 'Job List',
                        }
                }
            />
        </MyJobListStack.Navigator>
    );
};

export default MyJobListNavigator;
