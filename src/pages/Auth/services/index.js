import Base from '../../../services';

export default new (class AuthService extends Base {
  constructor() {
    super('/login');
  }
  signIn = async ($data) => {
    try {
      const {data} = await this.service.post(`${this.api}`, $data);
      return data;
    } catch (error) {
      throw this.statusResponse(error);
    }
  };
})();
