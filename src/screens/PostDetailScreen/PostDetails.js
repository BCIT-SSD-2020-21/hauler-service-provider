import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

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
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
            imageUrl: 'https://samsjunkremoval.ca/wp-content/uploads/2013/04/158-660x371.jpg'
        },
        {
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

    return (
        <View style={styles.container}>
            <View>
             <Text>{posts.postHeading}</Text>
             <Text>{posts.postDescription}</Text>
             <Text>{posts.loadWeight}</Text>
             <Text>{posts.numberOfItems}</Text>
         </View>
         <View>
         <Image style={styles.cardImage} source={{ uri: posts.loadImages[0].imageUrl }} />
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
         <View>

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
    addressContainer:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        width: '90%'
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

