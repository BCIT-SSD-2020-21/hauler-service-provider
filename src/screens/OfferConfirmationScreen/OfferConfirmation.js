import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function OfferConfirmation({navigation}) {

    const onReturnToHomePressed = async () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/pic1.png')} style={styles.logo} />
            <Text style={styles.heading1}>Offer sent!</Text>
            <Text style={styles.heading2}>Thank you!</Text>
            <Text style={styles.message}>Offer has been sent to the customer</Text>
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
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    heading1:{
        marginTop: 50,
        fontSize: 30
    },
    heading2:{
        marginVertical: 20,
        fontSize: 20
    },
    message:{
        fontSize: 18,
        marginBottom: 20,
        color: '#A9A9A9'
    },
    button: {
        backgroundColor: '#0077FC',
        width: '90%',
        height: 48,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

