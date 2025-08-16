export type CardProps = {
    id: string;
    title: string;
    image: any;
    price: number;
    rating: number;
    count: number;
    onPress: () => void;
}