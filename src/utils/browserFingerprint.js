export default function getBrowserFingerprint() {
  const UNKNOWN = "unknown";
  const userAgent = (window.navigator && window.navigator.userAgent) || UNKNOWN;
  const timezoneOffset = new Date().getTimezoneOffset();
  const resolution = window.screen
    ? [window.screen.availWidth, window.screen.availHeight]
        .sort()
        .reverse()
        .join("x")
    : UNKNOWN;
  return JSON.stringify({ userAgent, resolution, timezoneOffset });
}
