const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false
};

interface IBrowser {
  name: string | undefined;
  version: string | undefined;
  major: string | undefined;
}

interface IDevice {
  vendor: string | undefined;
  model: string | undefined;
}

interface IOs {
  name: string | undefined;
  version: string | undefined;
}

interface IEngine {
  name: string | undefined;
  version: string | undefined;
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
