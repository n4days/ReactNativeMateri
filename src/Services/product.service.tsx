import axios from 'axios';
import {stringConst} from '../Constants';
export const listProduct = async callback => {
  await axios
    .get(`${stringConst.stringUrlAPI}produk`)
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};

export const addProduct = (data, callback) => {
  axios
    .post(`${stringConst.stringUrlAPI}addProduk`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
export const deleteProduct = (id, data, callback) => {
  axios
    .post(`${stringConst.stringUrlAPI}produk/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
export const editProduct = (id, data, callback) => {
  axios
    .post(`${stringConst.stringUrlAPI}updateProduk/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
