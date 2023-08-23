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
