import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/searchByService/SearchByService';
import SearchByLocation from '../../components/searchByLocation/SearchByLocation';
import PostsList from '../../components/postList/PostsList';
import { getAllPosts } from '../../../network';

export default function SearchJobs({navigation}) {
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [posts, setPosts] = useState('')

    const onViewDetailsPress = () => {
        navigation.navigate('PostDetails')
    }

    useEffect(() => {
        (async() =>{
           const newPosts = await getAllPosts()
           setPosts(newPosts)
        })()
    }, [])

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
                ServiceProviderAction=""
                onStatusDeailsPress=""
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    }
})

