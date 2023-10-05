// for update
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Tombol, Input, DropDown} from '../../Components';
import {launchImageLibrary} from 'react-native-image-picker';
import {listCategory} from '../../Services/category.service';
import {addProduct} from '../../Services/product.service';

const AddProduk = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    getCategories();
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      getCategories();
      setIsLoading(false);
    }, 1000);
  };

  const handleClearText = () => {
    setText('');
  };

  const getCategories = () => {
    listCategory(handleData);
  };

  const handleData = data => {
    setCategories(data.data);
  };

  const [inputs, setInputs] = useState({
    skuProduk: '',
    namaProduk: '',
    hargaProduk: '',
    isReadyProduk: 1,
    gambarProduk: '',
    kategoriProduk: '',
  });

  const [foto, setFoto] = useState({
    uri: '',
    type: '',
    name: 'Choose File',
  });

  const handleChange = (value, name) => {
    setInputs(values => ({...values, [name]: value}));
  };

  const validate = () => {
    const data = new FormData();

    data.append('kategoriProduk', inputs.kategoriProduk);
    data.append('namaProduk', inputs.namaProduk);
    data.append('skuProduk', inputs.skuProduk);
    data.append('hargaProduk', inputs.hargaProduk);
    data.append('isReadyProduk', 1);
    data.append('gambarProduk', foto);

    addProduct(data, response => {
      return Alert.alert('Information', response.message);
    });
    handleRefresh();
    handleClearText();
    handleChange('Pilih Kategori', 'kategoriProduk');
    handleChange('', 'namaProduk');
    handleChange('', 'skuProduk');
    handleChange('', 'hargaProduk');
    setFoto({
      uri: '',
      type: '',
      name: 'Choose File',
    });
    console.log(foto.name);
  };

  const openGalery = async () => {
    const options = {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      },
    };
    const image = await launchImageLibrary(options);

    setFoto({
      uri: image.assets[0].uri,
      type: image.assets[0].type,
      name: image.assets[0].fileName,
    });
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
      }>
      <DropDown
        label={'Kategori'}
        data={categories}
        textDefault={'Pilih Kategori'}
        onSelect={value => handleChange(value.idKategori, 'kategoriProduk')}
        buttonTextAfterSelection={(selectedItem, index) => {
          return (
            <>
              {inputs.kategoriProduk == 'Pilih Kategori'
                ? 'Pilih Kategori'
                : selectedItem.namaKategori}
            </>
          );
        }}
        rowTextForSelection={(item, index) => {
          return item.namaKategori;
        }}
      />
      <Input
        nama={'Nama Produk'}
        value={isLoading == true ? '' : inputs.namaProduk}
        onChangeText={value => handleChange(value, 'namaProduk')}
      />
      <Input
        nama={'SKU Produk'}
        value={isLoading == true ? '' : inputs.skuProduk}
        onChangeText={value => handleChange(value, 'skuProduk')}
      />
      <Input
        nama={'Harga Produk'}
        value={isLoading == true ? '' : inputs.hargaProduk}
        onChangeText={value => handleChange(value, 'hargaProduk')}
        numeric
      />
      <View style={styles.innerFoto}>
        <Text style={styles.label}>Foto Produk</Text>
        <View style={styles.filePicker}>
          <Tombol title={'=>File<='} onPress={openGalery} />
          <Text style={styles.labelFilePicker}>
            {isLoading == true ? 'Choose File' : foto.name}
          </Text>
        </View>
      </View>
      <Tombol
        title={'Save'}
        onPress={() => {
          validate();
        }}
      />
    </ScrollView>
  );
};

export default AddProduk;

const styles = StyleSheet.create({
  // css
  innerFoto: {paddingBottom: 15},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  labelFilePicker: {
    marginLeft: 10,
    fontSize: 14,
    color: '#3c3737',
    textAlignVertical: 'center',
  },
  filePicker: {
    width: '100%',
    height: 55,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 15,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#3c3737',
  },
});
