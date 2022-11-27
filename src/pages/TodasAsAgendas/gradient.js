import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const BackgroundLinear = ({ children }) => {
  return (
    <LinearGradient
      colors={["rgb(0,73,114) 13.02%", "rgba(0,148,255,0.20) 78.12%"]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
