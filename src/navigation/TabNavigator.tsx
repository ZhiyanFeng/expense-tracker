// import React from 'react';
// import { StyleSheet} from 'react-native';
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {TabParamList} from "./Types";
// import Index from "../screens/Index";
// import AllExpense from "../screens/AllExpense";
// import {bottomTabNavigatorConfig} from "./configs/optionConfig";
// import Ionicons from "@expo/vector-icons/Ionicons";
//
//
//
// const Tab = createBottomTabNavigator<TabParamList>();
//
// const TabNavigator = ({ /* props */}) => {
//     return (
//         <Tab.Navigator screenOptions={bottomTabNavigatorConfig}>
//             <Tab.Screen name="Index" component={Index} options={{
//                 tabBarIcon: ({ color, size, focused }) => (
//                     <Ionicons
//                         name={focused ? 'document' : 'document-outline'} // Change icon based on focused state
//                         color={color}
//                         size={size}
//                     />
//                 ),}} />
//             <Tab.Screen name='AllExpense' component={AllExpense} options={{
//                 tabBarIcon: ({ color, size, focused }) => (
//                 <Ionicons
//                 name={focused ?"file-tray-full" : 'file-tray-full-outline'} // Change icon based on focused state
//                         color={color}
//                         size={size}
//             />
//             ),}} />
//         </Tab.Navigator>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
//
// export default TabNavigator;
