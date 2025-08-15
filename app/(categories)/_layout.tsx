import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(categories)"
        options={{
          title: '',
          headerShown: false,
        }} />
    </Stack>
  );
}