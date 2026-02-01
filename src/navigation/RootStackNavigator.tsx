// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import {NavigationContainer} from "@react-navigation/native";
// import EditExpense from "../screens/EditExpense";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import TabNavigator from "./TabNavigator";
// import {RootStackParamList} from "./Types";
//
//
// const Stack = createNativeStackNavigator<RootStackParamList>();
//
// const RootStackNavigator = ({ /* props */}) => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
//                 <Stack.Screen name="Home" component={TabNavigator}/>
//                 <Stack.Screen name="ExpenseEdit" component={EditExpense} />
//             </Stack.Navigator>
//         </NavigationContainer>
// );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
//
// export default RootStackNavigator;
