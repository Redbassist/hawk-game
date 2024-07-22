import { Button, StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href="" asChild>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <Text style={styles.menuButtonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/game" asChild>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <Text style={styles.menuButtonText}>New Game</Text>
        </TouchableOpacity>
      </Link>
      <Link href="" asChild>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <Text style={styles.menuButtonText}>Records</Text>
        </TouchableOpacity>
      </Link>
      <Link href="" asChild>
        <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
          <Text style={styles.menuButtonText}>History</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    backgroundColor: "#007BFF",
    width: "75%",
    maxWidth: 350,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  menuButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});
