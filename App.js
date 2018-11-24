import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityChart from "./src/ActivityChart";

export default class App extends React.Component {

  render() {
    const data = [
      {
        start: "2018-10-20T08:17:03Z",
        end: "2018-10-20T08:17:20Z",
        color: "red"
      },
      {
        start: "2018-10-20T08:17:20Z",
        end: "2018-10-20T08:17:21Z",
        color: "grey"
      },
      {
        start: "2018-10-20T08:17:21Z",
        end: "2018-10-20T08:17:24Z",
        color: "purple"
      },
      {
        start: "2018-10-20T08:17:24Z",
        end: "2018-10-20T08:17:26Z",
        color: "blue"
      },
      {
        start: "2018-10-20T08:17:26Z",
        end: "2018-10-20T08:17:28Z",
        color: "grey"
      },
      {
        start: "2018-10-20T08:17:03Z",
        end: "2018-10-20T08:17:20Z",
        color: "red"
      },
      {
        start: "2018-11-02T08:17:20Z",
        end: "2018-11-02T08:17:21Z",
        color: "grey"
      },
      {
        start: "2018-11-02T08:17:21Z",
        end: "2018-11-02T08:17:24Z",
        color: "blue"
      },
      {
        start: "2018-11-02T08:17:24Z",
        end: "2018-11-02T08:17:26Z",
        color: "grey"
      },
      {
        start: "2018-11-02T08:17:26Z",
        end: "2018-11-02T08:17:28Z",
        color: "purple"
      },
      {
        start: "2018-11-02T08:18:59Z",
        end: "2018-11-02T08:19:17Z",
        color: "blue"
      },
      {
        start: "2018-11-02T08:19:17Z",
        end: "2018-11-02T08:19:36Z",
        color: "grey"
      },
      {
        start: "2018-11-02T08:19:36Z",
        end: "2018-11-02T08:19:57Z",
        color: "blue"
      },
      {
        start: "2018-11-06T08:18:59Z",
        end: "2018-11-06T08:19:17Z",
        color: "red"
      },
      {
        start: "2018-11-06T08:19:17Z",
        end: "2018-11-06T08:19:36Z",
        color: "grey"
      },
      {
        start: "2018-11-06T08:19:36Z",
        end: "2018-11-06T08:19:57Z",
        color: "blue"
      },
      {
        start: "2018-11-06T08:18:58Z",
        end: "2018-11-06T08:18:59Z",
        color: "grey"
      },
      {
        start: "2018-11-06T08:18:59Z",
        end: "2018-11-06T08:19:17Z",
        color: "red"
      }
    ];

    return (
      <View style={styles.container}>
      
        <ActivityChart
          data={data}
          timeFrame={'1month'}
          barWidth={300}
          barStyle={{ height: 50 }}
          placeholderStyle={{ backgroundColor: "grey" }}
          placeholderText={"No timestamps"}
          placeholderTextStyle={{ color: "white" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
