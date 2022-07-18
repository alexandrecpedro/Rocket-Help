import { Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";
import Logo from "../assets/project/logo/logo_primary.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
    // useState (React Hook)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // Extract colors from useTheme
    const { colors } = useTheme();

    const handleSignIn = () => console.log(name, password);

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
                onChangeText={setName}
            />
            <Input 
                mb={8}
                placeholder="Password" 
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
                // Encrypt the password
                secureTextEntry
                onChangeText={setPassword}
            />

            <Button title="Login" w="full" onPress={handleSignIn} />
        </VStack>
    );
}