import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Country from '../screens/Assignment3/Country';
import CountryDetails from '../screens/Assignment3/CountryDetails';

const Stack = createNativeStackNavigator();

const Index: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Country" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Country" component={Country} />
                <Stack.Screen name="CountryDetails" component={CountryDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;

const styles = StyleSheet.create({});
