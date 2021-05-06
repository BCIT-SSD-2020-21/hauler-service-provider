import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import PostInfo from '../../components/postInfo/PostInfo';

export default function JobConfirmation({navigation, route}) {
    const { posts, actionPrice } = route.params;
    const onJobListPressed = () => {
        navigation.navigate('MyJobListNavigator')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.contactInfoContainer}>
                    <Text style={styles.heading}>Pick Up Contact Information</Text>
                <Text>{posts.pickUpContactPerson}</Text>
                <Text>{posts.pickUpContactNumber}</Text>
                </View>
                {posts.dropOffContactPerson &&
                <View style={styles.contactInfoContainer}>
                    <Text style={styles.heading}>Drop Off Contact Information</Text>
                <Text>{posts.dropOffContactPerson}</Text>
                <Text>{posts.dropOffContactNumber}</Text>
                </View>
                }
                <PostInfo
                    posts={posts}
                />
                <Text>Total Earning: ${actionPrice ? actionPrice : posts.price}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onJobListPressed()}>
                    <Text style={styles.buttonTitle}>My Job List</Text>
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
        paddingVertical: '10%',
        width: '100%',
        height: '100%'
    },
    contactInfoContainer:{
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        width: '90%'
    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold'
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