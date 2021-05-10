import React, {useRef } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_API } from '@env';

export default function Map({ coordinates }) {
    const { width, height } = Dimensions.get('window');
    const mapView = useRef();

    return (
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
                    setDistance(result.distance)
                    setDuration(result.duration)
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
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width - 30,
        height: 300,
        borderRadius: 20,
    },
})