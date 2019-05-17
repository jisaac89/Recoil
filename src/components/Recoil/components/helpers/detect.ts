import { browser, device, engine, os, ua } from './get-ua-data';
import { broPayload, checkType, mobilePayload } from './types';

export const type = checkType(device.type);

export const isBrowser = browserType => {
  return broPayload(isBrowser, browser, engine, os, ua);
};

export const isMobile = browserType => {
  return mobilePayload(type, device, os, ua);
};

export const isTablet = tabletType => {
  return mobilePayload(type, device, os, ua);
};
