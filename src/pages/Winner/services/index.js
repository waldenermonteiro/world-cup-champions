import Base from '../../../services';

export default new (class WinnerService extends Base {
  constructor() {
    super('/winners');
  }
})();
