import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="SignInScreen" />
      <Stack.Screen name="SignUpScreen" />
      <Stack.Screen name="terms" />
    </Stack>
  );
}
