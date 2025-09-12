import React, { useEffect } from "react";
import { router } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { useAuth } from "../src/hooks/useAuth";

export default function Index() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        // User not authenticated, go to auth flow
        router.replace("/(auth)/splash");
      } else if (user.role === "provider") {
        // User is a provider, go to provider flow
        router.replace("/(provider)");
      } else {
        // User is a customer, go to user flow
        router.replace("/(user)");
      }
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#399d9d" />
        <Text style={{ marginTop: 10 }}>Loading...</Text>
      </View>
    );
  }

  return null;
}
