import Base from '../../../services';

export default new (class AuthService extends Base {
  constructor() {
    super('/login');
  }
  signIn = async ($data) => {
    try {
      const {data} = await this.service.post(`${this.api}/login`, $data);
      console.log(data);
      return data;
    } catch (error) {
      throw this.statusResponse(error);
    }
  };
})();
