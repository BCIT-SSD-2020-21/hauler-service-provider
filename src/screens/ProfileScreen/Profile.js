import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Modal } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import UserInfo from '../../components/userInfo/UserInfo';
import { Context } from '../../context/ContextProvider';

export default function Profile({ navigation }) {
    const serviceProvider = {
        firstName: 'John',
        lastName: 'Smith',
        province: 'BC',
        city: 'Surrey',
        streetAddress: '12',
        unitNumber: '1',
        profilePicUrl: 'https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=v2&px=999',
        dateOfBirth: '01-02-1995',
        contactNumber: '122334444',
        vehicleType: 'SUV'
    }
    const { signout, currentUser } = useContext(Context)

    const [modalVisible, setModalVisible] = useState(false)
    const [profilePicUrl, setProfilePicUrl] = useState(serviceProvider.profilePicUrl)
    const [dateOfBirth, setDob] = useState(serviceProvider.dateOfBirth)
    const [province, setProvince] = useState(serviceProvider.province)
    const [city, setCity] = useState(serviceProvider.city)
    const [streetAddress, setStreetAddress] = useState(serviceProvider.streetAddress)
    const [unitNumber, setUnitNumber] = useState(serviceProvider.unitNumber)
    const [contactNumber, setContactNumber] = useState(serviceProvider.contactNumber)
    const [vehicleType, setVehicleType] = useState(serviceProvider.vehicleType)
    const [firstName, setFirstName] = useState(serviceProvider.firstName)
    const [lastName, setLastName] = useState(serviceProvider.lastName)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const onSignOutClicked = async () => {
        try {
            setError("")
            setLoading(true)
            await signout()
            navigation.navigate('Home')
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
                            source={{
                                uri:
                                     serviceProvider.profilePicUrl ,
                            }}
                            containerStyle={{borderRadius:30, overflow: 'hidden'}}
                        />
                    </View>

                    <Text style={styles.user}>
                        {serviceProvider.firstName}
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
                            {serviceProvider.firstName}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='birthday-cake' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.dateOfBirth}
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
                            {serviceProvider.contactNumber}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.unitNumber}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.streetAddress}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.city}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='address-card' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.province}
                        </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name='truck' size={24} color='black' />
                        <Text style={styles.userInfo}>
                            {serviceProvider.vehicleType}
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
                                    firstName={firstName}
                                    lastName={lastName}
                                    province={province}
                                    city={city}
                                    streetAddress={streetAddress}
                                    unitNumber={unitNumber}
                                    profilePicUrl={profilePicUrl}
                                    dateOfBirth={dateOfBirth}
                                    contactNumber={contactNumber}
                                    vehicleType={vehicleType}
                                    setCity={setCity}
                                    setStreetAddress={setStreetAddress}
                                    setUnitNumber={setUnitNumber}
                                    setDob={setDob}
                                    setContactNumber={setContactNumber}
                                    setProvince={setProvince}
                                    setVehicleType={setVehicleType}
                                    setFirstName={setFirstName}
                                    setLastName={setLastName}
                                    setProfilePicUrl={setProfilePicUrl}
                                    setError={setError}
                                />
                                <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={[styles.buttons, styles.logOutButton]}
                                    onPress={() => onEditSubmitted()}>
                                    <Text style={styles.buttonTitle}>Submit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.buttons, styles.logOutButton]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.buttonTitle}>Close</Text>
                                </TouchableOpacity>
                                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 10,
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

