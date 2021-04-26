import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SearchJobs() {
    const [location, setLocation] = useState('')
    const [service,setService] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.search}>
            <RNPickerSelect
            value={location}
            useNativeAndroidPickerStyle={false}
            style={{inputAndroid:{
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 8,
                color: 'black'
              },}} 
            onValueChange={(value) => setLocation(value)}
            placeholder={{ label: "Search by location", value: null }}
            items={[
                { label: 'Surrey', value: 'Surrey' },
                { label: 'Langely', value: 'Langely' },
                { label: 'Richmond', value: 'Richmond' },
            ]}
        />
        </View>
        <View style={styles.search}>
        <RNPickerSelect
            value={service}
            useNativeAndroidPickerStyle={false}
            style={{inputAndroid:{
                fontSize: 14,
                paddingHorizontal: 10,
                paddingVertical: 8,
                color: 'black'
              },}} 
            onValueChange={(value) => setService(value)}
            placeholder={{ label: "Search by service", value: null }}
            items={[
                { label: 'Junk Removal', value: 'Junk Removal' },
                { label: 'Moving', value: 'Moving' },
                { label: 'Errand', value: 'Errand' },
            ]}
        />
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '10%',
        width: '100%',
        height: '100%'
    },
    search:{
        width: '90%',
        borderWidth: 1,
        borderColor: '#F68347',
        borderRadius: 8,
        marginVertical: 5
    },
    button: {
        backgroundColor: '#16B3D5',
        width: '50%',
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

