import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Tombol} from './Components';
import {produk} from './Constants';
import {Card, CardKosong} from './Layouts';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const App = () => {
  return (
    <ScrollView>
      <View style={styles.container_fluid}>
        {produk.length > 0 &&
          produk.map(item => (
            <Card
              key={item.id}
              img={item.img}
              category={item.category}
              name={item.name}
              width={WIDTH}
              height={HEIGHT}>
              <Tombol title="Add to Card" color={item.color} />
            </Card>
          ))}
        {produk.length % 2 !== 0 && (
          <CardKosong width={WIDTH} height={HEIGHT}></CardKosong>
        )}
      </View>
    </ScrollView>
  );
};

export default App;

// CSS
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
  container_fluid: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
