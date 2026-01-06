// AddExpenseScreen.tsx
import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Expense} from "../types/interfaces";
import NativeDatePicker from "../components/NativeDatePicker";
import {DateTimePickerEvent} from "@react-native-community/datetimepicker";
import {addExpense} from "../store/expenseSlice";
import {store} from "../store/store";
import {useDispatch} from "react-redux";



// Assume the Expense interface is imported or defined above
interface AddExpenseScreenProps {
    onAddExpense: (item: Expense) => void;
    // Add navigation props here if using React Navigation
}

const AddExpenseScreen = ({onAddExpense}: AddExpenseScreenProps) => {
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [date, setDate] = useState(new Date());
    const dispatch = useDispatch();


    const handleSave = () => {
        if (name.trim() && quantity.trim()) {
            const newExpense: Expense = {
                id: Date.now().toString(), // Simple unique ID generation
                name,
                quantity: quantity,
                date: date,
                price: price
            };
            onAddExpense(newExpense);
            // Clear form
            setId('');
            setName('');
            setQuantity('');
            setPrice('');
            setDate(new Date());

            dispatch(addExpense(newExpense));
        }
    };

    const handlePriceChange = (text: string) => {
        // Regex to match a number with an optional negative sign, optional decimal point,
        // and up to two digits after the decimal.
        const decimalRegex = /^-?\d*\.?\d{0,2}$/;

        if (decimalRegex.test(text) || text === '') {
            setPrice(text);
        }
    };

    const handleQuantityChange = (text: string) => {
        // Trim the input as the user types
        const cleanedText = text.replace(/[^0-9]/g, '');
        setQuantity(cleanedText);
    };

    const handleDateConfirm = (date: Date) => {
        setDate(date);
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
                    onChangeText={setQuantity}
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

export default AddExpenseScreen;
