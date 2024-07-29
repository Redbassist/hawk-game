import { DraggableGameButton } from "@/components/myComponents/draggableGameControl/draggable-game-button";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export default function Game() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const hawkWidth = screenWidth / 3;
  const subWidth = screenWidth / 5;
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>Hi there</Text>
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={hawkWidth}
        value={1}
        x={screenWidth / 2 - hawkWidth / 2}
        y={screenHeight * 0.8}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/bald.png")}
        size={subWidth}
        value={10}
        x={subWidth / 3}
        y={screenHeight - subWidth * 1.25}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={subWidth}
        value={-1}
        x={screenWidth - hawkWidth / (4 / 3) }
        y={screenHeight - subWidth * 1.25}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
