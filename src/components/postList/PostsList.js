import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function PostsList({posts, onViewDetailsPress}) {
    return (
            <FlatList
                data={posts}
                keyExtractor={post => post._id}
                renderItem={(post) => {
                    return (
                        post &&
                        <View style={styles.cardContainer}>
                            <Card >
                                <Card.Title style={styles.cardTitle}>
                                    {post.item.service}</Card.Title>
                                <Card.Divider />
                                <Image style={styles.cardImage} source={{ uri: post.item.loadImages[0].imageUrl }} />
                                <Text style={styles.cardText}>
                                    {post.item.postHeading}
                                </Text>
                                <Text style={styles.cardText}>
                                    {post.item.pickUpCity}, {post.item.pickUpProvince}
                                    {post.item.dropOffCity &&
                                        <Text style={styles.cardText}> to {post.item.dropOffCity}, {post.item.dropOffProvince}
                                        </Text>
                                    }
                                </Text>
                                <Button
                                    buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }}
                                    onPress={()=>onViewDetailsPress()}
                                    title='View Details' />
                            </Card>
                        </View>
                    )
                }}
            />
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%'
    },
    cardImage: {
        width: 250,
        height: 150,
        alignSelf: 'center'
    },
    cardText: {
        marginTop: 10,
        width: 300,
        textAlign: 'center'
    },
    cardTitle: {
        color: '#2EBCAC'
    }

})

