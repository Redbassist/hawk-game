import { Dimensions, ImageURISource, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { DraggableGameButton } from "../draggableGameControl/draggable-game-button";

interface IGameControlsProps {
  size: number;
  x: number;
  y: number;
}

export const GameControls: React.FC<IGameControlsProps> = ({ size, x, y }) => {
  const translateX = useSharedValue(x);
  const translateY = useSharedValue(y);

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  const hawkWidth = size / 3;
  const subWidth = size / 5;

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <Animated.View style={[containerStyle, styles.container]}>
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={hawkWidth}
        value={1}
        x={0}
        y={0}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/bald.png")}
        size={subWidth}
        value={10}
        x={0}
        y={0}
      />
      <DraggableGameButton
        icon={require("@/assets/images/game-images/hawk.png")}
        size={subWidth}
        value={-1}
        x={0}
        y={0}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
