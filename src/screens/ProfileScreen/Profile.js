import React, { useState, useContext } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import UserInfo from '../../components/userInfo';
import { Context } from '../../context/ContextProvider';

export default function Profile() {
    const serviceProvider = {
        email: 'John@gmail.com',
        dob: '1992/01/01',
        address: '123 abc Street, Surrey, ABC 123',
        phoneNumber: '1234567',
        vehileType: 'SUV',
        flname: 'John'
    }
    const { signout, currentUser } = useContext(Context)

    const [modalVisible, setModalVisible] = useState(false)
    const [dob, setDob] = useState(serviceProvider.dob)
    const [address, setAddress] = useState(serviceProvider.address)
    const [phoneNumber, setphoneNumber] = useState(serviceProvider.phoneNumber)
    const [vehileType, setVehileType] = useState(serviceProvider.vehileType)
    const [flname, setFlName] = useState(serviceProvider.flname)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const onSignOutClicked = async () => {
        try {
            setError("")
            setLoading(true)
            await signout()
        } catch {
            setError("Failed to Log out")
        }
        setLoading(false)
    }

    const onEditClicked = async () => {
        setModalVisible(true)
    }
    const onEditSubmitted = async () => {
        setModalVisible(!modalVisible)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                <Text > {error && alert(error)}</Text>
                    <View style={styles.avatar}>
                        <Avatar
                            title='name'
                            size='xlarge'
                            rounded
                            source={{
                                uri:
                                    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                            }}
                        />
                    </View>

                    <Text style={styles.user}>
                        {serviceProvider.flname}
                    </Text>
                    <View style={styles.headerContainer} >
                        <FontAwesome name='star' size={20} color='#2EBCAC' />
                        <FontAwesome name='star' size={20} color='#2EBCAC' />
                        <FontAwesome name='star' size={20} color='#2EBCAC' />
                        <FontAwesome name='star' size={20} color='#2EBCAC' />
                        <FontAwesome name='star' size={20} color='#2EBCAC' />
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='user' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.flname}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='birthday-cake' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.dob}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='envelope' size={24} color='black' />
                        <Text style={styles.userInfo}>
                        {currentUser && currentUser.email}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='phone' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.phoneNumber}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.address}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='truck' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.vehileType}
                        </Text>

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
                                <UserInfo
                                    dob={dob}
                                    address={address}
                                    phoneNumber={phoneNumber}
                                    vehileType={vehileType}
                                    flname={flname}
                                    setDob={setDob}
                                    setAddress={setAddress}
                                    setphoneNumber={setphoneNumber}
                                    setVehileType={setVehileType}
                                    setFlName={setFlName}
                                />
                                <TouchableOpacity
                                    style={[styles.buttons, styles.logOutButton]}
                                    onPress={() => onEditSubmitted()}>
                                    <Text style={styles.buttonTitle}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttons, styles.editButton]}
                        disabled={loading}
                        onPress={() => onEditClicked()}>
                        <Text style={styles.buttonTitle}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttons, styles.logOutButton]}
                        disabled={loading}
                        onPress={() => onSignOutClicked()}>
                        <Text style={styles.buttonTitle}>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 20,
        width: '100%'
    },
    profileContainer: {
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {
        alignItems: 'center'
    },
    user: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        color: '#5C5C5C',
        marginBottom: 10
    },
    infoContainer: {
        flexDirection: 'row'
    },
    infoIcon: {
        marginHorizontal: 20,
        marginVertical: 20,
    },
    userInfo: {
        color: 'black',
        fontSize: 20,
        marginVertical: 20,
    },
    modalContainer: {
        margin: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    buttons: {

        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editButton: {
        backgroundColor: '#16B3D5',
    },
    logOutButton: {
        backgroundColor: '#F68347',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
})

