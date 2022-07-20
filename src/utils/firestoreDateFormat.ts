import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export function dateFormat(timestamp: FirebaseFirestoreTypes.Timestamp) {
    if (timestamp) {
        const date = new Date(timestamp.toDate());

        // extract day
        const day = date.toLocaleDateString("pt-BR");
        // extract hour
        const hour = date.toLocaleTimeString("pt-BR");

        return `${day} at ${hour}`;
    }
}