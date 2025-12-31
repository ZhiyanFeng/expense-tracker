import {Pressable, Platform, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface props {
    name: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    color?: string;
    size: number;
}

export const IconButton = ({name, color, size, onPress}: props) => {
    return (
        <Pressable
            onPress={onPress}
            // Adds a nice ripple effect on Android and opacity on iOS
            style={({pressed}) => [
                {opacity: pressed ? 0.5 : 1, padding: 8},
                styles.container
            ]}
        >
            <Ionicons name={name} size={size} color={color}/>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        marginRight: Platform.OS === 'android' ? 10 : 0,
    },
});