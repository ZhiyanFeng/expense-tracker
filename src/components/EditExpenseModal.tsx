import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Modal, Alert, Pressable} from 'react-native';
import {Divider} from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import {useDispatch} from "react-redux";
import {deleteExpense} from "../state/expenseSlice";
import {useNavigation} from "@react-navigation/native";
import {useRouter} from "expo-router";


interface Props {
    isVisible: boolean;
    id: string;
    onClose: () => void;
}



const EditExpenseModal = ({isVisible, id, onClose}: Props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const handleDelete = () => {
        onClose();
        dispatch(deleteExpense(id));
    }

    useEffect(() => {
        setModalVisible(isVisible);
    }, [isVisible]);

    const navigation = useNavigation();
    const router = useRouter();

    const handleEdit = () => {
        console.log("Edit Expense with Id:", id);
        router.push(`/expenses/${id}/edit`);
        onClose();
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Edit Expense</Text>
                    <View style={styles.buttonContainer}>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => onClose()}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleEdit()}>
                            <Text style={styles.textStyle}>Update</Text>
                        </Pressable>
                    </View>
                    <Divider style={styles.divider}/>
                    <View>
                        <Pressable
                            onPress={() => handleDelete()}>
                            <Ionicons name={"trash-bin"} size={34}/>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        width: '80%',
        height: '30%',
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonContainer: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    divider: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: 'black',
        height: 1,
        width: '100%',
    },
    button: {

        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default EditExpenseModal;
