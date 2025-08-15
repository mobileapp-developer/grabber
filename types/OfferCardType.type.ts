import { Text } from "react-native";

export type OfferCardProps = {
    offer: string,
    description: string,
    image: any,
    backgroundColor?: string,
    buttonColor?: string,
    textColor?: string,
} & React.ComponentProps<typeof Text>;