import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ImageList from '../imageList/ImageList';

export default function PostInfo({ posts }) {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Post Heading</Text>
                <Text style={styles.infoValue}>{posts.postHeading}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Post Description</Text>
                <Text style={styles.infoValue}>{posts.postDescription}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Total Weight</Text>
                <Text style={styles.infoValue}>{posts.loadWeight}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Number of items </Text>
                <Text style={styles.infoValue}>{posts.numberOfItems}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Pick Up Address</Text>
                <Text style={styles.infoValue}>
                    {posts.pickUpStreetAddress}, {posts.pickUpCity}, {posts.pickUpProvince}, {posts.pickUpZipCode}
                </Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Pick Up Instructions</Text>
                <Text style={styles.infoValue}>{posts.pickUpSpecialInstruction}</Text>
            </View>

            {posts.dropOffStreetAddress &&
            <View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoKey}>Drop Off Address</Text>
                    <Text style={styles.infoValue}>
                        {posts.dropOffStreetAddress}, {posts.dropOffCity}, {posts.dropOffProvince}, {posts.dropOffZipCode}
                    </Text>
                </View>
                <View style={styles.infoContainer}>
                <Text style={styles.infoKey}>Drop Off Instructions</Text>
                <Text style={styles.infoValue}>{posts.dropOffSpecialInstruction}</Text>
            </View>
            </View>
            }
            <View style={styles.imageContainer}>
                <Text style={styles.infoKey}>Images</Text>
                <Text>
                    {posts &&
                        <ImageList
                            loadImages={posts.loadImages}
                        />
                    }
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
    },
    infoContainer: {
        flexDirection: 'row',
        marginVertical: 10
    },
    imageContainer: {
        marginVertical: 10
    },
    infoKey: {
        color: '#A9A9A9',
        width: 140,
    },
    infoValue: {
        marginRight: 10,
        width: '65%'
    },





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
        overflow: 'hidden',
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

