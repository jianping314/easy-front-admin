/**
 * Created by qianqing on 2017/2/4.
 */
import {$http} from '../../plugins/ajax';
import * as type from './type';

export default {
  [type.GET_CUSTOMER_INFO] ({commit, state}) {
    return new Promise((resolve, reject) => {
      $http('/url', {})
        .then(data => {
          commit(type.UPDATE_CUSTOMER_INFO, data);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
