import Cookies from 'js-cookie'

  function save({token, user_id, color}) {
    Cookies.set("token", token);
    Cookies.set("user_id", user_id);
    Cookies.set("color", color);
  }

  function get() {
    const token = Cookies.get("token");
    const user_id = Cookies.get("user_id");
    return {token, user_id};
  }

  function clear() {
    Cookies.remove('token');
    Cookies.remove('user_id');
    Cookies.remove('color');
    window.location = "login";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { save, clear, get };