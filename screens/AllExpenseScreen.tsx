import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {RecentExpenseScreenProps} from "../navigation/Types";
import FlatListComponent from "../components/FlatListComponent";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";


const AllExpenseScreen = ({} : RecentExpenseScreenProps
) => {
    const allExpenses =useSelector((state:RootState) => state.expense).expenses;

    return (
       <FlatListComponent data={allExpenses} title='Total'></FlatListComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AllExpenseScreen;
