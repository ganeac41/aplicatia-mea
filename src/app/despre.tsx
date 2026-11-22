import { View, Text, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";


export default function Despre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Despre</Text>
      <Text>Despre aplicație.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 24, color: "tomato" },
});