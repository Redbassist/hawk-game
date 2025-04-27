import { StyleSheet, View, useWindowDimensions } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GameControls } from "@/components/myComponents/gameControls/game-controls";

export default function Game() {
  const { width: screenWidth } = useWindowDimensions();
  const maxSize = Math.min(screenWidth * 0.8, 400);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.gameContainer}>
        <GameControls size={maxSize} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gameContainer: {
    flex: 1,
    position: 'relative',
  },
});
