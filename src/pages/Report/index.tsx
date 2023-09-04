import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {listTransaksi} from '../../Services/transaksi.service';
import {CardReport} from '../../Layouts';
import {TextReport, TextTotalReport} from '../../Components';

const Report = () => {
  const [total, setTotal] = useState(0);
  const [transaksi, setTransaksi] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    getTransaksi();
  }, [refreshing]);

  const getTransaksi = () => {
    listTransaksi(handleData);
  };

  const handleData = data => {
    setTransaksi(data.data);
    let grandTotal = 0;
    data.data.map((item, index) => {
      grandTotal = grandTotal + parseInt(item.hargaProduk) * item.jumlah;
    });
    setTotal(grandTotal);
  };

  const ItemBody = ({item}) => {
    return (
      <CardReport>
        <CardReport.Body>
          <TextReport
            jumlah={item.jumlah}
            namaProduk={item.namaProduk}
            hargaProduk={item.hargaProduk}
          />
        </CardReport.Body>
      </CardReport>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={transaksi}
      renderItem={ItemBody}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ListFooterComponent={
        <View style={styles.containerFooter}>
          <TextTotalReport total={total} />
        </View>
      }
    />
  );
};

export default Report;

const styles = StyleSheet.create({
  // Bodycss
  containerFooter: {padding: 10},
  container: {backgroundColor: '#fff'},
});
