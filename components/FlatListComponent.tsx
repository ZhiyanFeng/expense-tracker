import React, {useMemo} from 'react';
import {View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import {Expense} from "../types/interfaces";

interface IProps {
    data: Expense[],
    title: string,
}

const FlatListComponent = ({data, title}: IProps) => {
    const total = useMemo(() => {
        return data.reduce((acc, cur) => acc + Number(cur.price) * Number(cur.quantity), 0);
    }, [data]);

    const ListHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <View style={styles.totalPrice}>
                    <Text>$ {total}</Text>
                </View>
            </View>

        )
    }
    const renderItem: ListRenderItem<Expense> = ({item}) => (
        <View style={styles.flatListItem}>
            <View style={styles.itemName}>
                <Text style={styles.flatListText}>{item.name}</Text>
                <Text> {item.date}</Text>
            </View>
            <View style={styles.itemPrice}>
                <Text>{item.price}</Text>
            </View>
        </View>

    );
    return (
        <View style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ListHeaderComponent={<ListHeader/>}
                >
                </FlatList>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        display: 'flex',
        flex: 1,
        width: '100%',
        paddingTop: 25,
        justifyContent: "center",
        backgroundColor: "#576fe6",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 16,
        backgroundColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 4,
        padding: 20,
    },
    totalPrice: {
        flex: 1,
        fontSize: 18,
    },
    flatListItem: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#a3afe8",
        marginHorizontal: 16,
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        height: 60,
        borderRadius: 4,
    },
    itemName: {
        flex: 4,
        margin: "auto",
        paddingLeft: 20,
        justifyContent: "space-around",
    },
    itemPrice: {
        flex: 1,
        height: 40,
        marginHorizontal: 20,
        alignItems: "center",

        justifyContent: "center",
        backgroundColor: "#e2e3ea",
    },
    flatListText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default FlatListComponent;
