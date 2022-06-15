import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Details = ({ navigation, route }) => {
    const item = route?.params?.data;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Asteroid Details</Text>
            <View style={{ ...styles.row, marginTop: '5%' }}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>{item?.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Nasa Jpl Url</Text>
                <Text style={styles.value}>{item?.nasa_jpl_url}</Text>
            </View>
            {item?.is_potentially_hazardous_asteroid && (
                <View style={styles.row}>
                    <Text style={styles.label}>Is Potentially Hazardous Asteroid</Text>
                    <Text style={styles.value}>{item?.is_potentially_hazardous_asteroid.toString()}</Text>
                </View>
            )}
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 15,
        marginTop: '5%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 10
    },
    label: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        width: '30%'
    },
    value: {
        color: '#000',
        fontSize: 16,
        width: '68%'
    }
});
