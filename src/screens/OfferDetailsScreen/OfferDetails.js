import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function OfferDetails({ navigation }) {
    const ServiceProviderAction = {
        _id: 'abc',
        postId: '1234',
        serviceProviderId: 'a123',
        originalPrice: '50',
        status: 'Negotiating',
        notification: 'flex',
        serviceProviderResponse: [{
            _id: 'abc123',
            serviceProviderResponse: 'Offer',
            serviceProviderActionPrice: '70',
        },
        {
            _id: 'abc1235',
            serviceProviderResponse: 'Offer',
            serviceProviderActionPrice: '65',
        }],
        userResponse: [{
            _id: 'abc1234',
            userResponse: 'Offer',
            userResponsePrice: '60'
        }]
    }

    const [offer, setOffer] = useState('')

    const onSendOffer = () => {
        navigation.navigate('OfferConfirmation')
    }

    list = () => {
        return ServiceProviderAction.serviceProviderResponse.map((e, i) => {
            return (
                e &&
                <View key={e._id}>
                    <Text> {e.serviceProviderResponse}: {e.serviceProviderActionPrice}</Text>
                    {ServiceProviderAction.userResponse[i]?
                    <Text>Response: {ServiceProviderAction.userResponse[i].userResponse}: {ServiceProviderAction.userResponse[i].userResponsePrice}</Text>:<Text>Waiting</Text>}
                </View>
            )
        })
    }

    return (
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

        </View>
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


