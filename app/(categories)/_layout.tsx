import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="AllFruits"
        options={{
          title: 'Fruits',
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />
      <Stack.Screen
        name="AllDetergents"
        options={{
          title: 'Detergents',
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />
      <Stack.Screen
        name="AllBiscuits"
        options={{
          title: 'Biscuits',
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />
      <Stack.Screen
        name="AllVegetables"
        options={{
          title: 'Vegetables',
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />
      <Stack.Screen
        name="AllDairy"
        options={{
          title: 'Dairy',
          headerShown: true,
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'light',
        }}
      />
    </Stack>
  );
}