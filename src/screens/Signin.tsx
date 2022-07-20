// Libraries
import { useState } from "react";
import { Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

// Image
import Logo from "../assets/project/logo/logo_primary.svg";

// Components
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
    // useState (React Hook)
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Extract colors from useTheme
    const { colors } = useTheme();

    const handleSignIn = () => {
        if (!email || !password) {
            // Alert.alert(title, message);
            return Alert.alert("Login", "Enter your email address and password!");
        }

        setIsLoading(true);

        auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                setIsLoading(false);

                // Handling error
                if (error.code === "auth/invalid-email") {
                    return Alert.alert("Login", "Invalid email address!");
                }

                if (error.code === "auth/wrong-password") {
                    return Alert.alert("Login", "Invalid email address or password!");
                }

                if (error.code === "auth/user-not-found") {
                    return Alert.alert("Login", "Invalid email address or password!");
                }

                return Alert.alert("Login", "Could not access!");
            });
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />

            <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
                Access your account
            </Heading>

            <Input
                mb={4}
                placeholder="E-mail"
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />}
                onChangeText={setEmail}
            />
            <Input
                mb={8}
                placeholder="Password"
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                // Encrypt the password
                secureTextEntry
                onChangeText={setPassword}
            />

            <Button
                title="Login"
                w="full"
                onPress={handleSignIn}
                isLoading={isLoading}
            />
        </VStack>
    );
}