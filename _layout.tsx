import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
