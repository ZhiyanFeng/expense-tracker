import {Redirect, Slot, Tabs} from 'expo-router';
import {useAuth} from "../../../contexts/AuthContext";
import {useEffect} from "react";

const HomeLayout = () => {

    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        console.log('auth is not updated', isAuthenticated);
        return <Redirect href={"/(auth)"} />
    }

    return (
        <Tabs>
            <Tabs.Screen name="recent" options={{title: 'Recent expenses'}}/>
            <Tabs.Screen name="all" options={{title: 'All expenses'}}/>
        </Tabs>
    )
};

export default HomeLayout;
