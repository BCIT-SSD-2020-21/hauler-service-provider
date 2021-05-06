import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import SearchByService from '../../components/searchByService/SearchByService';
import SearchByLocation from '../../components/searchByLocation/SearchByLocation';
import PostsList from '../../components/postList/PostsList';
import { Context } from '../../context/ContextProvider';
import { getPostsByServiceProviderId, getPostsByServiceProviderAndService, getPostsByServiceProviderIdAndLocation, getResponseByServiseProviderId } from '../../../network';

export default function MyJobList({ navigation }) {
    const { currentUser } = useContext(Context)

    const [posts, setPosts] = useState('')
    const [response, setResponse] = useState('')
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')

    const onViewDetailsPress = (value) => {
        navigation.navigate('PostDetails', { postId: value.postId })
    }
    const onStatusDeailsPress = (value) => {
        navigation.navigate('StatusDetails', { uid: currentUser.uid, postId: value.postId })
    }
    const searchService = async (value) => {
        const posts = await getPostsByServiceProviderAndService(currentUser && currentUser.uid, value.service)
        setPosts(posts)
    }

    const searchLocation = async (value) => {
        const posts = await getPostsByServiceProviderIdAndLocation(currentUser && currentUser.uid, value.location)
        setPosts(posts)
    }

    useEffect(() => {
        currentUser &&
            (async () => {
                const posts = await getPostsByServiceProviderId(currentUser.uid)
                setPosts(posts)
                const postIds = [posts.map(a => { return a._id })]

                const newResponse = await Promise.all(postIds[0].map(async (a) => {
                    if (!!a) {
                        return await getResponseByServiseProviderId(currentUser.uid, a);
                    } else { return null }
                }))
                setResponse(newResponse)
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
                response={response}
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

