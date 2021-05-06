import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, Badge, Button } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

export default function PostsList({ posts, onViewDetailsPress, response, onStatusDeailsPress }) {

    return (
        <FlatList
            data={posts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
                return (
                    item &&
                    <View style={styles.cardContainer}>
                        <Card style={styles.cardSubContainer}>
                            <Card.Title style={styles.cardTitle}>
                                {item.service}</Card.Title>
                            {(response.length > 0) ?
                                <Badge
                                    badgeStyle={{ display: response[index][0].notificationOnServiceProvider }}
                                    status="success"
                                    value={response[index][0].serviceProviderResponseSchema[response[index][0].serviceProviderResponseSchema.length - 1].serviceProviderResponse}
                                    containerStyle={{ position: 'absolute', top: -20, left: -30 }}
                                /> :
                                <View></View>}
                            <Card.Divider />
                            <Image style={styles.cardImage} source={{ uri: item.loadImages[0].imageUrl }} />
                            <Text style={styles.cardText}>
                                {item.postHeading}
                            </Text>
                            <Text style={styles.cardText}>
                                {item.pickUpCity}, {item.pickUpProvince}
                                {item.dropOffCity &&
                                    <Text style={styles.cardText}> to {item.dropOffCity}, {item.dropOffProvince}
                                    </Text>}
                            </Text>
                            {(response.length > 0) ?
                                <Button
                                    buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }}
                                    onPress={() => onStatusDeailsPress({ postId: item._id })}
                                    title={response[index][0].responseStatus}
                                /> :
                                <View></View>}
                            <Button
                                buttonStyle={{ borderRadius: 5, backgroundColor: '#16B3D5', marginTop: 10 }}
                                onPress={() => onViewDetailsPress({ postId: item._id })}
                                title='View Details'
                            />
                        </Card>
                    </View>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        position: 'relative',
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

