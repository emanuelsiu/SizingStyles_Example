import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const DesignerWidth = 375
const normalizedUnit = windowWidth / DesignerWidth

const pixelUnit = 64;

export default function App() {


  return (
    <View style={styles.container}>

      <View style={styles.container}>
        <Text>Size Comparisons</Text>

        {/* top red box */}
        <View style={styles.flex1}>
          <Text>{`phone width = ${windowWidth}`}</Text>
          <Text> {`phone height = ${windowHeight}`} </Text>
          <Text> {`normalized unit = ${normalizedUnit}`} </Text>
        </View>

        {/* bottom blue box */}
        <View style={styles.flex2}>
          <Text style={{ color: 'white' }}>
            {`hardcoded size = 64`}
          </Text>
        </View>

        {/* 8pt grid container NON - NORMALIZED  */}
        <Text style={{ color: 'black' }}>
          {`NON normalized container`}
        </Text>
        <View style={styles.nonNormalizedContainer}>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
          <View style={styles.nonNormalizedItem}><Text>{`${pixelUnit} px`}</Text></View>
        </View>

        {/* 8pt grid container NORMALIZED */}
        <Text style={{ color: 'black' }}>
          {`normalized container`}
        </Text>
        <View style={styles.normalizedContainer}>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
          <View style={styles.normalizedItem}><Text>{`${pixelUnit} nu`}</Text></View>
        </View>



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
    width: windowWidth,
    backgroundColor: '#e88161',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex2: {
    flex: 1,
    width: 64,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonNormalizedContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalizedContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonNormalizedItem: {
    borderColor: 'black',
    borderWidth: 8,
    backgroundColor: '#f5d742',
    width: pixelUnit,
    height: pixelUnit,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalizedItem: {
    borderWidth: 8 * normalizedUnit,
    backgroundColor: '#f5d742',
    backgroundColor: '#47cc6f',
    width: pixelUnit * normalizedUnit,
    height: pixelUnit * normalizedUnit,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
