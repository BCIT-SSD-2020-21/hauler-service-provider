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
                <Text>Price: ${posts.price}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAccept()}>
                    <Text style={styles.buttonTitle}>ACCEPT</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onOffer()}>
                    <Text style={styles.buttonTitle}>OFFER</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: '2%',
        width: '100%',
        height: '100%'
    },

    button: {
        backgroundColor: 'black',
        marginVertical: 10,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
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

