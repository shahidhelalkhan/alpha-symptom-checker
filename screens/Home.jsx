import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Loader from "./Loader";
import { getToken } from "../api/auth";

const HomeComponent = ({ token, navigation }) => {
  const [loading, SetLoading] = useState(false);
  const [age, setAge] = useState(0);
  const handleContinueBtn = () => {
    localStorage.setItem("age", age);
    navigation.navigate("symptoms", { token: token });
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ padding: 10, fontSize: 20 }}>Alpha Symptom Checker</Text>
      <TextInput
        placeholder="Age"
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "red" }}
        onChangeText={(value) => setAge(value)}
      ></TextInput>
      <TouchableOpacity
        onPress={handleContinueBtn}
        style={{ padding: 15, backgroundColor: "#84CAE7", marginTop: 10 }}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={{ color: "white" }}>Continue</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

function Home(props) {
  const [loading, SetLoading] = useState(true);
  const [token, SetToken] = useState(null);
  useEffect(() => {
    getToken()
      .then((res) => {
        SetToken(res.Token);
        SetLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <HomeComponent token={token} navigation={props.navigation} />
  );
}

export default Home;
