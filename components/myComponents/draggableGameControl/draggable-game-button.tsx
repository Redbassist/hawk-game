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
  x: number;
  y: number;
}

export const DraggableGameButton: React.FC<IDraggableGameButton> = ({
  size,
  icon,
  value,
  x,
  y,
}) => {
  const translateX = useSharedValue(x);
  const translateY = useSharedValue(y);

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      translateY.value += event.changeY;
    })
    .onEnd((event) => {
      translateX.value = x;
      translateY.value = y;
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
    position: "absolute",
    top: 0,
    left: 0,
  },
  icon: {
    width: "80%",
    height: "80%",
  },
});
