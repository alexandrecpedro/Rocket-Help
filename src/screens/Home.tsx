// Libraries
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';

// Utils
import { dateFormat } from '../utils/firestoreDateFormat';

// Image
import Logo from "../assets/project/logo/logo_secondary.svg";

// Components
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Loading } from '../components/Loading';
import { Order, OrderProps } from '../components/Order';

export function Home() {
    // useState (React Hook)
    const [isLoading, setIsLoading] = useState(true);
    // for Filter
    const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<OrderProps[]>([]);
    // const [orders, setOrders] = useState<OrderProps[]>([
    //     {
    //         id: '456',
    //         patrimony: '123456',
    //         when: '18/07/2022 at 14:00',
    //         status: 'open'
    //     }
    // ]);

    // useNavigation (React Hook)
    const navigation = useNavigation();

    // Color access - useTheme (Hook)
    const { colors } = useTheme();

    // New request function (Navigate to Register screen)
    function handleNewOrder() {
        navigation.navigate("new");
    }

    // Open details function (Navigate to Details screen)
    function handleOpenDetails(orderId: string) {
        navigation.navigate("details", { orderId });
    }

    // Logout function
    function handleLogout() {
        auth()
            .signOut()
            .catch((error) => {
                console.log(error);
                return Alert.alert("Exit", "Cannot logout");
            });
    }

    // useEffect (React Hook)
    useEffect(() => {
        setIsLoading(true);

        const subscriber = firestore()
            .collection("orders")
            .where("status", "==", statusSelected)
            // update data in real time
            .onSnapshot(snapshot => {
                const data = snapshot.docs.map(doc => {
                    const { patrimony, description, status, created_at } = doc.data();

                    return {
                        id: doc.id,
                        patrimony,
                        description,
                        status,
                        when: dateFormat(created_at)
                    }
                });

                setOrders(data);
                setIsLoading(false);
            });

        return subscriber;
    }, [statusSelected]);

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.700"
                pt={12}
                pb={5}
                px={6}
            >
                <Logo />

                <IconButton
                    icon={<SignOut size={26} color={colors.gray[300]} />}
                    onPress={handleLogout}
                />
            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    {/* List header */}
                    <Heading color="gray.100">
                        Requests
                    </Heading>

                    {/* List */}
                    <Text color="gray.200">
                        {orders.length}
                    </Text>
                </HStack>

                <HStack space={3} mb={8}>
                    {/* Filters = Completed calls | Open calls */}
                    <Filter
                        type="open"
                        title="in progress"
                        onPress={() => setStatusSelected("open")}
                        isActive={statusSelected === "open"}
                    />

                    <Filter
                        type="closed"
                        title="completed"
                        onPress={() => setStatusSelected("closed")}
                        isActive={statusSelected === "closed"}
                    />
                </HStack>

                {/* Show each list element */}
                {
                    isLoading ? <Loading /> :
                        <FlatList
                            data={orders}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => <Order data={item} onPress={() => handleOpenDetails(item.id)} />}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 100 }}
                            ListEmptyComponent={() => (
                                <Center>
                                    <ChatTeardropText color={colors.gray[300]} size={40} />
                                    <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                                        You don't have any {"\n"}
                                        {statusSelected === "open" ? "opened" : "completed"} request
                                    </Text>
                                </Center>
                            )}
                        />
                }

                <Button title="New request" onPress={handleNewOrder} />
            </VStack>

        </VStack>
    );
}