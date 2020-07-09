import React from "react";
import { ActivityIndicator, View } from "react-native";

function Loader() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#84CAE7" />
    </View>
  );
}

export default Loader;
