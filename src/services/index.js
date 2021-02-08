import {http} from './http';
import {statusResponse} from './response';
export default class Base {
  constructor(api) {
    this.api = api;
    this.service = http;
    this.statusResponse = statusResponse;
  }

  list = async ($params = '') => {
    try {
      const data = await this.service.get(this.api, {params: $params});
      return data;
    } catch (error) {
      throw statusResponse(error, 'list');
    }
  };
}
