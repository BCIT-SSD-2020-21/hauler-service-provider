import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageList from '../imageList/ImageList';

export default function PostInfo({ posts }) {
    return (
        <View>
            <View style={styles.detailsContainer}>
                <Text style={styles.heading}>{posts.postHeading}</Text>
                <Text style={styles.description}>{posts.postDescription}</Text>
                <View style={styles.measurementsContainer}>
                    <Text>Weight: {posts.loadWeight}</Text>
                    <Text>Number of items: {posts.numberOfItems}</Text>
                </View>
            </View>
            <ImageList
                loadImages={posts.loadImages}
            />
            <View style={styles.addressContainer}>
                <Text>Pick Up Address</Text>
                <View style={styles.addressSubContainer}>
                    <Text>
                        {posts.pickUpStreetAddress}
                    </Text>
                    <Text>
                        {posts.pickUpCity} {posts.pickUpProvince} {posts.pickUpZipCode}
                    </Text>
                </View>
            </View>

            {posts.dropOffStreetAddress &&
                <View style={styles.addressContainer}>
                    <Text>Drop Off Address</Text>
                    <View style={styles.addressSubContainer}>
                        <Text>
                            {posts.dropOffStreetAddress}
                        </Text>
                        <Text>
                            {posts.dropOffCity} {posts.dropOffProvince} {posts.dropOffZipCode}
                        </Text>
                    </View>
                </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    addressSubContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        width: '90%'
    },
    addressContainer: {
        alignItems: 'center',
    },
    heading: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    measurementsContainer: {
        alignItems: 'center',
        marginVertical: 10
    },
    detailsContainer: {
        width: '90%'
    },

})

