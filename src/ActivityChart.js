import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'
import moment from 'moment'


export default class ActivityChart extends PureComponent {

  generateBars = () =>{
        const { data, barWidth, activeColor, inactiveColor, timeFrame, placeholderStyle, placeholderText, placeholderTextStyle} = this.props

        timeFrameMatcher = {
            '1h': {c: 1, t: 'hour'},
            '8h': {c: 8, t: 'hour'},
            '24h': {c: 24, t: 'hour'},
            '1week': {c:1, t: 'week'},
            '1month': {c: 1, t: 'month'}
        }

        let tf = timeFrameMatcher[timeFrame]
        let activeTimes = []
        let total = 0
        let chunks = []
        data.map((item, index) =>{
        if(moment(item.start).isBetween(moment().subtract(tf.c, tf.t), moment())){
            let activeTime = moment(item.end).diff(moment(item.start), 'seconds')
            activeTimes.push({activeTime, active: item.active})
            total += activeTime
        }
        })
        activeTimes.map((i, index) =>{
            let perc = (i.activeTime/total)*barWidth
            activeTimes[index] = {...activeTimes[index], perc}
        })
        if(activeTimes.length == 0){
            chunks.push(
                <View key={0} style={[styles.placeholder, placeholderStyle]}>
                    <Text style={[styles.placeholderText, placeholderTextStyle]}>{placeholderText ? placeholderText : "No timestamps"}</Text>
                </View>
            )
        }else{
            activeTimes.map((item, index) =>{
                chunks.push(
                    <View key={index} style={[
                        styles.chunk,{
                            width: item.perc, 
                            backgroundColor: item.active ? activeColor : inactiveColor
                        }]}>
                    </View>
                )
            })
        }
        return chunks
  }
  
  render() {
      const { barWidth, barStyle } = this.props
    return (
      <View style={[styles.bar, {width: barWidth}, barStyle]}>
            {this.generateBars()}
      </View>
    );
  }
}

ActivityChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
        active: PropTypes.bool,
      })), 
    barWidth: PropTypes.number.isRequired, 
    activeColor: PropTypes.string.isRequired, 
    inactiveColor: PropTypes.string.isRequired, 
    timeFrame: PropTypes.oneOf(['1h', '8h', '24h', '1week', '1month']),
    barStyle: PropTypes.object,
    placeholderStyle:  PropTypes.object,
    placeholderText: PropTypes.string,
    placeholderTextStyle: PropTypes.object
}

const styles = StyleSheet.create({
    bar:{
        height: 50,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'grey',
        flexDirection: 'row'
    },
    placeholder:{
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    placeholderText:{
        color: 'white'
    },
    chunk:{
        height: '100%'
    }
})