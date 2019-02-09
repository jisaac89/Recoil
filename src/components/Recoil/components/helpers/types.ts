
interface IBrowser{
  major?: string;
  version?: string;
  name?: string;
}

const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false
};

export const checkType = (type: string) => {
  switch (type) {
    case "mobile":
      return {
        isMobile: true
      };
    case "tablet":
      return {
        isTablet: true
      };
    case undefined:
      return {
        isBrowser: true
      };
    default:
      return initialData;
  }
};

export const getCurrentBrowser = (name: string) => {
  switch (name) {
    case "Chrome":
      return true;
    case "Firefox":
      return true;
    case "Opera":
      return true;
    case "Yandex":
      return true;
    case "Safari":
      return true;
    case "IE":
      return true;
    case "Edge":
      return true;
    case "Chromium":
      return true;
    default:
      return false;
  }
};

export const broPayload = (isBrowser : boolean, browser : IBrowser, engine  : IBrowser, os  : IBrowser, ua : string) => {
  return {
    isBrowser,
    browserMajorVersion: browser.major,
    browserFullVersion: browser.version,
    browserName: browser.name,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

export const mobilePayload = (type : {
  isMobile?: boolean,
  isDesktop?: boolean,
  isTablet?: boolean
}, device : {vendor :string, model: string}, os : {name :string, version: string}, ua : string) => {
  return {
    type,
    vendor: device.vendor || "none",
    model: device.model || "none",
    os: os.name || "none",
    osVersion: os.version || "none",
    ua: ua || "none"
  };
};
