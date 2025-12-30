import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const RecentExpenseScreen = ({ /* props */}) => {
    return (
        <View style={styles.container}>
            <Text>RecentExpenseScreen Component</Text>
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
