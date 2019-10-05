import { browser, device, os, ua, engine } from './get-ua-data';
import * as create from './types';

const type = create.checkType(device.type);

export default () => {
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
