import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ImageList({ loadImages }) {
    list = () => {
        return loadImages.map((e) => {
            return (
                e &&
                <Image key={e._id} style={styles.image} source={{ uri: e.imageUrl }} />
            )
        })
    }

    return (
        <View style={styles.imageContainer}>
            {list()}
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        width: '90%',
        flexWrap: 'wrap'
    },
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 10
    },
})

