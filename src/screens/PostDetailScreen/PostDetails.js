import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { getOnePost } from '../../../network';
import PostInfo from '../../components/postInfo/PostInfo';

export default function PostDetails({navigation, route }) {
    const [posts, setPosts] = useState('')
    const { postId } = route.params;
    const onAccept = () => {
        navigation.navigate('JobConfirmation', {posts:posts})
    }

    const onOffer = () => {
        navigation.navigate('OfferDetails')
    }

    useEffect(() => {
        (async () => {
            const post = await getOnePost(postId)
            setPosts(post)
        })()
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <PostInfo
                    posts={posts}
                />
                <View style={styles.priceContainer}>
                <Text style={styles.infoKey}>Quoted Price</Text>
                <Text style={styles.infoValue}> ${posts.price}</Text>
                </View>
                <TouchableOpacity
                    style={[styles.button, styles.acceptButton]}
                    onPress={() => onAccept()}>
                    <Text style={styles.buttonTitle}>ACCEPT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button,styles.offerButton]}
                    onPress={() => onOffer()}>
                    <Text style={styles.buttonTitle}>OFFER</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '2%',
        width: '100%',
        height: '100%'
    },
    priceContainer:{
        width: '95%',
        flexDirection:'row',
        marginVertical: 10
    },
    infoKey: {
        color: '#A9A9A9',
        width: 140,
    },
    infoValue: {
        overflow: 'hidden',
        marginRight: 10,
        width: '65%'
    },
    button: {
        marginVertical: 10,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%'
    },
    acceptButton:{
        
        backgroundColor: '#A9A9A9',
    },
    offerButton:{
        backgroundColor: '#0077FC',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginVertical: '1%',
        marginHorizontal: '2%',
        paddingHorizontal: 10
    },
})

