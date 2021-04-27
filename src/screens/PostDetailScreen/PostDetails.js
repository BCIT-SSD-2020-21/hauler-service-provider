import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function PostDetails() {
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

    const onAccept =() =>{
        console.log("post accepted at original price")
    }

    const onOffer = () => {
        console.log('offer sent')
    }

    list = () => {
        return posts.loadImages.map((e) => {
            return (
                e &&
                <Image key={e._id} style={styles.image} source={{ uri: e.imageUrl }} />
            )
        })
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.heading}>{posts.postHeading}</Text>
                    <Text style={styles.description}>{posts.postDescription}</Text>
                    <View style={styles.measurementsContainer}>
                    <Text>Weight: {posts.loadWeight}</Text>
                    <Text>Number of items: {posts.numberOfItems}</Text>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    {list()}
                </View>
                <Text>Pick Up Address</Text>
                <View style={styles.addressContainer}>
                    <Text>
                        {posts.pickUpStreetAddress}
                    </Text>
                    <Text>
                        {posts.pickUpCity} {posts.pickUpProvince} {posts.pickUpZipCode}
                    </Text>
                </View>
                <Text>Drop Off Address</Text>
                <View style={styles.addressContainer}>
                    <Text>
                        {posts.dropOffStreetAddress}
                    </Text>
                    <Text>
                        {posts.dropOffCity} {posts.dropOffProvince} {posts.dropOffZipCode}
                    </Text>
                </View>
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
    addressContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        width: '90%'
    },
    heading: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight:'bold'
    },
    description:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    measurementsContainer:{
       alignItems:'center',
       marginVertical: 10
    },
    imageContainer: {
        flexDirection: 'row',
        width: '90%',
        flexWrap: 'wrap'
    },
    detailsContainer: {
        width: '90%'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 10
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

