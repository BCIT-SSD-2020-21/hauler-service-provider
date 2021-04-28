import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function OfferConfirmation() {

    const onSearchJobsPressed = async () => {
        console.log("Search Job Pressed")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.message}>CONFIRMATION</Text>
            <Text style={styles.message}>YOUR OFFER HAS BEEN SENT TO THE CLIENT</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onReturnToHomePressed()}>
                <Text style={styles.buttonTitle}>RETURN TO HOME</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    message:{
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#16B3D5',
        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

