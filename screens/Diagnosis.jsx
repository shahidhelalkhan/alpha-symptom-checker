import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import Request from "../api/requests";
import Loader from "./Loader";

function Diagnosis(props) {
  const [symptoms, setSymptoms] = useState(props.route.params.symptoms);
  const [token, setToken] = useState(props.route.params.token);
  const [diagnosis, setDiagnosis] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Request.getDiagnosis(token, { symptoms, year: "1992" })
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
    <View style={{ flex: 1, alignItems: "center" }}>
      <FlatList
        style={{ height: 450 }}
        data={diagnosis}
        renderItem={(item) => <Text>{item.item.Issue.Name}</Text>}
        keyExtractor={(item) => item.Name}
      />
    </View>
  );
}

export default Diagnosis;
