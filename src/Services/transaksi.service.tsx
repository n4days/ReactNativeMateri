import axios from 'axios';
import {stringConst} from '../Constants';
export const listTransaksi = async callback => {
  await axios
    .get(`${stringConst.stringUrlAPI}transaksi`)
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
