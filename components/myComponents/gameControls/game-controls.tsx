import { StyleSheet, View, useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { DraggableGameButton } from "../draggableGameControl/draggable-game-button";

interface IGameControlsProps {
  size: number;
}

export const GameControls: React.FC<IGameControlsProps> = ({ size }) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  
  const buttonBaseSize = Math.min(screenWidth * 0.15, size * 0.2);
  const largeButtonSize = buttonBaseSize * 1.5;
  
  const buttonSpacing = buttonBaseSize * 0.5;
  
  const totalGroupWidth = buttonBaseSize * 2 + largeButtonSize + buttonSpacing * 2;
  
  const groupStartX = (screenWidth - totalGroupWidth) / 2;
  
  const firstButtonX = groupStartX;
  const secondButtonX = groupStartX + buttonBaseSize + buttonSpacing;
  const thirdButtonX = groupStartX + buttonBaseSize + buttonSpacing + largeButtonSize + buttonSpacing;
  
  const bottomPadding = 150;
  const buttonsY = screenHeight - bottomPadding;

  return (
    <View style={styles.container}>
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={buttonBaseSize}
        value={1}
        x={firstButtonX}
        y={buttonsY}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/bald.png")}
        size={largeButtonSize}
        value={10}
        x={secondButtonX}
        y={buttonsY}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={buttonBaseSize}
        value={-1}
        x={thirdButtonX}
        y={buttonsY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
});
