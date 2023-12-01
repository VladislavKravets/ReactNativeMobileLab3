import React from 'react';
import {View, Text, Image, Linking, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeScreen from "./src/screens/HomeScreen";
import AboutUsScreen from "./src/screens/AboutUsScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const KafedraScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com')}>
            <Text>Кафедра в Інтернеті</Text>
        </TouchableOpacity>
    </View>
);

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="HomeDrawer"
                screenOptions={{
                    activeTintColor: '#e91e63',
                }}
            >
                <Drawer.Screen name="Домашня сторінка" component={HomeStack} />
                <Drawer.Screen name="Про себе" component={AboutUsScreen} />
                <Drawer.Screen name="Профіль" component={ProfileScreen} />

                <Drawer.Screen name="URL на кафедру">
                    {KafedraScreen}
                </Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
