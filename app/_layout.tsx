
import { CartProvider } from "@/context/CartContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "Grabber",
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: 'light',
          }} />
        <Stack.Screen
          name="(categories)"
          options={{
            headerShown: false,
            headerTitle: "All",
            headerLargeTitle: false,
            headerTransparent: true,
            headerBlurEffect: 'light',
          }} />
      </Stack>
    </CartProvider>
  )
}