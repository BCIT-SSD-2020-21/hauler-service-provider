import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuIcon from '../MenuIcon/MenuIcon';
import HomeNavigator from '../HomeNavigator/HomeNavigator';
import Profile from '../../../screens/ProfileScreen/Profile';
import SearchJobsNavigator from'../SearchJobsNavigator/SearchJobsNavigator';
import MyJobListNavigator from '../MyJobListNavigator/MyJobListNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        options={{ headerTitle: 'Home', headerRight: () => <MenuIcon /> }}
      />
      <Drawer.Screen
        name="SearchJobsNavigator"
        component={SearchJobsNavigator}
        options={{ headerTitle: 'Home', headerRight: () => <MenuIcon /> }}
      />
      <Drawer.Screen
        name="MyJobListNavigator"
        component={MyJobListNavigator}
        options={{ headerTitle: 'My Job List', headerRight: () => <MenuIcon /> }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Profile', headerRight: () => <MenuIcon /> }}
      />
    </Drawer.Navigator>
  );
}
