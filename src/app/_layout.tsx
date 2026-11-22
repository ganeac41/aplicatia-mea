import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Acasă" }} />
      {<Stack.Screen name="despre" options={{ title: "Despre" }} />}
    </Stack>
  );
}
