import { StyleSheet } from 'react-native';
import React from 'react';
import Index from './src/navigation/Index';
import { StatusBar } from 'expo-status-bar';

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Index />
        </>
    );
};

export default App;

const styles = StyleSheet.create({});
