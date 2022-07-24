import React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/core";
const FocusedStatusBar = ({
  barStyle = "dark-content",
  backgroundColor,
  ...props
}) => {
  const isFocused = useIsFocused();
  return (
    isFocused && (
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        {...props}
      />
    )
  );
};

export default FocusedStatusBar;
