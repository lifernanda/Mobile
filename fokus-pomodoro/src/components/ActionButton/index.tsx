import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps{
    active: boolean;
    onPress: () => void;
    display: string;
}

export function ActionButton({active, onPress, display} : ActionButtonProps) {
  return (
    <Pressable
      style={ active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
    <Text style={styles.contextButtonText}>
        {display}
    </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  contextButtonText: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
  },
});