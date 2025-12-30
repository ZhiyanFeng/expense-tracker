import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabParamList} from "./Types";
import ExpenseEditScreen from "../screens/ExpenseEditScreen";
import RecentExpenseScreen from "../screens/RecentExpenseScreen";
import AllExpenseScreen from "../screens/AllExpenseScreen";


const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = ({ /* props */}) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="RecentExpense" component={RecentExpenseScreen} />
            <Tab.Screen name='AllExpense' component={AllExpenseScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TabNavigator;
