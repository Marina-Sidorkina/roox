export default class API {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  _usersListUrl = '/users';

  getUsersList() {
    return this._getResource(this._usersListUrl)
      .then((response) => response.json())
      .then((data) => data.map(API.transformUserData));
  }

  _getResource(url) {
    return fetch(`${this._apiBase}${url}`)
      .then(API.checkStatus)
      .catch((err) => {
        throw err;
      });
  }

  static transformUserData(user) {
    return {
      id: user.id,
      name: user.name,
      company: user.company.name,
      username: user.username,
      email: user.email,
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
      phone: user.phone,
      website: user.website,
    };
  }

  static checkStatus(response) {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
