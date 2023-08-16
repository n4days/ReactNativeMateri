import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Tombol, Gambar, Tulisan} from '../../Components';
import {produk, ukuran} from '../../Constants';
import {Card, CardKosong} from '../../Layouts';
const Product = () => {
  return (
    <ScrollView>
      <View style={styles.container_fluid}>
        {produk.length > 0 &&
          produk.map(item => (
            <Card key={item.id} width={ukuran.width} height={ukuran.height}>
              <Card.Header>
                <Gambar img={item.img} />
              </Card.Header>
              <Card.Body>
                <Tulisan category={item.category} name={item.name} />
              </Card.Body>
              <Card.Footer>
                <Tombol
                  title={'Add to Card'}
                  color={item.color}
                  onPress={() => console.log('Press')}
                />
              </Card.Footer>
            </Card>
          ))}
        {produk.length % 2 !== 0 && (
          <CardKosong width={ukuran.width} height={ukuran.height} />
        )}
      </View>
    </ScrollView>
  );
};

export default Product;

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
