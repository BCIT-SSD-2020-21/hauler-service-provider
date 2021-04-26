import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Card, Button, Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function SearchJobs() {
    const posts = [{
        _id: '1234',
        service: 'Junk Removal',
        postHeading: 'Bed, Sofa and Tv Stand to dispose',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    },
    {
        _id: '12345',
        service: 'Moving',
        postHeading: 'Bed, Sofa and Tv Stand to move',
        postDescription: ' MovingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    }]
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')

    const onViewDetailsPress = () => {
        console.log("Details pressed")
    }

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <RNPickerSelect
                    value={location}
                    useNativeAndroidPickerStyle={false}
                    style={{
                        inputAndroid: {
                            fontSize: 14,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            color: 'black'
                        },
                    }}
                    onValueChange={(value) => setLocation(value)}
                    placeholder={{ label: "Search by location", value: null }}
                    items={[
                        { label: 'Surrey', value: 'Surrey' },
                        { label: 'Langely', value: 'Langely' },
                        { label: 'Richmond', value: 'Richmond' },
                    ]}
                />
            </View>
            <View style={styles.search}>
                <RNPickerSelect
                    value={service}
                    useNativeAndroidPickerStyle={false}
                    style={{
                        inputAndroid: {
                            fontSize: 14,
                            paddingHorizontal: 10,
                            paddingVertical: 8,
                            color: 'black'
                        },
                    }}
                    onValueChange={(value) => setService(value)}
                    placeholder={{ label: "Search by service", value: null }}
                    items={[
                        { label: 'Junk Removal', value: 'Junk Removal' },
                        { label: 'Moving', value: 'Moving' },
                        { label: 'Errand', value: 'Errand' },
                    ]}
                />
            </View>
            <FlatList
                data={posts}
                keyExtractor={post => post._id}
                renderItem={(post) => {
                    return (
                        post &&
                        <Card >
                            <Card.Title style={styles.cardTitle}>
                                {post.item.service}</Card.Title>
                            <Card.Divider />
                            <Image style={styles.cardImage} source={{ uri: post.item.loadImages[0].imageUrl }} />
                            <Text style={styles.cardText}>
                                {post.item.postHeading}
                            </Text>
                            <Button
                                buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }}
                                onPress={onViewDetailsPress}
                                title='View Details' />
                        </Card>
                    )
                }}
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
    },
    search: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 5
    },
    cardImage: {
        width: 250,
        height: 150
    },
    cardText: {
        marginTop: 10,
        width: 250
    },
    cardTitle: {
        color: '#2EBCAC'
    }

})

