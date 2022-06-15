import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Country = ({ navigation }) => {
    const [country, setCountry] = useState('');

    const handleSubmit = async () => {
        console.log('Clicked');
        const res = await axios.get(`https://restcountries.com/v2/name/${country}`);
        console.log('RES: ', res?.data);
        if (res?.data) {
            navigation.navigate('CountryDetails', { data: res?.data });
        } else {
            alert('Something went wrong');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Country Screen</Text>
            <TextInput style={styles.input} value={country} placeholder="Enter Country" onChangeText={setCountry} />
            <TouchableOpacity
                onPress={handleSubmit}
                disabled={country ? false : true}
                style={{
                    ...styles.Btn,
                    backgroundColor: country ? '#8080f0' : '#e2e2e2'
                }}
            >
                <Text style={styles.btnTxt}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Country;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    heading: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 20,
        marginTop: '5%'
    },
    input: {
        alignSelf: 'center',
        marginTop: '45%',
        width: '85%',
        margin: '3%',
        paddingVertical: 0,
        paddingHorizontal: 10,
        fontSize: 18,
        height: 40,
        borderWidth: 0.5,
        borderColor: '#f77088'
    },
    Btn: {
        alignSelf: 'center',
        backgroundColor: '#8080f0',
        alignItems: 'center',
        marginHorizontal: '3%',
        marginTop: '10%',
        width: '85%',
        padding: 12,
        borderRadius: 8
    },
    btnTxt: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
