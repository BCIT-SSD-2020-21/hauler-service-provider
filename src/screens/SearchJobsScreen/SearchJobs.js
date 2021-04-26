import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Card, Button, Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import SearchByService from '../../components/SearchByService';
import SearchByLocation from '../../components/SearchByLocation';

export default function SearchJobs() {
    const posts = [{
        _id: '1234',
        service: 'Junk Removal',
        postHeading: 'Bed, Sofa and Tv Stand to dispose',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        loadImages: [{
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
    },
    {
        _id: '12345',
        service: 'Moving',
        postHeading: 'Bed, Sofa and Tv Stand to move',
        postDescription: ' MovingLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        pickUpCity: 'Surrey',
        pickUpProvince: 'BC',
        dropOffCity: 'Hope',
        dropOffProvince: 'BC',
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
            <SearchByLocation 
            location={location} 
            setLocation={setLocation}
            />
        <SearchByService 
        service= {service} 
        setService= {setService}
            />
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
                                    onPress={onViewDetailsPress}
                                    title='View Details' />
                            </Card>
                        </View>
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

