import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { MainMenu } from "@/components/myComponents/mainMenu/main-menu";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MainMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
