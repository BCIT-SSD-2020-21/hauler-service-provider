import React from 'react';
import { View } from 'react-native';
// import Signup from './src/screens/SignUpScreen/SignUp';
// import Signin from './src/screens/SignInScreen/Signin';
// import Profile from './src/screens/ProfileScreen/Profile';
import { AuthProvider } from './src/context/ContextProvider';
// import Home from './src/screens/HomeScreen/Home';
// import SearchJobs from './src/screens/SearchJobsScreen/SearchJobs';
import PostDetails from './src/screens/PostDetailScreen/PostDetails';

export default function App() {
  return (
    <AuthProvider>
      <View>
        {/* <Signup /> */}
        {/* <Signin /> */}
        {/* <Profile /> */}
        {/* <Home /> */}
        {/* <SearchJobs /> */}
        <PostDetails />

      </View>
    </AuthProvider>
  );
}

