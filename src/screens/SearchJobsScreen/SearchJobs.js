import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/searchByService/SearchByService';
import SearchByLocation from '../../components/searchByLocation/SearchByLocation';
import PostsList from '../../components/postList/PostsList';
import { getAllPosts, getPostsByLocation, getPostsByService } from '../../../network';

export default function SearchJobs({ navigation }) {
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [posts, setPosts] = useState('')

    const onViewDetailsPress = (value) => {
        navigation.navigate('PostDetails', {postId:value.postId})
    }

    const searchService = async (value) => {
        const newPosts = await getPostsByService(value.service)
        setPosts(newPosts)
    }

    const searchLocation = async (value) => {
        const newPosts = await getPostsByLocation(value.location)
        setPosts(newPosts)
    }

    useEffect(() => {
        (async () => {
            const newPosts = await getAllPosts()
            setPosts(newPosts)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <SearchByLocation
                location={location}
                setLocation={setLocation}
                searchLocation={searchLocation}
            />
            <SearchByService
                service={service}
                setService={setService}
                searchService={searchService}
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

