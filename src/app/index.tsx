import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const foaie = {
  materie: "SACAP",
  capitol: 2,
  pagina: 7,
  siguranta: 75,
};

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>{foaie.materie}</Text>
      <Text>Cap. {foaie.capitol} · Pagina {foaie.pagina}</Text>
      <Text>Siguranța {foaie.siguranta}%</Text>
      <Text>{foaie.siguranta < 85 ? "De revizuit" : "OK"}</Text>
      <Link href="/despre">Despre aplicație</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
