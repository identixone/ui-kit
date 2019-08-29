import { cookie } from "browser-cookie-lite";

let storage = window.localStorage;

const NAME = "localStorageFallback";
const TTL = 365 * 24 * 60 * 60;
const PATH = "/";
const DOMAIN = null;
export const SECURE = window.location.protocol.startsWith("https");

try {
  if (!window.localStorage) {
    throw new Error("localStorage not supported");
  }
  const keyProbe = "___test-local-stoage___";
  storage.setItem(keyProbe, keyProbe);
  storage.removeItem(keyProbe);
} catch (e) {
  storage = {
    getItem: key => {
      const data = get();
      return data[key];
    },

    setItem: (key, item) => {
      const data = get();
      data[key] = item.toString();
      save(data);
    },

    removeItem: key => {
      const data = get();
      delete data[key];
      save(data);
    },

    clear: () => {
      cookie(NAME, "", -1);
    },
  };
}

function get() {
  return JSON.parse(cookie(NAME) || "{}");
}

function save(data) {
  cookie(NAME, JSON.stringify(data), TTL, PATH, DOMAIN, SECURE);
}

export default storage;
