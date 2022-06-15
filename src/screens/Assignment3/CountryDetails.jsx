import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetails = ({ navigation, route }) => {
    const item = route?.params?.data;
    const [showWeather, setShowWeather] = useState(false);
    const [data, setData] = useState('');

    const handleWeather = async () => {
        const res = await axios.get(`http://api.weatherstack.com/current?access_key=5a0b3006ad3c13b2cb36d86bac22b78c&query=${item[0]?.capital}`);
        if (res?.data) {
            setData(res?.data);
            setShowWeather(true);
        } else {
            alert('Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Country Details</Text>
            <View style={styles.flagRow}>
                <Text style={styles.label}>Flag</Text>
                <Image style={styles.img} resizeMode="contain" source={{ uri: item[0]?.flags?.png }} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Capital</Text>
                <Text style={styles.value}>{item[0]?.capital}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Population</Text>
                <Text style={styles.value}>{item[0]?.population}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Latitude & Longitude</Text>
                <Text style={styles.value}>{item[0]?.latlng[0] + ' ' + item[0]?.latlng[1]}</Text>
            </View>
            {showWeather ? (
                <>
                    <View style={styles.flagRow}>
                        <Text style={styles.label}>Weather Icons</Text>
                        <Image
                            style={{
                                ...styles.img,
                                width: 40,
                                height: 40,
                                borderRadius: 40
                            }}
                            resizeMode="contain"
                            source={{ uri: data?.current?.weather_icons[0] }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Temperature</Text>
                        <Text style={styles.value}>{data?.current?.temperature}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Wind Speed</Text>
                        <Text style={styles.value}>{data?.current?.wind_speed}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Precip</Text>
                        <Text style={styles.value}>{data?.current?.precip}</Text>
                    </View>
                </>
            ) : null}
            <TouchableOpacity onPress={showWeather ? () => setShowWeather(false) : handleWeather} style={styles.Btn}>
                <Text style={styles.BtnTxt}>{showWeather ? 'Hide Weather' : 'Capital Weather'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CountryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cceecc'
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
        width: '30%',
        marginRight: '5%'
    },
    value: {
        color: '#000',
        fontSize: 16,
        width: '68%'
    },
    flagRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10%',
        padding: 10
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 80,
        overflow: 'hidden'
    },
    Btn: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '80%',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        marginTop: '10%'
    },
    BtnTxt: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700'
    }
});
