import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, Picker } from 'react-native'
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

export default function Signup() {

    const onSignOutClicked = async () => {
        console.log("user Logged out")
    }

    const onEditClicked = async () => {
        console.log("edit clicked")
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={styles.avatar}>
                        <Avatar
                            title="name"
                            size="xlarge"
                            rounded
                            source={{
                                uri:
                                    'https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png',
                            }}
                        />
                    </View>

                    <Text style={styles.user}>
                        Kulveer
                    </Text>
                    <View style={styles.headerContainer} >
                        <FontAwesome name="star" size={20} color='#2EBCAC' />
                        <FontAwesome name="star" size={20} color='#2EBCAC' />
                        <FontAwesome name="star" size={20} color='#2EBCAC' />
                        <FontAwesome name="star" size={20} color='#2EBCAC' />
                        <FontAwesome name="star" size={20} color='#2EBCAC' />
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="user" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            Kulveer
                      </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="birthday-cake" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            dob: 01/01/1992
                </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="envelope" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            kulveer@gmail.com
                </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="phone" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            64 123456
                </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="address-card" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            123 abc street
                </Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <FontAwesome style={styles.infoIcon} name="truck" size={24} color="black" />
                        <Text style={styles.userInfo}>
                            PICKUP
                </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[styles.buttons, styles.editButton]}
                        onPress={() => onEditClicked()}>
                        <Text style={styles.buttonTitle}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttons, styles.logOutButton]}
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
    buttonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginVertical: 10,
    },
    buttons: {

        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: "center",
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

