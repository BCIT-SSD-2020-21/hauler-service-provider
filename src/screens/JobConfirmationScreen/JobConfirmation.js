import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import PostInfo from '../../components/postInfo/PostInfo';

export default function JobConfirmation() {
    const posts = {
        userId: "hbsdhfvajfhasmdf",
        _id: '1234',
        service: 'Junk Removal',
        postHeading: 'Bed, Sofa and Tv Stand to dispose',
        postDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        loadWeight: "Medium",
        numberOfItems: "4",
        loadImages: [{
            _id: '1',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '2',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '3',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '4',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '5',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '6',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '7',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '8',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '9',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            _id: '10',
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        }],
        pickUpProvince: "BC",
        pickUpCity: "Surrey",
        pickUpStreetAddress: "123 abc Street",
        pickUpZipCode: "AB1 12C",
        pickUpContactPerson: "John",
        pickUpContactNumber: "64 1234567",
        pickUpSpecialInstruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        dropOffProvince: "BC",
        dropOffCity: "Hope",
        dropOffStreetAddress: "234 defg Street",
        dropOffZipCode: "V3W 12D",
        dropOffContactPerson: "Sam",
        dropOffContactNumber: "64 3456789",
        dropOffSpecialInstruction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        price: 60
    }

    const [offer, setOffer] = useState('')

    const onAccept = () => {
        console.log("post accepted at original price")
    }

    const onOffer = () => {
        console.log('offer sent')
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
                <Text>Price: ${posts.price}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onAccept()}>
                    <Text style={styles.buttonTitle}>ACCEPT</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder='Enter offer price'
                    placeholderTextColor='#C0C0C0'
                    onChangeText={(price) => { setOffer(price) }}
                    value={offer}
                />
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