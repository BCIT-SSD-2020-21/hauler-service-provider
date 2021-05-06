import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';

export default function OfferInfo({response, setOffer, onSendOffer, offer, onAccept, onDecline }) {

   const list = () => {
        return response.serviceProviderResponseSchema.map((e, i) => {
            return (
                e &&
                <View key={e._id}>
                    <Text> {e.serviceProviderResponse}: {e.serviceProviderActionPrice}</Text>
                    {response.userResponseSchema[i] ?
                        <Text>Response: {response.userResponseSchema[i].userResponse}: {response.userResponseSchema[i].userResponsePrice}</Text> : <Text>Waiting</Text>}
                </View>
            )
        })
    }

    return (
        <ScrollView>
            {response ?
        <View style={styles.container}>
            <Text>Original Price: {response.originalPrice}</Text>
            {list()}
            <TextInput
                style={styles.input}
                placeholder='Enter offer price'
                placeholderTextColor='#C0C0C0'
                onChangeText={(price) => { setOffer(price) }}
                value={offer}
            />
            <TouchableOpacity
            disabled={response.serviceProviderActionButtons}
                style={styles.button}
                onPress={() => onSendOffer()}>
                <Text style={styles.buttonTitle}>SEND OFFER</Text>
            </TouchableOpacity>
            {onAccept?
            <>
            <TouchableOpacity
            disabled={response.serviceProviderActionButtons}
                style={styles.button}
                onPress={() => onAccept()}>
                <Text style={styles.buttonTitle}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity
            disabled={response.serviceProviderActionButtons}
                style={styles.button}
                onPress={() => onDecline()}>
                <Text style={styles.buttonTitle}>DECLINE</Text>
            </TouchableOpacity>
            </>
            :
            <View></View>}
        </View>:<View></View>}
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