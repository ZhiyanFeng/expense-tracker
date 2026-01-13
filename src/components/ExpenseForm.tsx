import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Keyboard} from 'react-native';
import {Expense} from "../types/interfaces";
import {useDispatch} from "react-redux";
import NativeDatePicker from "./NativeDatePicker";
import {addExpense} from "../state/expenseSlice";


interface Props {
    initialValue?: Expense;
    onSubmit: (expense: Expense) => void;
    label: string;
}

const ExpenseForm = ({initialValue, onSubmit, label}: Props) => {
    const [id, setId] = useState<string>(initialValue?.id || '');
    const [name, setName] = useState<string>(initialValue?.name || '');
    const [quantity, setQuantity] = useState<string>(initialValue?.quantity || '');
    const [price, setPrice] = useState<string>(initialValue?.price || '');
    const [date, setDate] = useState<string>(initialValue?.date || '');

    const handlePriceChange = (text: string) => {
        // Regex to match a number with an optional negative sign, optional decimal point,
        // and up to two digits after the decimal.
        const decimalRegex = /^-?\d*\.?\d{0,2}$/;

        if (decimalRegex.test(text) || text === '') {
            setPrice(text);
        }
    };

    const handleSave = () => {
        if (name.trim() && quantity.trim()) {
            const newExpense: Expense = {
                id: id, // Simple unique ID generation
                name: name,
                quantity: quantity,
                price: price,
                date: date,
            };
            // Clear form
            setId('');
            setName('');
            setQuantity('');
            setPrice('');
            setDate('');

            Keyboard.dismiss();
            console.log(newExpense);
            onSubmit(newExpense);
        }
    };

    const handleQuantityChange = (text: string) => {
        // Trim the input as the user types
        const cleanedText = text.replace(/[^0-9]/g, '');
        setQuantity(cleanedText);
    };

    const handleDateConfirm = (date: Date) => {
        const dateIosString = date.toISOString();
        const dateString = dateIosString.split('T')[0];

        setId(dateIosString);
        setDate(dateString);
    }

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.label}>Expense Name:</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter item name"
                />

                <Text style={styles.label}>Quantity:</Text>
                <TextInput
                    style={styles.input}
                    value={quantity}
                    onChangeText={handleQuantityChange}
                    placeholder="Enter quantity"
                    keyboardType="decimal-pad"
                />

                <Text style={styles.label}>Price:</Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={handlePriceChange}
                    placeholder="Enter Price"
                    keyboardType="decimal-pad"
                />

                <View style={styles.datePicker}>
                    <NativeDatePicker onDateConfirm={handleDateConfirm}></NativeDatePicker>
                </View>
                <Button title="Save Expense" onPress={handleSave}/>
            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 4,
        marginBottom: 15,
    },
    datePicker: {
        paddingTop: 20,
        paddingBottom: 10,
    }
});

export default ExpenseForm;
