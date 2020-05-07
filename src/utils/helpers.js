import dayjs from "dayjs";
import matchSorter from "match-sorter";
import { isEqual, get } from "lodash-es";
import jump from "jump.js";

const DATE_TIME_FORMAT_SIMPLE = "D MMM YYYY, HH:mm:ss";

export function createUUID() {
  // http://www.ietf.org/rfc/rfc4122.txt
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

// DATA FORMATTERS
function timeFormater(time, fromat) {
  const formatedTime =
    time && dayjs(time).isValid() && dayjs(time).format(fromat);
  return formatedTime || "—";
}
export function timeFormat(time) {
  return timeFormater(time, DATE_TIME_FORMAT_SIMPLE);
}

export function formatDate(date, format = "DD MMM YYYY, HH:mm:ss") {
  if (!dayjs(date).isValid()) return null;

  return dayjs(date).format(format);
}

export function dateToIso(date) {
  return date.toISOString();
}

export function formatSex(sex) {
  return (
    {
      0: "male",
      1: "female",
    }[sex] || null
  );
}

export function formatFaceSize(facesize) {
  if (facesize !== 0 && !facesize) return null;

  let fs = Math.floor(facesize / 1000);

  return fs >= 100 ? (fs = "99k+") : fs + "k";
}

// ARRAY
export function toggleInArray(arr = [], item) {
  return arr.includes(item)
    ? arr.filter((disabled) => item !== disabled)
    : arr.concat(item);
}

export function getArrayOfObjectKeys(record) {
  const headRow = [];
  for (let name in record) {
    headRow.push(name);
  }
  return headRow;
}

export function searchInList(list, query, keys) {
  return query
    ? matchSorter(list, query, {
        keys,
      })
    : list;
}

export function isNotEmpty(value, isZeroEmpty) {
  return (
    typeof value !== "undefined" &&
    value !== null &&
    value !== "" &&
    (isZeroEmpty ? value !== 0 : true)
  );
}

export function findOptionByValue(options, value) {
  return options.find((option) => isEqual(option.value, value));
}

export function mapDataToGetParams(data) {
  return (
    "?" +
    Object.keys(data)
      .filter((key) => data[key] !== null)
      .map((key) => `${key}=${data[key]}`)
      .join("&")
  );
}

export function getStringShort(
  string,
  maxLength = 10,
  firstPartCount,
  lastPartCount
) {
  const defaultPartCount = Math.floor((maxLength - 3) / 2);
  const { length: stringLength } = string;

  if (stringLength < maxLength) {
    return string;
  }

  return `${string.slice(
    0,
    firstPartCount || defaultPartCount
  )}...${string.slice(-(lastPartCount || defaultPartCount), stringLength)}`;
}

export function getFilenameShort(filename, maxLength = 10) {
  if (filename.length < maxLength) {
    return filename;
  }

  const extention = filename.split(".").pop();

  const firstPart = filename.slice(0, 4);
  const lastPart = filename.slice(
    -extention.length - 4,
    filename.length - extention.length - 1
  );

  return `${firstPart}...${lastPart}.${extention}`;
}

export function capitalize(s) {
  if (typeof s !== "string") return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

// DATE/TIME
export function isSameDate(d1, d2) {
  if (!d1 || !d2) return false;

  try {
    return new Date(d1).getTime() === new Date(d2).getTime();
  } catch (e) {
    console.log(e);

    return false;
  }
}

export function isValidDate(date, format) {
  if (format) {
    return dayjs(date, format).format(format) === date;
  }

  return dayjs(date).isValid();
}

export function getFromMapByIds(map, ids) {
  return ids.map((id) => map[id]).filter(Boolean);
}

export function removeKeyFromMap(map, key) {
  // eslint-disable-next-line no-unused-vars
  const { [key]: removed, ...restMap } = map;

  return restMap;
}

export function scrollToTop(options = {}) {
  document.querySelector("#app-container").scrollIntoView({
    behavior: "smooth",
    ...options,
  });
}

export function scrollToItem(selector, itemHeight, onScroll, options = {}) {
  const node = document.querySelector(selector);

  if (node) {
    // 200 секунд - тайминг анимация фэйда при переходе между страницами
    setTimeout(() => {
      jump(node, {
        offset: -(window.innerHeight / 2) + itemHeight,
        duration: 500,
        callback: onScroll,
        ...options,
      });
    }, 200);
  }
}

export function processFormValues(values) {
  return Object.entries(values).reduce((values, [key, value]) => {
    if (value && value.value !== undefined) {
      return { ...values, [key]: value.value };
    } else if (value instanceof Array) {
      const mapValue = value.map((value) => get(value, "value", value));

      return { ...values, [key]: mapValue };
    } else {
      return { ...values, [key]: value };
    }
  }, {});
}

export function isNumeric(x) {
  return (typeof x === "number" || typeof x === "string") && !isNaN(Number(x));
}

export function setNativeValue(element, value) {
  const valueSetter = Object.getOwnPropertyDescriptor(element, "value").set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(
    prototype,
    "value"
  ).set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
}
