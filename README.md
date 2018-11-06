# Activity/frequency chart

> A activity/frequency charting lib for react native with cross platform support for android and iOS.

> This type of chart is used for visualizing the frequency of a certian event over a fixed time period.

![Example](https://media.giphy.com/media/mx7Z0sUyXIMMdreLtd/giphy.gif)

## Code Samples

```
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
                ]
                return (
                <View style={styles.container}>
                    <ActivityChart
                    data={data}
                    timeFrame={"1month"}
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
```

## Usage

`<ActivityChart>` takes the following props: 
 * `data` Array of objects to be rendered in the chart. Objects in this array need to have `start`, `end` and `active` values.
 * `timeFrame` String Enum of `1h`, `8h`, `24h`, `1week` or `1month` used to change timeframe of chart
 * `barWidth` Width of bar container (This has an impact on width of slices)
 * `activeColor` Color of active time periods
 * `inactiveColor` Color of inactive time periods
 * `barStyle` Custom styles to be applied to bar container
 * `placeholderStyle` Custom styles to be applied to placeholder container if no data falls into selected timeframe
 * `placeholderText` String to be displayed when no data falls into selected timeframe
 * `placeholderTextStyle` Custom styles to be applied to placeholder text if no data falls into selected timeframe

## Installation

>This project requires expo to run. You can get it [here](https://docs.expo.io/versions/latest/introduction/installation).

## Starting the project

`npm run start`

or if you're using yarn

`yarn start`

## Pull Requests

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request