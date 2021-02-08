import {http} from './http';
import {statusResponse} from './response';
export default class Base {
  constructor(api) {
    this.api = api;
    this.service = http;
    this.statusResponse = statusResponse;
  }

  list = async () => {
    try {
      const {data} = await this.service.get(this.api);
      return data;
    } catch (error) {
      throw statusResponse(error, 'list');
    }
  };
}
