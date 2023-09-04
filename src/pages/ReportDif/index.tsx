import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Agenda} from 'react-native-calendars';
import LottieView from 'lottie-react-native';
import {noData, Boynotfound, found} from '../../assets';
import {listTransaksi} from '../../Services/transaksi.service';
import {ukuran} from '../../Constants';

const ReportDif = () => {
  const [sellings, setSellings] = useState({});
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    // Perform any necessary actions here
    // For example, fetch new data from an API

    // After the actions are complete, set isRefreshing to false
    setIsRefreshing(false);
  };

  useEffect(() => {
    getTransaksi();
  }, [isRefreshing]);

  const getTransaksi = () => {
    listTransaksi(handleData);
  };

  const handleData = data => {
    let dataFix = transformData(data.data);
    setSellings(dataFix);
  };

  const transformData = jsonData => {
    // const parsedData = JSON.parse(jsonData);
    const hasil = {};

    jsonData.forEach(item => {
      const tanggal = item.tanggal.split(' ')[0];
      const waktu = item.tanggal.split(' ')[1];
      const judul = item.namaProduk;

      if (!hasil[tanggal]) {
        hasil[tanggal] = [];
      }

      hasil[tanggal].push({
        time: waktu,
        title: judul,
      });
    });

    return hasil;
  };

  const itemCalendar = item => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  const emptyData = () => (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }>
      <View style={styles.noData}>
        <LottieView source={found} autoPlay loop style={styles.lottie} />
        <Text>Tidak ada penjualan</Text>
      </View>
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <Agenda
        items={sellings}
        renderItem={itemCalendar}
        showClosingKnob={true}
        hideExtraDays={false}
        onRefresh={getTransaksi}
        renderEmptyData={emptyData}
      />
    </View>
  );
};

export default ReportDif;

const styles = StyleSheet.create({
  // css
  item: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  noData: {
    paddingVertical: ukuran.height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: '70%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
