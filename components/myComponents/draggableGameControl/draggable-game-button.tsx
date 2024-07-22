import Colors from "@/constants/Colors";
import { ImageURISource, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

interface IDraggableGameButton {
  size: number;
  icon: ImageURISource;
  value: number;
}

export const DraggableGameButton: React.FC<IDraggableGameButton> = ({
  size,
  icon,
  value,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      borderWidth: 2,
      borderColor: "#111",
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

  console.log("Icon", icon);

  return (
    <GestureDetector gesture={drag}>
      <Animated.View
        style={[
          containerStyle,
          { width: size, height: size },
          styles.container,
        ]}
      >
        <Animated.Image
          style={[
            styles.icon,
            { marginLeft: (size * 0.2) / 2, marginTop: (size * 0.2) / 2 },
          ]}
          source={icon}
        />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    backgroundColor: Colors.light.menuButton,
    textAlign: "center",
  },
  icon: {
    width: "80%",
    height: "80%",
  },
});
