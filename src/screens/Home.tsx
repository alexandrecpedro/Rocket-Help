import { useNavigation } from '@react-navigation/native';
import { Center, FlatList, Heading, HStack, IconButton, Text, useTheme, VStack } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useState } from 'react';
import Logo from "../assets/project/logo/logo_secondary.svg";
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {
    // useState (React Hook) for Filter
    const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: '456',
            patrimony: '123456',
            when: '18/07/2022 at 14:00',
            status: 'open'
        }
    ]);

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

                <Button title="New request" onPress={handleNewOrder} />
            </VStack>

        </VStack>
    );
}