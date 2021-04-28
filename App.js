import React from 'react';
import { View } from 'react-native';
// import Signup from './src/screens/SignUpScreen/SignUp';
// import Signin from './src/screens/SignInScreen/Signin';
// import Profile from './src/screens/ProfileScreen/Profile';
import { AuthProvider } from './src/context/ContextProvider';
import MyJobList from './src/screens/MyJobListScreen/MyJobList';
// import JobConfirmation from './src/screens/JobConfirmationScreen/JobConfirmation';
// import Home from './src/screens/HomeScreen/Home';
// import SearchJobs from './src/screens/SearchJobsScreen/SearchJobs';
// import PostDetails from './src/screens/PostDetailScreen/PostDetails';
// import OfferConfirmation from './src/screens/OfferConfirmationScreen/OfferConfirmation';

export default function App() {
  return (
    <AuthProvider>
      <View>
        {/* <Signup /> */}
        {/* <Signin /> */}
        {/* <Profile /> */}
        {/* <Home /> */}
        {/* <SearchJobs /> */}
        {/* <PostDetails /> */}
        {/* <JobConfirmation /> */}
        {/* <OfferConfirmation /> */}
        <MyJobList />
      </View>
    </AuthProvider>
  );
}

