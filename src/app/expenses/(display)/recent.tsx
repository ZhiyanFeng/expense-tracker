import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "../../../components/IconButton";
import {useSelector} from "react-redux";
import {selectResentExpense} from "../../../state/expenseSlice";
import FlatListComponent from "../../../components/FlatListComponent";

import {useAppDispatch} from "../../../hooks/hook";
import {useRouter} from "expo-router";


const RecentExpense = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // dispatch(fetchAllExpenses());
    })
    const router = useRouter();

    const handleIconPress = () => {
        router.navigate('/expenses/add');
    }

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onPress={handleIconPress} size={24} name={'add'}></IconButton>
            ),
        });
    }, [navigation, handleIconPress]);

    const recentExpenses = useSelector(selectResentExpense);

    return (
        <FlatListComponent data={recentExpenses} title={'Last 7 days'}></FlatListComponent>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RecentExpense;
