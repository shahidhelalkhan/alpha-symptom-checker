import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { List } from "react-native-paper";
import Request from "../api/requests";
import Loader from "./Loader";

function Diagnosis(props) {
  const [symptoms, setSymptoms] = useState(props.route.params.symptoms);
  const [token, setToken] = useState(props.route.params.token);
  const [diagnosis, setDiagnosis] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const age = parseInt(localStorage.getItem("age"));
    const year = 2020 - age;
    console.log(year);
    Request.getDiagnosis(token, { symptoms, year })
      .then((res) => {
        setLoading(false);
        console.log(res);
        setDiagnosis(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#fff" }}>
      <FlatList
        style={{ height: 450 }}
        data={diagnosis}
        renderItem={(item) => (
          <List.Item
            title={item.item.Issue.Name}
            description={
              "Prof Name:" +
              item.item.Issue.ProfName +
              " " +
              " Accuracy: " +
              item.item.Issue.Accuracy
            }
            left={(props) => <List.Icon {...props} icon="circle" />}
          />
        )}
        keyExtractor={(item) => item.Name}
      />
    </View>
  );
}

export default Diagnosis;
