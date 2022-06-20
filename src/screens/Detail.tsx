import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Detail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const data = route.params;
    useEffect(() => {
        console.log('data on detail screen', data);
        console.log('title', data?.data?.title);
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={25} style={{ right: 150 }} />
                </TouchableOpacity>

                <Text style={styles.titletxt}>Details</Text>
            </View>
            <ScrollView style={styles.list}>
                <View
                    onPress={() => navigation.navigate('Detail', { data: item })}
                    style={{
                        marginTop: 10,
                        backgroundColor: 'grey',
                        height: 'auto',
                        width: '90%',
                        alignSelf: 'center',
                        borderRadius: 10
                    }}
                >
                    <Text style={styles.topic}>{data?.data?.title}</Text>

                    <Text style={styles.heading}>Created at:</Text>
                    <Text style={styles.subheading}>{data?.data?.created_at}</Text>
                    <Text style={styles.heading}>URL:</Text>
                    <Text style={styles.subheading}>{data?.data?.url}</Text>
                    <Text style={styles.heading}>Author:</Text>
                    <Text style={styles.subheading}>{data?.data?.author}</Text>
                    <Text style={styles.heading}>Comments:</Text>
                    <Text style={styles.subheading}>{data?.data?.num_comments}</Text>
                    <Text style={styles.heading}>Points:</Text>
                    <Text style={styles.subheading}>{data?.data?.points}</Text>

                    <Text style={styles.heading}>Story Title:</Text>
                    <Text style={styles.subheading}>{data?.data?.story_title ? data?.data?.story_title : 'Not found'}</Text>
                    <Text style={styles.heading}>Story Description:</Text>

                    <Text style={styles.subheading}>{data?.data?.story_text ? data?.data?.story_text : 'Story not found'}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    header: {
        width: '100%',
        height: '10%',
        paddingVertical: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center'
    },
    topic: {
        alignSelf: 'center',
        fontSize: 24,
        width: '90%',
        padding: 5
    },
    text: {
        fontSize: 24
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    titletxt: {
        fontSize: 24,
        color: 'orange',
        position: 'absolute'
    },
    heading: {
        color: 'orange',
        fontSize: 18,
        marginLeft: 10
    },
    subheading: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
        width: '90%',

        padding: 5
    },
    list: {
        paddingVertical: 10,
        height: '90%'
    }
});

export default Detail;
