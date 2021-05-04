import React from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function SearchByService({ service, setService, searchService }) {

    return (
        <View style={styles.search}>
            <RNPickerSelect
                value={service}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputAndroid: {
                        fontSize: 14,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        color: 'black'
                    },
                }}
                onValueChange={(value) => {setService(value); searchService({service: value})}}
                placeholder={{ label: "Search by service", value: null }}
                items={[
                    { label: 'Junk Removal', value: 'Junk' },
                    { label: 'Moving', value: 'Moving' },
                    { label: 'Errand', value: 'Errand' },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        marginVertical: 5
    }
})

