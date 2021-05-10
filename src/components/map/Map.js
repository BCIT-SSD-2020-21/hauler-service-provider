import React, {useRef, useState} from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API } from '@env';

export default function Map({ posts }) {
    const { width, height } = Dimensions.get('window');
    const mapView = useRef();

    const [coordinates, setCoordinates] = useState([
        {
            latitude: posts.pickUpAddressLat,
            longitude: posts.pickUpAddressLng,
        },
        {
            latitude: posts.dropOffAddressLat,
            longitude: posts.dropOffAddressLng,
        }
    ])

    return (
        <View style={styles.mapContainer}>
        <MapView
            style={styles.map}
            ref={mapView}
        >
            {coordinates.map((coordinate, index) =>
                <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}
                />
            )}
            <MapViewDirections
                apikey={GOOGLE_MAP_API}
                origin={coordinates[0]}
                waypoints={coordinates}
                destination={coordinates[coordinates.length - 1]}
                strokeWidth={3}
                strokeColor='#DE0303'
                optimizeWaypoints={true}
                onReady={result => {
                    mapView.current.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                            right: (width / 20),
                            bottom: (height / 20),
                            left: (width / 20),
                            top: (height / 20),
                        }
                    }
                    );
                }}
                onError={(errorMessage) => {
                    console.log(`Error: ${errorMessage}`);
                }}
            />
        </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width-30,
        height: 500,
        borderRadius: 20, 
    },
    mapContainer:{
        paddingTop: 30,
    alignItems:'center',
    justifyContent: 'center',
    }
})