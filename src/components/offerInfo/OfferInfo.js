import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';

export default function OfferInfo({ navigation, ServiceProviderAction, setOffer, onSendOffer, offer, onAccept, onDecline }) {

    list = () => {
        return ServiceProviderAction.serviceProviderResponse.map((e, i) => {
            return (
                e &&
                <View key={e._id}>
                    <Text> {e.serviceProviderResponse}: {e.serviceProviderActionPrice}</Text>
                    {ServiceProviderAction.userResponse[i] ?
                        <Text>Response: {ServiceProviderAction.userResponse[i].userResponse}: {ServiceProviderAction.userResponse[i].userResponsePrice}</Text> : <Text>Waiting</Text>}
                </View>
            )
        })
    }

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text>Original Price: {ServiceProviderAction.originalPrice}</Text>
            {list()}
            <TextInput
                style={styles.input}
                placeholder='Enter offer price'
                placeholderTextColor='#C0C0C0'
                onChangeText={(price) => { setOffer(price) }}
                value={offer}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onSendOffer()}>
                <Text style={styles.buttonTitle}>SEND OFFER</Text>
            </TouchableOpacity>
            {onAccept?
            <>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onAccept()}>
                <Text style={styles.buttonTitle}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => onDecline()}>
                <Text style={styles.buttonTitle}>DECLINE</Text>
            </TouchableOpacity>
            </>
            :
            <View></View>}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: '2%',
        width: '100%',
        height: '100%'
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


