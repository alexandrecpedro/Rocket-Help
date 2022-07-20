// Libraries
import { useState } from 'react';
import { Alert } from 'react-native';
import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

// Components
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';

export function Register() {
    // useState (React Hook)
    const [isLoading, setIsLoading] = useState(false);
    const [patrimony, setPatrimony] = useState("");
    const [description, setDescription] = useState("");

    // useNavigation (React Hook)
    const navigation = useNavigation();

    // New request function (Navigate to Register screen)
    function handleNewOrderRegister() {
        // Verifying if patrimony or description is null
        if (!patrimony || !description) {
            return Alert.alert("Register", "Fill in all the required fields!");
        }

        setIsLoading(true);

        // Store information at Firestore
        firestore()
            .collection("orders")
            .add({
                patrimony,
                description,
                status: "open",
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Request", "Successfully registered request!");
                // return to Home screen
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                return Alert.alert("Request", "Cannot register request!");
            });
    }

    return (
        <VStack flex={1} p={6} bg="gray.600">
            <Header title="New request" />

            <Input
                placeholder="Patrimony number"
                mt={4}
                onChangeText={setPatrimony}
            />

            <Input
                placeholder="Problem description"
                flex={1}
                mt={5}
                multiline
                textAlignVertical="top"
                onChangeText={setDescription}
            />

            <Button
                title="Register"
                mt={5}
                isLoading={isLoading}
                onPress={handleNewOrderRegister}
            />
        </VStack>
    );
}