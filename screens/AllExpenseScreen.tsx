import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RecentExpenseScreenProps} from "../navigation/Types";


const AllExpenseScreen = ({} : RecentExpenseScreenProps
) => {


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
