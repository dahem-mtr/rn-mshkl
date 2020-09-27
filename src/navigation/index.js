import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as screens from '../screens';
import MainTabNavigator from '../navigation/MainTabNavigator';


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator
            screenOptions={{ gestureEnabled: false }}
        >
            <MainStack.Screen options={{ headerShown: false }} name="AppLoading" component={screens.AppLoading} />
            <RootStack.Screen options={{
                headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS,
                }} name="LanguagesScreen" component={screens.LanguagesScreen} />

            <MainStack.Screen options={{ headerShown: false }} name="MainTabNavigator" component={MainTabNavigator} />

        </MainStack.Navigator>
    );
}

function App() {

    return (
        <NavigationContainer>
            <RootStack.Navigator  screenOptions={{ gestureEnabled: false }} mode="modal" headerMode="none">
                <RootStack.Screen name="Main" component={MainStackScreen} />
                <RootStack.Screen name="MyModal" component={screens.ModalScreen} />
                <RootStack.Screen name="showGame" component={screens.showGame} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default App;


// screenOptions={{ 

            //     ...TransitionPresets.SlideFromRightIOS,
            //     gestureDirection: 'horizontal-inverted',
            //  }}