// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Detail from './src/screens/Detail';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
