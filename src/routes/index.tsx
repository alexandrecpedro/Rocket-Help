import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { SignIn } from "../screens/Signin";
import { Loading } from "../components/Loading";

import { AppRoutes } from "./app.routes";

export function Routes() {
    // useState (React Hook)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    // useEffect (React Hook)
    useEffect(() => {
        const subscriber = auth()
            .onAuthStateChanged(response => {
                setUser(response);
                setLoading(false);
            });

            return subscriber;
    }, []);

    // Verification
    if (loading) {
        <Loading />
    }

    return (
        // Navigation Context
        <NavigationContainer>
            {/* Verifying if there is a valid user */}
            {user ? <AppRoutes /> : < SignIn />}
        </NavigationContainer>
    );
}