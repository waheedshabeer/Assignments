import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useInterval from './Intervaltime';
import { useNavigation } from '@react-navigation/native';

const Main = () => {
    const [newcount, setCount] = useState(45);
    const [posts, setPosts] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        getPosts();
    }, []);

    useInterval(() => {
        setCount((prev) => prev + 1);
        getPosts();
    }, 5000);

    const getPosts = async () => {
        console.log('called after 5 seconds', newcount);

        try {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${newcount}`);
            let arr = [...posts];
            response.data.hits.forEach((item) => {
                if (item) {
                    console.log('item', item);
                    arr.push(item);
                }
            });
            // arr.push(response.data.hits);
            console.log('arr', arr);
            setPosts(arr);
        } catch (error) {
            console.log(error.message);
        }
    };
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
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
                <Text style={styles.heading}>Title</Text>
                <Text style={styles.subheading}>{item?.title}</Text>
                <Text style={styles.heading}>Created at:</Text>
                <Text style={styles.subheading}>{item?.created_at}</Text>
                <Text style={styles.heading}>URL:</Text>
                <Text style={styles.subheading}>{item?.url}</Text>
                <Text style={styles.heading}>Author:</Text>
                <Text style={styles.subheading}>{item?.author}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.titletxt}>Posts</Text>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={posts}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        onEndReached={() => {
                            setCount((prev) => prev + 1);
                            getPosts();
                        }}
                    />
                </View>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24
    },
    body: {
        width: '100%'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    titletxt: {
        fontSize: 24,
        color: 'orange'
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

export default Main;
