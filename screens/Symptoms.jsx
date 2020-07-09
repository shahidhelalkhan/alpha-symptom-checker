import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Request from "../api/requests";
import Loader from "./Loader";
import { Chip } from "react-native-paper";

import { SearchBar } from "react-native-elements";

const searchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <SearchBar
        lightTheme
        round
        placeholder="Start typing symptoms"
        onChangeText={(text) => setSearch(text)}
        value={search}
      ></SearchBar>
    </>
  );
};
const FlatListItemSeparator = () => <View style={styles.line} />;

function Symptoms(props) {
  const [loading, SetLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [token, SetToken] = useState(props.route.params.token);
  const [data, SetData] = useState(null);

  useEffect(() => {
    Request.getSymptoms(token).then((res) => {
      SetData(res);
      SetLoading(false);
    });
  }, []);
  const selectItem = (i, selected) => {
    const modifiedData = [...data];
    modifiedData[i].selected = !selected;
    SetData(modifiedData);
  };

  const goToDiagnosis = () => {
    let symptomArray = [];
    data.map((obj) => {
      if (obj.selected) {
        symptomArray.push(obj);
      }
    });
    props.navigation.navigate("diagnosis", {
      symptoms: symptomArray,
      token: token,
    });
  };

  const renderItem = ({ item, index }) => {
    if (item.selected) {
      return (
        <Chip
          icon="checkbox-marked"
          onClose={() => selectItem(index, item.selected)}
        >
          {item.Name}
        </Chip>
      );
    } else {
      return (
        <Chip
          icon="information"
          onPress={() => selectItem(index, item.selected)}
        >
          {item.Name}
        </Chip>
      );
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ height: 450 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.Name}
        ListHeaderComponent={searchBar}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#84CAE7",
        }}
        onPress={() => goToDiagnosis()}
      >
        {loader ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={{ color: "white" }}>Continue</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "purple",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Symptoms;
