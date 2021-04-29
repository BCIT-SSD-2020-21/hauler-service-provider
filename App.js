import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './src/components/navigation/BottomTabNavigation/BottomTabNavigation';
import DrawerNavigation from './src/components/navigation/DrawerNavigation/DrawerNavigation';
import { AuthProvider } from './src/context/ContextProvider';

const Stack = createStackNavigator();

const PlatformSpecificNavigator = Platform.select({
  ios: () => BottomTabNavigation,
  android: () => DrawerNavigation,
})();

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Root' component={PlatformSpecificNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}