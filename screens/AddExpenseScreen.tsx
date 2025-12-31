import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const AddExpenseScreen = ({ /* props */}) => {
    return (
        <View style={styles.container}>
            <Text>ExpenseAddScreen Component</Text>
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

export default AddExpenseScreen;
