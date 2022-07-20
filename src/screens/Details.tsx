// Libraries
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Box, HStack, ScrollView, Text, useTheme, VStack } from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from "@react-native-firebase/firestore";
import { OrderFirestoreDTO } from "../DTOs/OrderFirestoreDTO";
import { CircleWavyCheck, ClipboardText, DesktopTower, Hourglass } from "phosphor-react-native";

// Utils
import { dateFormat } from '../utils/firestoreDateFormat';

// Components
import { Button } from "../components/Button";
import { CardDetails } from "../components/CardDetails";
import { Header } from '../components/Header';
import { Input } from "../components/Input";
import { Loading } from "../components/Loading";
import { OrderProps } from "../components/Order";

type RouteParams = {
    orderId: string;
}

type OrderDetails = OrderProps & {
    description: string;
    solution: string;
    closed: string;
}

export function Details() {
    // useState (React Hook)
    const [solution, setSolution] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

    // useNavigation (React Hook)
    const navigation = useNavigation();

    // Navigation route - useRoute (Hook)
    const route = useRoute();
    const { orderId } = route.params as RouteParams;

    // Color access - useTheme (Hook)
    const { colors } = useTheme();

    // Close order function (Navigate to Home screen)
    const handleCloseOrder = () => {
        if (!solution) {
            return Alert.alert("Request", "Inform the solution to close the request");
        }

        firestore()
            .collection<OrderFirestoreDTO>("orders")
            .doc(orderId)
            .update({
                status: "closed",
                solution,
                closed_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Request", "Closed request!");
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
                return Alert.alert("Request", "Cannot end request!");
            });
    }

    // useEffect (React Hook)
    useEffect(() => {
        firestore()
            .collection<OrderFirestoreDTO>("orders")
            .doc(orderId)
            .get()
            .then((doc) => {
                const { patrimony, description, status, created_at, closed_at, solution } = doc.data();

                const closed = closed_at ? dateFormat(closed_at) : null;

                setOrder({
                    id: doc.id,
                    patrimony,
                    description,
                    status,
                    solution,
                    when: dateFormat(created_at),
                    closed
                });

                setIsLoading(false);
            });
    }, []);

    // Verification
    if (isLoading) {
        return <Loading />
    }

    return (
        <VStack flex={1} bg="gray.700">
            <Box px={6} bg="gray.600">
                <Header title="Request" />
            </Box>

            <HStack bg="gray.500" justifyContent="center" p={4}>
                {
                    order.status === "closed"
                        ? <CircleWavyCheck size={22} color={colors.green[300]} />
                        : <Hourglass size={22} color={colors.secondary[700]} />
                }

                <Text
                    fontSize="sm"
                    color={order.status === "closed" ? colors.green[300] : colors.secondary[700]}
                    ml={2}
                    textTransform="uppercase"
                >
                    {order.status === "closed" ? "completed" : "in progress"}
                </Text>
            </HStack>

            <ScrollView mx={5} showsVerticalScrollIndicator={false}>
                <CardDetails
                    title="Equipment"
                    description={`Patrimony: ${order.patrimony}`}
                    icon={DesktopTower}
                />

                <CardDetails
                    title="Problem description"
                    description={order.description}
                    icon={ClipboardText}
                    footer={`Registered on ${order.when}`}
                />

                <CardDetails
                    title="Solution"
                    description={order.solution}
                    icon={CircleWavyCheck}
                    footer={order.closed && `Closed at ${order.closed}`}
                >
                    {
                        order.status === "open" &&
                        <Input
                            placeholder="Solution description"
                            onChangeText={setSolution}
                            textAlignVertical="top"
                            multiline
                            h={24}
                        />
                    }
                </CardDetails>
            </ScrollView>

            {
                order.status === "open" &&
                <Button
                    title="Close request"
                    m={5}
                    onPress={handleCloseOrder}
                />
            }
        </VStack>
    );
}