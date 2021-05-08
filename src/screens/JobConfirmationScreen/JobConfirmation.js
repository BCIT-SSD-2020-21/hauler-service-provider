import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import PostInfo from '../../components/postInfo/PostInfo';

export default function JobConfirmation({ navigation, route }) {
    const { posts, actionPrice } = route.params;
    const contact = "show"
    const onJobListPressed = () => {
        navigation.navigate('MyJobListNavigator')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <PostInfo
                    posts={posts}
                    contact={contact}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoKey}>Total Earning</Text>
                    <Text style={styles.infoValue}>$ {actionPrice ? actionPrice : posts.price}</Text>
                </View>
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
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#0077FC',
        marginVertical: 10,
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    infoContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        width: '95%'
    },
    infoKey: {
        color: '#A9A9A9',
        width: 140,
    },
    infoValue: {
        marginRight: 10,
        width: '65%'
    },
})