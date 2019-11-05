import dayjs from "dayjs";
import matchSorter from "match-sorter";
import { isEqual } from "lodash-es";

const DATE_TIME_FORMAT_SLASHES = "DD/MM/YY HH:mm";
const DATE_TIME_FORMAT_SIMPLE = "D MMM YYYY, HH:mm:ss";

const defaultConfValues = {
  new: false,
  reinit: false,
  exact: false,
  ha: false,
  junk: false,
  nm: false,
  det: false,
};

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

export function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = unescape(dataURI.split(",")[1]);
  // separate out the mime component
  var mimeString = dataURI
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

export function timeFormatSlashes(time) {
  return timeFormater(time, DATE_TIME_FORMAT_SLASHES);
}

export function timeFormat(time) {
  return timeFormater(time, DATE_TIME_FORMAT_SIMPLE);
}

function timeFormater(time, fromat) {
  const formatedTime =
    time && dayjs(time).isValid() && dayjs(time).format(fromat);
  return formatedTime || "—";
}

export function formatDate(date, format = "DD MMM YYYY, HH:mm:ss") {
  if (!dayjs(date).isValid()) return null;

  return dayjs(date).format(format);
}

/**
 *
 * проверить и поменять название при использовании данного хелпера
 */
// export function formatDate(date) {
//   return date.toISOString();
// }

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

export function toggleInArray(arr = [], item) {
  return arr.includes(item)
    ? arr.filter(disabled => item !== disabled)
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

export function formatFaceSize(facesize) {
  if (facesize !== 0 && !facesize) return null;

  let fs = Math.floor(facesize / 1000);

  return fs >= 100 ? (fs = "99k+") : fs + "k";
}

export function filtersToString(filters) {
  return Object.keys(filters).join();
}

export function parseFilters(filters) {
  if (filters && filters.conf) {
    const confArray = filters.conf.split(",");
    const confObj = confArray.reduce((obj, value) => {
      obj[value] = true;
      return obj;
    }, {});

    const mappedFilters = {
      offset: Number(filters.offset || 0),
      limit: Number(filters.limit),
    };

    return {
      ...filters,
      ...mappedFilters,
      conf: { ...defaultConfValues, ...confObj },
    };
  }
  return {};
}

export function isNotEmpty(value, isZeroEmpty) {
  return (
    typeof value !== "undefined" &&
    value !== null &&
    value !== "" &&
    (isZeroEmpty ? value !== 0 : true)
  );
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export function findOptionByValue(options, value) {
  return options.find(option => isEqual(option.value, value));
}

export function transformFilters(filters) {
  const confString =
    filters.conf &&
    Object.keys(filters.conf)
      .filter(prop => filters.conf[prop] === true)
      .join();
  return { ...filters, conf: confString };
}

export function mapDataToGetParams(data) {
  return (
    "?" +
    Object.keys(data)
      .filter(key => data[key] !== null)
      .map(key => `${key}=${data[key]}`)
      .join("&")
  );
}

export function mapFiltersToGetParams(filters) {
  const transformedFilters = transformFilters(filters);

  return mapDataToGetParams(transformedFilters);
}
