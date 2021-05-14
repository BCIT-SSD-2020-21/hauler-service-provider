import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import PostInfo from '../../components/postInfo/PostInfo';

export default function JobConfirmation({ navigation, route }) {
    const { posts, actionPrice } = route.params;
    const contact = "show"
    const onJobListPressed = () => {
        navigation.navigate('MyJobListNavigator', { screen: 'MyJobList' })
    }

    const onSearchPressed = () =>{
        navigation.navigate('SearchJobsNavigator', {screen:'SearchJobs'})
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
                    style={[styles.button, styles.listButton]}
                    onPress={() => onJobListPressed()}>
                    <Text style={[styles.buttonTitle, styles.listTitle]}>My Job List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onSearchPressed()}>
                    <Text style={styles.buttonTitle}>Search More Jobs</Text>
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
        width: '90%'
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
        width: '65%',
        fontWeight: 'bold'
    },
    listButton:{
backgroundColor: '#E0E0E0'
    },
    listTitle:{
        color: 'black'
    }
})