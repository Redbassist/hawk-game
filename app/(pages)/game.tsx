import { Dimensions, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GameControls } from "@/components/myComponents/gameControls/game-controls";

export default function Game() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const maxSize =
    screenWidth > screenHeight ? screenWidth / 3 : screenWidth * (2 / 3);

  return (
    <GestureHandlerRootView style={styles.container}>
      <GameControls x={screenWidth / 2} y={screenHeight * 0.7} size={maxSize} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
