import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";

export default function App({ isDisabled = true, onFocus }) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Text Input</Text>
      <MyTextInput onFocus={onFocus} value={value} editable={!isDisabled} />
    </View>
  );
}

const MyTextInput = styled.TextInput.attrs((props) => ({
  accessibilityRole: "text",
  ...props,
}))`
  border: 1px solid red;
  width: 200px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
