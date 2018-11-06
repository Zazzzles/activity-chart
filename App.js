import React from "react";
import { StyleSheet, View } from "react-native";
import ActivityChart from "./src/ActivityChart";

export default class App extends React.Component {

  render() {
    const data = [
      {
        start: "2018-10-20T08:17:03Z",
        end: "2018-10-20T08:17:20Z",
        active: false
      },
      {
        start: "2018-10-20T08:17:20Z",
        end: "2018-10-20T08:17:21Z",
        active: true
      },
      {
        start: "2018-10-20T08:17:21Z",
        end: "2018-10-20T08:17:24Z",
        active: false
      },
      {
        start: "2018-10-20T08:17:24Z",
        end: "2018-10-20T08:17:26Z",
        active: true
      },
      {
        start: "2018-10-20T08:17:26Z",
        end: "2018-10-20T08:17:28Z",
        active: false
      },
      {
        start: "2018-10-20T08:17:03Z",
        end: "2018-10-20T08:17:20Z",
        active: false
      },
      {
        start: "2018-11-02T08:17:20Z",
        end: "2018-11-02T08:17:21Z",
        active: true
      },
      {
        start: "2018-11-02T08:17:21Z",
        end: "2018-11-02T08:17:24Z",
        active: false
      },
      {
        start: "2018-11-02T08:17:24Z",
        end: "2018-11-02T08:17:26Z",
        active: true
      },
      {
        start: "2018-11-02T08:17:26Z",
        end: "2018-11-02T08:17:28Z",
        active: false
      },
      {
        start: "2018-11-02T08:17:28Z",
        end: "2018-11-02T08:17:31Z",
        active: true
      },
      {
        start: "2018-11-02T08:17:31Z",
        end: "2018-11-02T08:17:34Z",
        active: false
      },
      {
        start: "2018-11-02T08:17:34Z",
        end: "2018-11-02T08:17:58Z",
        active: true
      },
      {
        start: "2018-11-02T08:17:58Z",
        end: "2018-11-02T08:18:05Z",
        active: false
      },
      {
        start: "2018-11-02T08:18:05Z",
        end: "2018-11-02T08:18:53Z",
        active: true
      },
      {
        start: "2018-11-02T08:18:53Z",
        end: "2018-11-02T08:18:58Z",
        active: false
      },
      {
        start: "2018-11-02T08:18:58Z",
        end: "2018-11-02T08:18:59Z",
        active: true
      },
      {
        start: "2018-11-02T08:18:59Z",
        end: "2018-11-02T08:19:17Z",
        active: false
      },
      {
        start: "2018-11-02T08:19:17Z",
        end: "2018-11-02T08:19:36Z",
        active: true
      },
      {
        start: "2018-11-02T08:19:36Z",
        end: "2018-11-02T08:19:57Z",
        active: false
      },
      {
        start: "2018-11-06T08:18:59Z",
        end: "2018-11-06T08:19:17Z",
        active: false
      },
      {
        start: "2018-11-06T08:19:17Z",
        end: "2018-11-06T08:19:36Z",
        active: true
      },
      {
        start: "2018-11-06T08:19:36Z",
        end: "2018-11-06T08:19:57Z",
        active: false
      },
      {
        start: "2018-11-06T08:18:58Z",
        end: "2018-11-06T08:18:59Z",
        active: true
      },
      {
        start: "2018-11-06T08:18:59Z",
        end: "2018-11-06T08:19:17Z",
        active: false
      }
    ];

    return (
      <View style={styles.container}>
      
        <ActivityChart
          data={data}
          timeFrame={'1month'}
          barWidth={300}
          activeColor={"red"}
          inactiveColor={"grey"}
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
