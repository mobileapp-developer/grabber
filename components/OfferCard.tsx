import { OfferCardProps } from "@/types/OfferCardType.type";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const OfferCard = ({ offer, description, image, backgroundColor, buttonColor, ...props }: OfferCardProps) => {
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <View style={styles.row}>
                <View style={styles.textContainer}>
                    <Text style={[styles.cardOffer, props.style]}>{offer}</Text>
                    <Text style={[styles.cardDescription, props.style]}>{description}</Text>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Shop Now"
                            buttonColor={buttonColor}
                            textColor={props.textColor}
                            onPress={() => { Alert.alert("Button Pressed") }} />
                    </View>
                </View>
                <View style={styles.cardImage}>
                    <Image
                        source={image}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    )
}

export default OfferCard;

const styles = StyleSheet.create({
    card: {
        width: 380,
        height: 210,
        padding: 16,
        borderRadius: 8,
        backgroundColor: "#f5f5f5",
        elevation: 2,
        marginBottom: 16,
        marginHorizontal: 12,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flex: 1,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    cardOffer: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#000000',
        marginBottom: 12,
        paddingTop: 24,
        left: 10,
    },
    cardDescription: {
        fontSize: 16,
        fontWeight: "500",
        color: '#0CA201',
        left: 10,
    },
    cardImage: {
        width: 200,
        height: 200,
        left: 10,
        top: -16,
        resizeMode: 'contain',
    },
    buttonContainer: {
        marginTop: 12,
    },
})