import React from 'react';
import Home from "../screens/Home";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ViewPhoto from "../screens/ViewPhoto";

const NavigationController = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home" component={Home} />
                <Stack.Screen options={{headerShown: true, title: "Photo"}} name="ViewPhoto" component={ViewPhoto} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationController;
