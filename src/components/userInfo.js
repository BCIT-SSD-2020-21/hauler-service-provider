import React from 'react';
import { TextInput, View, Picker } from 'react-native';
import { StyleSheet } from 'react-native';

export default function UserInfo({ flname, dob, address, setDob, phoneNumber, vehileType, setAddress, setphoneNumber, setVehileType, setFlName, setError}) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='First & Last Name'
                placeholderTextColor='#C0C0C0'
                onChangeText={(flname) => {setError(""); setFlName(flname) }}
                value={flname}
            />
            <TextInput
                style={styles.input}
                placeholder='Date of Birth'
                placeholderTextColor='#C0C0C0'
                onChangeText={(date) => {setError(""); setDob(date) }}
                value={dob}
            />
            <TextInput
                style={styles.input}
                placeholder='Address'
                placeholderTextColor='#C0C0C0'
                onChangeText={(address) => {setError(""); setAddress(address) }}
                value={address}
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
                placeholderTextColor='#C0C0C0'
                onChangeText={(number) => {setError(""); setphoneNumber(number) }}
                value={phoneNumber}
            />
            <Picker
                style={styles.input}
                selectedValue={vehileType}

                onValueChange={(type) => {setError(""); setVehileType(type) }}
            >
                <Picker.Item label='Select Vehicle type' value='' style={{ color: '#C0C0C0' }} />
                <Picker.Item label='SUV' value='SUV' />
                <Picker.Item label='VAN' value='VAN' />
                <Picker.Item label='PICKUP' value='PICKUP' />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

