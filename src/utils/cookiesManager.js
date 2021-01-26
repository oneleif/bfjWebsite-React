import Cookies from "js-cookie";
import { USER_SESSION } from "../constants/cookie_const";

export const setCookie = (data, cookie = USER_SESSION) => {
  Cookies.set(cookie, data, { expires: 1 });
};

export const getCookie = (cookie = USER_SESSION) => {
  const sessionCookie = Cookies.get(cookie);

  if (sessionCookie === undefined) {
    return undefined;
  } else {
    return JSON.parse(sessionCookie);
  }
};

export const destroyCookie = (cookie = USER_SESSION) => {
  Cookies.remove(cookie);
};
