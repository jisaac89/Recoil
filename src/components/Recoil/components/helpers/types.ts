const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false
};

interface IBrowser {
  name: string;
  version: string;
  major: string;
}

interface IDevice {
  vendor: string;
  model: string;
}

interface IOs {
  name: string;
  version: string;
}

interface IEngine {
  name: string;
  version: string;
}

export const checkType = (type: string | undefined) => {
  switch (type) {
    case 'mobile':
      return {
        isMobile: true
      };
    case 'tablet':
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
    case 'Chrome':
      return true;
    case 'Firefox':
      return true;
    case 'Opera':
      return true;
    case 'Yandex':
      return true;
    case 'Safari':
      return true;
    case 'IE':
      return true;
    case 'Edge':
      return true;
    case 'Chromium':
      return true;
    default:
      return false;
  }
};

export const broPayload = (isBrowser: boolean, browser: IBrowser, engine: IEngine, os: IOs, ua: string) => {
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

export const mobilePayload = (type: any, device: IDevice, os: IOs, ua: string) => {
  return {
    type,
    vendor: device.vendor || 'none',
    model: device.model || 'none',
    os: os.name || 'none',
    osVersion: os.version || 'none',
    ua: ua || 'none'
  };
};
