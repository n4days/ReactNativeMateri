/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  eventFlashSale,
  jamFlashSale,
  kuponFlashSale,
  mallFlashSale,
  produkFlashSale,
  ukuran,
} from '../../Constants';
const FlashSale = () => {
  const itemNavbar = ({item}) => (
    <View key={item.id} style={styles.crN}>
      <View style={styles.rcrN}>
        <Text style={{color: 'black'}}>{item.jam}</Text>
        <Text style={{color: 'black'}}>{item.name}</Text>
      </View>
    </View>
  );
  const Navbar = () => {
    return (
      <View style={styles.rN}>
        <FlatList data={jamFlashSale} renderItem={itemNavbar} horizontal />
      </View>
    );
  };

  const itemHeader = ({item}) => (
    <View key={item.id} style={styles.crH}>
      <View style={styles.rcrH}>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            height: 50,
            color: 'orange',
          }}>
          {item.icon}
        </Text>
        <Text
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            height: 30,
            fontSize: 10,
            color: 'orange',
          }}>
          {item.name}
        </Text>
      </View>
    </View>
  );
  const Header = () => {
    return (
      <View style={styles.rH}>
        <FlatList data={kuponFlashSale} renderItem={itemHeader} horizontal />
      </View>
    );
  };
  const itemBody = ({item}) => (
    <View key={item.id} style={styles.rcB2}>
      <View style={styles.c1rcB2}>
        <View style={styles.rcrcB2}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('../../../dubailaylay.jpg')}
          />
        </View>
      </View>
      <View style={styles.c2rcB2}>
        <View style={styles.r2crcB2}>
          <View style={styles.crcrcB2}>
            <View style={styles.rcrcrcB2}>
              <Text style={{color: 'black'}}>{item.name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.r2crcB2}>
          <View style={styles.crcrcB2}>
            <View style={styles.r4crcrcB2}>
              <Text
                style={{
                  color: 'black',
                  opacity: 0.7,
                  textDecorationLine: 'line-through',
                  textAlignVertical: 'bottom',
                }}>
                Rp. {item.harga}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.r3crcB2}>
          <View style={styles.c2rcrcB2}>
            <View style={styles.r2crcrcB2}>
              <Text
                style={{
                  color: 'orange',
                  textAlignVertical: 'top',
                  fontSize: 20,
                }}>
                Rp. {item.harga - item.harga * item.dis}
              </Text>
            </View>
          </View>
          <View style={styles.c3rcrcB2}>
            <View style={styles.r3crcrcB2}>
              <Button color={'orange'} title="Beli" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  const Body = () => {
    return (
      <View style={styles.rB}>
        <View style={styles.cB1}>
          {/* Body Baris1 */}
          <View style={styles.rcB1}>
            <View style={styles.crcB1}>
              <View style={styles.rcrcB1}>
                <Text style={{color: 'black', opacity: 0.7}}>
                  BERAKHIR DALAM :
                </Text>
              </View>
            </View>
          </View>
          {/* Body Baris2 */}
          <FlatList data={produkFlashSale} renderItem={itemBody} />
          {/* Body Baris3 */}
          <View style={styles.rcB3}>
            <View style={styles.crcB3}>
              {/* Baris1 */}
              <View style={styles.rcrcB3}>
                <View style={styles.crcrcB3}>
                  <View style={styles.rcrcrcB3}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      MALL FLASH SALE
                    </Text>
                  </View>
                </View>
              </View>
              {/* Baris2 */}
              <View style={styles.r2crcB3}>
                {mallFlashSale.map(item => (
                  <View key={item.id} style={styles.c2rcrcB3}>
                    {/* Baris 1 */}
                    <View style={styles.r2crcrcB3}>
                      <View style={styles.crcrcrcB3}>
                        <View style={styles.rcrcrcrcB3}>
                          <Image
                            style={{height: '100%', width: '100%'}}
                            source={require('../../../dubailaylay.jpg')}
                          />
                        </View>
                      </View>
                    </View>
                    {/* Baris 2 */}
                    <View style={styles.r3crcrcB3}>
                      <View style={styles.c3rcrcrcB3}>
                        <View style={styles.r2crcrcrcB3}>
                          <Text
                            style={{
                              textAlign: 'center',
                              textDecorationLine: 'line-through',
                              color: 'black',
                              opacity: 0.7,
                            }}>
                            Rp. {item.harga}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.r3crcrcB3}>
                      <View style={styles.c3rcrcrcB3}>
                        <View style={styles.r2crcrcrcB3}>
                          <Text
                            style={{
                              textAlign: 'center',
                              color: 'orange',
                              fontSize: 20,
                            }}>
                            Rp. {item.harga - item.harga * item.dis}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const Footer = () => {
    return (
      <View style={styles.rF}>
        {eventFlashSale.map(item => (
          <View key={item.id} style={styles.crF}>
            <View style={styles.rcrF}>
              <Text style={{color: 'black'}}>{item.icon}</Text>
              <Text style={{color: 'black'}}>{item.name}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </SafeAreaView>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // NavbarCss
  rN: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  crN: {
    width: ukuran.width / 3,
  },
  rcrN: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // HeaderCss
  rH: {},
  crH: {
    width: 58.78,
    padding: 5,
  },
  rcrH: {
    backgroundColor: '#fff',
    width: '100%',
    height: 82,
  },
  // BodyCss
  r4crcrcB2: {
    width: '100%',
    height: 25,
  },
  r2crcrcrcB3: {
    width: '100%',
  },
  c3rcrcrcB3: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
  },
  r3crcrcB3: {
    width: '100%',
  },
  rcrcrcrcB3: {
    backgroundColor: '#ccc',
    height: 123,
  },
  crcrcrcB3: {
    backgroundColor: '#fff',
    padding: 5,
  },
  rB: {
    width: '100%',
  },
  cB1: {
    width: '100%',
    height: '100%',
  },
  rcB1: {
    width: '100%',
    marginBottom: 5,
  },
  crcB1: {
    width: '100%',
  },
  rcB2: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
  },
  rcB3: {
    backgroundColor: 'orange',
    width: '100%',
  },
  c1rcB2: {
    backgroundColor: '#fff',
    width: '30%',
    height: '100%',
    padding: 5,
  },
  c2rcB2: {
    width: '70%',
    height: '100%',
  },
  rcrcB1: {
    backgroundColor: '#ccc',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 5,
  },
  rcrcB2: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 118,
  },
  r2crcB2: {
    width: '100%',
  },
  r3crcB2: {
    width: '100%',
    flexDirection: 'row',
  },
  crcrcB2: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
  },
  c2rcrcB2: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 5,
  },
  c3rcrcB2: {
    backgroundColor: '#fff',
    width: '20%',
    padding: 5,
  },
  rcrcrcB2: {
    width: '100%',
    height: 38,
  },
  r2crcrcB2: {
    width: '100%',
    height: 35,
  },
  r3crcrcB2: {
    backgroundColor: 'orange',
    width: '100%',
  },
  crcB3: {
    width: '100%',
  },
  rcrcB3: {
    width: '100%',
  },
  c2rcB3: {
    backgroundColor: 'blue',
    width: '33.33%',
    padding: 5,
  },
  r2crcB3: {
    width: '100%',
    flexDirection: 'row',
  },
  crcrcB3: {
    width: '100%',
    padding: 5,
  },
  rcrcrcB3: {
    width: '100%',
  },
  c2rcrcB3: {
    width: '33.33%',
    padding: 5,
  },
  r2crcrcB3: {
    width: '100%',
  },
  // Footercss
  // footer: {
  //   backgroundColor: '#ccc',
  //   width: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  rF: {
    width: '100%',
    flexDirection: 'row',
  },
  crF: {
    width: '33.33%',
  },
  rcrF: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
