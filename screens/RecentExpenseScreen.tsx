import React, {useEffect, useLayoutEffect, useMemo} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "../components/IconButton";
import EditExpenseScreen from "./EditExpenseScreen";
import {store} from "../store/store";
import {useSelector} from "react-redux";


const RecentExpenseScreen = ({ /* props */}) => {
    const navigation = useNavigation();

    const handleIconPress = () => {
        navigation.navigate('HomeTab',
            {
                screen: 'ExpenseAdd'
            }
        );
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
              <IconButton onPress={handleIconPress} size={24} name={'add'}></IconButton>
            ),
        });
    }, [navigation, handleIconPress]);

    const recentExpenses = useSelector(state => );


    return (
        <View style={styles.container}>
            <FlatList
                data={recentExpenses}
                keyExtractor={(item) => item.id}
                renderItem={}
            >

            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default RecentExpenseScreen;
