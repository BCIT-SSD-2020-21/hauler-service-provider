import axios from 'axios';
import { NETWORK_URL } from '@env';

const url = NETWORK_URL;

//==============================To register Service Provider========================================//
export async function signUp(
  uid,
  firstName,
  lastName,
  profilePicUrl,
  // dateOfBirth,
  province,
  city,
  streetAddress,
  unitNumber,
  email,
  contactNumber,
  vehicleType,
  // driverLicenseExpiry,
  serviceLocation) {
  const res = await axios.post(`${url}/api/service-providers`, {
    uid: uid,
    firstName: firstName,
    lastName: lastName,
    profilePicUrl: profilePicUrl,
    // dateOfBirth:"01/01/2000",
    province: province,
    city: city,
    streetAddress: streetAddress,
    unitNumber: unitNumber,
    email: email,
    contactNumber: contactNumber,
    chequeDepositFormUrl: "https://i.pinimg.com/474x/40/f3/1d/40f31dd88a4ec213f8b21d1444242969.jpg",
    vehicleType: vehicleType,
    // driverLicenseExpiry:"01/01/2023",
    serviceLocation: serviceLocation,
    driverLicenseUrl: "https://i.pinimg.com/474x/40/f3/1d/40f31dd88a4ec213f8b21d1444242969.jpg",
    driverAbstractUrl: "https://i.pinimg.com/474x/40/f3/1d/40f31dd88a4ec213f8b21d1444242969.jpg",
    profileStatus: true,
    serviceProvided: "Junk Removal",
    serviceStatus: true,
    locationStatus: true
  });
  console.log('user created');
  return res
}

//================================== To get All active posts =========================================//
export async function getAllPosts() {
  try {
    const res = await axios.get(`${url}/api/posts/all`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//================================= To get posts by service ===========================================//
export async function getPostsByService(service) {
  try {
    const res = await axios.get(`${url}/api/posts/service/${service}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//================================== To get posts by location =========================================//
export async function getPostsByLocation(location) {
  try {
    const res = await axios.get(`${url}/api/posts/location/${location}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//==================================== To get single Post ===========================================//
export async function getOnePost(postId) {
  try {
    const res = await axios.get(`${url}/api/posts/one/${postId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//================================ To get post by postId and service ================================//
export async function getPostsByPostIdAndService(postId, service) {
  try {
    const res = await axios.get(`${url}/api/posts/serviceprovider/service/${postId}/${service}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

//================================ To get post by postId and location ================================//
export async function getPostsByPostIdAndLocation(postId, location) {
  try {
    const res = await axios.get(`${url}/api/posts/serviceprovider/location/${postId}/${location}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
