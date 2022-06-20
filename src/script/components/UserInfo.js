export default class UserInfo {
  constructor(containerSelector, { userName, userAbout }) {
    this._container = document.querySelector(containerSelector);
    this._userName = this._container.querySelector(userName);
    this._userAbout = this._container.querySelector(userAbout);
  }

  getUserData() {
    this._profileData = {
      userName: this._userName.textContent,
      userAbout: this._userAbout.textContent
    }

    return this._profileData;
  }

  setUserData(newName, newAbout) {
    this._userName.textContent = newName,
    this._userAbout.textContent = newAbout
  }
}
