import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const ExpenseEditScreen = ({ /* props */}) => {
    return (
        <View style={styles.container}>
            <Text>ExpenseEditScreen Component</Text>
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

export default ExpenseEditScreen;
