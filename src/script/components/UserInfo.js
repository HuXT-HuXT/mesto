export default class UserInfo {
  constructor(containerSelector, { userName, userAbout, userAvatar }) {
    this._container = document.querySelector(containerSelector);
    this._userName = this._container.querySelector(userName);
    this._userAbout = this._container.querySelector(userAbout);
    this._userAvatar = this._container.querySelector(userAvatar);
  }

  getUserData() {
    this._profileData = {
      name: this._userName.textContent,
      about: this._userAbout.textContent,
      avatar: this._userAvatar.src,
      userId: this._userId
    }

    return this._profileData;
  }

  setUserData(item) {
    this._userName.textContent = item.name;
    this._userAbout.textContent = item.about;
  }

  setUserAvatar(item) {
    this._userAvatar.src = item.avatar;
  }

  setUserId(item) {
    this._userId = item._id;
  }
}
