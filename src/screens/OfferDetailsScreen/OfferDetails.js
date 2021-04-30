import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import OfferInfo from '../../components/offerInfo/OfferInfo';

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

    return (
        <OfferInfo
            ServiceProviderAction={ServiceProviderAction}
            setOffer={setOffer}
            onSendOffer={onSendOffer}
            offer={offer}
        />
    )
}



