import { Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [userId, setUserId] = useState('');

    const handleSubmit = async () => {
        const res = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${userId}?api_key=4smUeBEG8zNggkHNEFELPXuNM5J5PChjpjraaVgJ`);
        if (res?.data) {
            navigation.navigate('Details', { data: res?.data });
        } else {
            alert('Something went wrong');
        }
    };

    const handleRandom = async () => {
        const arr = ['2001865', '2001580', '2001221', '2001036', '2000887'];
        const val = arr[Math.floor(Math.random() * arr.length)];

        const random = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${val}?api_key=4smUeBEG8zNggkHNEFELPXuNM5J5PChjpjraaVgJ`);
        console.log('Random: ', random);
        if (random?.data) {
            navigation.navigate('Details', { data: random?.data });
        } else {
            alert('Something went wrong');
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Asteroid Screen</Text>
            <TextInput style={styles.input} value={userId} placeholder="Enter Asteroid ID" onChangeText={setUserId} />
            <TouchableOpacity
                onPress={handleSubmit}
                disabled={userId ? false : true}
                style={{
                    ...styles.Btn,
                    backgroundColor: userId ? '#8080f0' : '#e2e2e2'
                }}
            >
                <Text style={styles.btnTxt}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRandom} style={styles.btn2}>
                <Text style={styles.text2}>Random Asteroid</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

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
    },
    btn2: {
        alignSelf: 'flex-end',
        marginHorizontal: '8%',
        marginTop: '3%'
    },
    text2: {
        color: '#8080f0',
        fontSize: 14,
        fontWeight: 'bold'
    }
});
