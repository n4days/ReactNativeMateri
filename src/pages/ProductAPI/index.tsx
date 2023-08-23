import {FlatList, SafeAreaView, StyleSheet, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import {listProduct} from '../../Services/product.service';
import {CardBody} from '../../Layouts';
import {
  ImageCardBody,
  SkuCardBody,
  NameCardBody,
  PriceCardBody,
  CategoryCardBody,
  ReadyCardBody,
} from '../../Components';

const ProductAPI = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
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

  const handleData = data => {
    setProducts(data.data);
  };

  const ItemBody = ({item}) => {
    return (
      <CardBody>
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

  return (
    <SafeAreaView>
      <Body />
    </SafeAreaView>
  );
};

export default ProductAPI;

const styles = StyleSheet.create({});
