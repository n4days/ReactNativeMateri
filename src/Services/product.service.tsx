import axios from 'axios';
export const listProduct = async callback => {
  await axios
    .get('http://192.168.1.23/backend-kasir/public/produk')
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
