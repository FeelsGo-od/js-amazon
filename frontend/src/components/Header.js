import { getUserInfo } from '../localStorage';

/* eslint-disable arrow-body-style */
const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
    <div class="brand">
        <a href="/#/">jsamazon</a>
    </div>
    <div>
    ${
      name
        ? `<a href="/#/profile">${name}</a>`
        : `<a href="/#/signin">Sign-In</a>`
    }
        <a href="/#/cart">Cart</a>
    </div>`;
  },
  after_render: () => {},
};

export default Header;
