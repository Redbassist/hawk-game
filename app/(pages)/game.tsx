import { DraggableGameButton } from "@/components/myComponents/draggableGameControl/draggable-game-button";
import { Text, View } from "react-native";

export default function Game() {
  return (
    <View>
      <Text>Hi there</Text>
      <DraggableGameButton icon={require("@/assets/images/game-images/hawk.png")} size={300} value={1} />
    </View>
  );
}
