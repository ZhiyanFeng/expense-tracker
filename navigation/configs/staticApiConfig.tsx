import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RecentExpenseScreen from "../../screens/RecentExpenseScreen";
import ExpenseEditScreen from "../../screens/ExpenseEditScreen";
import {createStaticNavigation, StaticParamList} from "@react-navigation/native";
import AllExpenseScreen from "../../screens/AllExpenseScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";



const HomeStack = createNativeStackNavigator({
    screens: {
        Home: {
            screen: RecentExpenseScreen,
            options: {

            }
        },
        ExpenseEdit: {
            screen: ExpenseEditScreen,
        },
    },
});
const RootTabs = createBottomTabNavigator({

    screens: {
        HomeTab: {
            screen: HomeStack,
            options: {
                headerShown: false,
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
