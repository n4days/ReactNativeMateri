import axios from 'axios';
import {stringConst} from '../Constants';
export const listCategory = async callback => {
  await axios
    .get(`${stringConst.stringUrlAPI}kategori`)
    .then(response => {
      callback(response.data);
    })
    .then(error => {
      console.log(error);
    });
};
