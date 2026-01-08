import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import RecentExpenseScreen from "../../screens/RecentExpenseScreen";
import EditExpenseScreen from "../../screens/EditExpenseScreen";
import {createStaticNavigation, NavigatorScreenParams, StaticParamList, StaticScreenProps } from "@react-navigation/native";
import AllExpenseScreen from "../../screens/AllExpenseScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddExpenseScreen from "../../screens/AddExpenseScreen";
export type ExpenseEditParams = { id: string, label: string };

export const HomeStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: RecentExpenseScreen,
        },
        EditExpense: {
            screen: EditExpenseScreen,
            initialParams: {id: '', label: 'Add Expense'},
        },
        AddExpense: {
            screen: AddExpenseScreen,
        }
    },
});


const RootTabs = createBottomTabNavigator({

    screens: {
        HomeTab: {
            screen: HomeStack,
            options: {
                headerShown: false,
                // headerRight: () => <Ionicons name="share" size={24} />,
                tabBarLabel: 'Recent Expense',
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ? 'document' : 'document-outline'} size={25}/>
                )
            }
        },
        AllExpenseTab: {
            screen: AllExpenseScreen,
            options: {
                tabBarIcon: ({ focused }) => (
                    <Ionicons name={focused ?"file-tray-full" : 'file-tray-full-outline'} size={25}/>
                )
            }
        }
    }

});

// Infer the types from your root-most navigator
type RootStackParamList = StaticParamList<typeof RootTabs>;


declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

// Create and export the final component
export const Navigation = createStaticNavigation(RootTabs);
