import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';
import { addServiceProviserResponse, getResponseByServiseProviderId } from '../../../network';
import OfferInfo from '../../components/offerInfo/OfferInfo';

export default function StatusDetails({ navigation, route }) {
    const { uid, postId } = route.params;

    const [response, setResponse] = useState('')
    const [offer, setOffer] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [reset, setReset] = useState(true)

    const onSendOffer = async () => {
        await addServiceProviserResponse(postId,
            uid,
            'Negotiating',
            true,
            'Offer',
            offer,
            'false')
        setReset(!reset);
        navigation.navigate('OfferConfirmation')
    }
    const onDecline = () => {
        setModalVisible(true)
    }

    const onDeclineConfirmed = () => {
        setModalVisible(!modalVisible)
        console.log("offerdeclined")
    }
    const onAccept = () => {
        navigation.navigate('JobConfirmation')
    }

    useEffect(() => {
        (async () => {
            const newResponse = await getResponseByServiseProviderId(uid, postId)
            setResponse(newResponse[0])
        })()
    }, [reset])

    return (
        <>
            <Modal
                animationType='slide'
                transparent={false}
                opacity={0.5}
                visible={modalVisible}
                backdropOpacity={0.5}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <Text>Are you sure you want to decline? Doing so will end comminication on this post</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.buttons, styles.actionButton]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.buttonTitle}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.buttons, styles.actionButton]}
                            onPress={() => onDeclineConfirmed()}>
                            <Text style={styles.buttonTitle}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <OfferInfo
                response={response}
                setOffer={setOffer}
                onSendOffer={onSendOffer}
                offer={offer}
                onDecline={onDecline}
                onAccept={onAccept}
            />
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 250
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttons: {
        margin: 10,
        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        backgroundColor: '#F68347',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})
