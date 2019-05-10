import { browser, device, engine, os, ua } from './get-ua-data';
import create from './types';

const type = create.checkType(device.type);

export  () => {
  const { isBrowser, isMobile, isTablet } = type;
  if (isBrowser) {
    return create.broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, device, os, ua);
  }
};
