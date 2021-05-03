import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native';
import UserInfo from '../../components/userInfo/UserInfo';
import { Context } from '../../context/ContextProvider';
import { signUp } from '../../../network';

export default function Signup({ navigation }) {
    const { signup, currentUser } = useContext(Context)

    const [uid, setUid] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePicUrl, setProfilePicUrl] = useState('')
    const [dateOfBirth, setDob] = useState('')
    const [province, setProvince] = useState('')
    const [city, setCity] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [unitNumber, setUnitNumber] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [driverLicenseExpiry, setExpiryDate] = useState('')
    const [serviceLocation, setLocationOfService] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const onSignUpClicked = async () => {
        if (password !== confirmPassword) {
            setError("Password does not match")
            return
        }
        try {
            setError("")
            setLoading(true)
            const response = await signup(email, password)
            const currentUid = response.user.uid
            setUid(currentUid)
            await signUp(currentUid,
                firstName,
                lastName,
                profilePicUrl,
                // dateOfBirth,
                province,
                city,
                streetAddress,
                unitNumber,
                email,
                contactNumber,
                vehicleType,
                // driverLicenseExpiry,
                serviceLocation,
            )
            navigation.navigate('Home')
        } catch (err) {
            setError(err.message)
        }
        setLoading(false)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={{ flex: 1, width: '100%' }}>
                    <Image source={require('../../../assets/haulerLogo.png')} style={styles.logo} />
                    <Text style={styles.heading}>Register</Text>
                    <Text > {error && alert(error)}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#C0C0C0'
                        onChangeText={(email) => { setError(""); setEmail(email) }}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='#C0C0C0'
                        secureTextEntry
                        onChangeText={(password) => { setError(""); setPassword(password) }}
                        value={password}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        placeholderTextColor='#C0C0C0'
                        secureTextEntry
                        onChangeText={(password) => { setError(""); setConfirmPassword(password) }}
                        value={confirmPassword}
                    />
                    <UserInfo
                        dateOfBirth={dateOfBirth}
                        province={province}
                        city={city}
                        streetAddress={streetAddress}
                        unitNumber={unitNumber}
                        contactNumber={contactNumber}
                        vehicleType={vehicleType}
                        firstName={firstName}
                        lastName={lastName}
                        profilePicUrl={profilePicUrl}
                        setProvince={setProvince}
                        setCity={setCity}
                        setStreetAddress={setStreetAddress}
                        setUnitNumber={setUnitNumber}
                        setProfilePicUrl={setProfilePicUrl}
                        setLastName={setLastName}
                        setDob={setDob}
                        setContactNumber={setContactNumber}
                        setVehicleType={setVehicleType}
                        setFirstName={setFirstName}
                        setError={setError}
                    />
                    <Picker
                        style={styles.input}
                        selectedValue={serviceLocation}
                        onValueChange={(locationOfService) => { setError(""); setLocationOfService(locationOfService) }}
                    >
                        <Picker.Item label='Select Location Of Service' value='' style={{ color: '#C0C0C0' }} />
                        <Picker.Item label='Abbotsford' value='Abbotsford' />
                        <Picker.Item label='Armstrong' value='Armstrong' />
                        <Picker.Item label='Burnaby' value='Burnaby' />
                        <Picker.Item label='Campbell River' value='Campbell River' />
                        <Picker.Item label='Castlegar' value='Castlegar' />
                        <Picker.Item label='Chilliwack' value='Chilliwack' />
                        <Picker.Item label='Colwood' value='Colwood' />
                        <Picker.Item label='Coquitlam' value='Coquitlam' />
                        <Picker.Item label='Courtenay' value='Courtenay' />
                        <Picker.Item label='Cranbrook' value='Cranbrook' />
                        <Picker.Item label='Dawson Creek' value='Dawson Creek' />
                        <Picker.Item label='Delta' value='Delta' />
                        <Picker.Item label='Duncan' value='Duncan' />
                        <Picker.Item label='Enderby' value='Enderby' />
                        <Picker.Item label='Fernie' value='Fernie' />
                        <Picker.Item label='Fort St. John' value='Fort St. John' />
                        <Picker.Item label='Grand Forks' value='Grand Forks' />
                        <Picker.Item label='Greenwood' value='Greenwood' />
                        <Picker.Item label='Hope' value='Hope' />
                        <Picker.Item label='Kamloops' value='Kamloops' />
                        <Picker.Item label='Kelowna' value='Kelowna' />
                        <Picker.Item label='Kimberley' value='Kimberley' />
                        <Picker.Item label='Langford' value='Langford' />
                        <Picker.Item label='Langley' value='Langley' />
                        <Picker.Item label='Maple Ridge' value='Maple Ridge' />
                        <Picker.Item label='Mission' value='Mission' />
                        <Picker.Item label='New Westminster' value='New Westminster' />
                        <Picker.Item label='North Vancouver' value='North Vancouver' />
                        <Picker.Item label='Richmond' value='Richmond' />
                        <Picker.Item label='Vancouver' value='Vancouver' />
                        <Picker.Item label='Whistler' value='Whistler' />
                    </Picker>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttons}>
                            <Text style={styles.buttonTitle}>Upload Viod Cheque</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}>
                            <Text style={styles.buttonTitle}>Upload Driver License</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}>
                            <Text style={styles.buttonTitle}>Driver Abstract</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Driver Licence Expiry'
                        placeholderTextColor='#C0C0C0'
                        onChangeText={(date) => { setError(""); setExpiryDate(date) }}
                        value={driverLicenseExpiry}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        disabled={loading}
                        onPress={() => onSignUpClicked()}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>

                    <View style={styles.option}>
                        <Text style={styles.optionText}>
                            Already have an account?
                        <Text style={styles.optionLink}
                                onPress={() => navigation.navigate('Signin')}>
                                Log in
                                </Text>
                        </Text>
                        <Text style={styles.email}>
                            Current user : {currentUser && currentUser.email}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: '2%'
    },
    logo: {
        width: 200,
        height: 100,
        alignSelf: 'center',
    },
    heading: {
        textAlign: 'center',
        fontSize: 45,
        marginVertical: '1%',
        color: "#2EBCAC",
        fontWeight: "bold",
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
        paddingLeft: 16
    },
    email: {
        color: '#73AB84',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '2%',
        marginVertical: '1%',
    },
    button: {
        backgroundColor: '#F68347',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttons: {
        backgroundColor: '#5C5C5C',
        width: '30%',
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    option: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    optionText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    optionLink: {
        color: "#A9A9A9",
        fontWeight: "bold",
        fontSize: 16
    }
})

