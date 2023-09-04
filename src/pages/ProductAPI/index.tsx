import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  Alert,
  Modal,
  View,
  Text,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {editProduct, listProduct} from '../../Services/product.service';
import {CardBody} from '../../Layouts';
import {
  ImageCardBody,
  SkuCardBody,
  NameCardBody,
  PriceCardBody,
  CategoryCardBody,
  ReadyCardBody,
  DropDown,
  Input,
  Tombol,
} from '../../Components';
import {deleteProduct} from '../../Services/product.service';
import {listCategory} from '../../Services/category.service';
import {ukuran} from '../../Constants';
import {launchImageLibrary} from 'react-native-image-picker';

const ProductAPI = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      getProducts();
      setIsLoading(false);
    }, 1000);
  };

  const getProducts = () => {
    listProduct(handleData);
  };

  const getCategories = () => {
    listCategory(handleCategories);
  };

  const handleData = data => {
    setProducts(data.data);
  };

  const handleCategories = data => {
    setCategories(data.data);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [foto, setFoto] = useState({
    uri: '',
    type: '',
    name: '',
  });

  const [fotoLama, setFotoLama] = useState({
    name: '',
  });

  const [inputs, setInputs] = useState({
    skuProduk: '',
    namaProduk: '',
    hargaProduk: '',
    isReadyProduk: '',
    gambarProduk: '',
    gambarProdukLama: '',
    kategoriProduk: '',
    kategoriProdukLama: '',
  });

  const handleChange = (value, name) => {
    setInputs(values => ({...values, [name]: value}));
  };

  const [selectedId, setSelectedId] = useState(null);

  const editProduk = (id, gambarProduk, kategoriSlug) => {
    const dataDelete = new FormData();

    dataDelete.append('gambarProduk', gambarProduk);
    dataDelete.append('kategoriSlug', kategoriSlug);

    return Alert.alert(
      'Edit Produk',
      'Apakah anda yakin ingin mengedit produk ini?',
      [
        {
          text: 'Hapus',
          onPress: () => {
            deleteProduct(id, dataDelete, response => {
              return Alert.alert('Information', response.message);
            });
            handleRefresh();
          },
        },
        {
          text: 'Tidak',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => {
            setSelectedId(id);
            setModalVisible(true);
          },
        },
      ],
    );
  };

  const validate = (id, kategoriProdukLama) => {
    const data = new FormData();

    data.append('kategoriProduk', inputs.kategoriProduk);
    data.append('kategoriProdukLama', kategoriProdukLama);
    data.append('namaProduk', inputs.namaProduk);
    data.append('skuProduk', inputs.skuProduk);
    data.append('hargaProduk', inputs.hargaProduk);
    data.append('isReadyProduk', inputs.isReadyProduk == 'Tersedia' ? 1 : 0);
    data.append('gambarProduk', foto);
    data.append('gambarProdukLama', fotoLama.name);

    // return Alert.alert(
    //   'Simpan Produk',
    //   'Apakah anda yakin ingin menyimpan produk ini?',
    //   [
    //     {
    //       text: 'Tidak',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'Ya',
    //       onPress: () => {
    //         editProduct(id, data, response => {
    //           return Alert.alert('Information', response.message);
    //         });
    //         setModalVisible(false);
    //         handleRefresh();
    //       },
    //     },
    //   ],
    // );
    editProduct(id, data, response => {
      return Alert.alert('Information', response.message);
    });
    setModalVisible(false);
    handleRefresh();
  };

  const ItemBody = ({item}) => {
    return (
      <CardBody>
        <TouchableOpacity
          onPress={() =>
            editProduk(item.idProduk, item.gambarProduk, item.slugKategori)
          }>
          <CardBody.Header>
            <ImageCardBody
              slugKategori={item.slugKategori}
              gambarProduk={item.gambarProduk}
            />
          </CardBody.Header>
          <CardBody.Body>
            <SkuCardBody skuProduk={item.skuProduk} />
            <NameCardBody namaProduk={item.namaProduk} />
            <PriceCardBody hargaProduk={item.hargaProduk} />
            <CategoryCardBody namaKategori={item.namaKategori} />
            <ReadyCardBody isReadyProduk={item.isReadyProduk} />
          </CardBody.Body>
        </TouchableOpacity>
      </CardBody>
    );
  };

  const Body = () => {
    // Card
    return (
      // Container
      <FlatList
        data={products}
        keyExtractor={item => item.idProduk}
        renderItem={ItemBody}
        numColumns={2}
        style={{backgroundColor: '#fff'}}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
      />
    );
  };

  const openGalery = async gambarProdukLama => {
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

    setFotoLama({
      name: gambarProdukLama,
    });
  };

  const ready = ['Tersedia', 'Habis'];

  return (
    <SafeAreaView>
      <Body />
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Konten modal */}
              <ScrollView style={styles.container}>
                {products.map(item => {
                  if (item.idProduk == selectedId) {
                    return (
                      <View key={selectedId}>
                        <DropDown
                          label={'Kategori'}
                          data={categories}
                          textDefault={item.namaKategori}
                          onSelect={value =>
                            handleChange(value.idKategori, 'kategoriProduk')
                          }
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.namaKategori;
                          }}
                          rowTextForSelection={(item, index) => {
                            return item.namaKategori;
                          }}
                        />
                        <Input
                          nama={'Nama Produk'}
                          onChangeText={value =>
                            handleChange(value, 'namaProduk')
                          }
                          placeholder={item.namaProduk}
                        />
                        <Input
                          nama={'SKU Produk'}
                          onChangeText={value =>
                            handleChange(value, 'skuProduk')
                          }
                          placeholder={item.skuProduk}
                        />
                        <Input
                          nama={'Harga Produk'}
                          onChangeText={value =>
                            handleChange(value, 'hargaProduk')
                          }
                          numeric
                          placeholder={item.hargaProduk}
                        />
                        <DropDown
                          label={'Ketersediaan'}
                          data={ready}
                          textDefault={
                            item.isReadyProduk == 1 ? 'Tersedia' : 'Habis'
                          }
                          onSelect={value =>
                            handleChange(value, 'isReadyProduk')
                          }
                          buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                          }}
                          rowTextForSelection={(item, index) => {
                            return ready[index];
                          }}
                        />
                        <View style={styles.innerFoto}>
                          <Text style={styles.label}>Foto Produk</Text>
                          <View style={styles.filePicker}>
                            <Tombol
                              title={'=>File<='}
                              onPress={() => openGalery(item.gambarProduk)}
                            />
                            <Text style={styles.labelFilePicker}>
                              {foto.name ? foto.name : item.gambarProduk}
                            </Text>
                          </View>
                        </View>
                        <Tombol
                          color={'red'}
                          title={'Close'}
                          onPress={() => setModalVisible(false)}
                        />
                        <View style={{paddingBottom: 10}}></View>
                        <Tombol
                          title={'Update'}
                          onPress={() =>
                            validate(selectedId, item.slugKategori)
                          }
                        />
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default ProductAPI;

const styles = StyleSheet.create({
  innerFoto: {paddingBottom: 15},
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
    width: ukuran.width,
    flex: 1,
    padding: 15,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#3c3737',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});
