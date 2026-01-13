import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface Props {
    onDateConfirm: (date: Date) => void;
}

const NativeDatePicker = ({onDateConfirm}: Props) => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // For iOS, the picker is usually in a modal so we close it
        setDate(currentDate);
        handleDateConfirm(currentDate);
    };

    const showDatePicker = () => {
        setShow(true);
    };

    const handleDateConfirm = (date: Date) => {
        onDateConfirm(date);
    }

    return (
        <View>
            <Button onPress={showDatePicker} title="Select Date" />
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date" // Can be 'date', 'time', or 'datetime'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default NativeDatePicker;
