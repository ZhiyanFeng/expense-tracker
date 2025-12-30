import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const AllExpenseScreen = ({ /* props */}) => {
    return (
        <View style={styles.container}>
            <Text>AllExpenseScreen Component</Text>
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

export default AllExpenseScreen;
