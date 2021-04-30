import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/searchByService/SearchByService';
import SearchByLocation from '../../components/searchByLocation/SearchByLocation';
import PostsList from '../../components/postList/PostsList';

export default function MyJobList({navigation}) {
    const posts = [{
        _id: '1234',
        service: 'Junk Removal',
        postHeading: 'Bed, Sofa and Tv Stand to dispose',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    },
    {
        _id: '12345',
        service: 'Moving',
        postHeading: 'Bed, Sofa and Tv Stand to move',
        postDescription: ' MovingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        dropOffCity: 'Hope',
        dropOffProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    },
    {
        _id: '123456',
        service: 'Moving',
        postHeading: 'Bed, Sofa and Tv Stand to move',
        postDescription: ' MovingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        dropOffCity: 'Hope',
        dropOffProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    }]

    const ServiceProviderAction = [{
        _id: 'abc',
        postId: '1234',
        status: 'Negotiating',
        notification: 'flex',
        serviceProviderResponse: [{
            serviceProviderResponse: 'Offer',
            serviceProviderActionPrice: '70',
        }]
    },
    {
        _id: 'bcd',
        postId: '12345',
        status: 'Accepted',
        notification: 'none',
        serviceProviderResponse: [{
            serviceProviderResponse: 'Accept',
            serviceProviderActionPrice: '50',
        },
    ]
    },
    {
        _id: 'bcde',
        postId: '123456',
        status: 'Accepted',
        notification: 'flex',
        serviceProviderResponse: [{
            serviceProviderResponse: 'Accept',
            serviceProviderActionPrice: '50',
        },
    ]
    }];

    const [location, setLocation] = useState('')
    const [service, setService] = useState('')

    const onViewDetailsPress = () => {
        console.log("Details pressed")
    }
    const onStatusDeailsPress = () => {
        navigation.navigate('StatusDetails')
    }

    return (
        <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
            />
            <PostsList
                posts={posts}
                onViewDetailsPress={onViewDetailsPress}
                ServiceProviderAction={ServiceProviderAction}
                onStatusDeailsPress={onStatusDeailsPress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '10%',
        width: '100%',
        height: '100%'
    }
})

