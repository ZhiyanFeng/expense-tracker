import React from 'react';
import {Redirect} from "expo-router";

const Index = ({ /* props */}) => {
    return <Redirect href={"/login"} />;
};

export default Index;
