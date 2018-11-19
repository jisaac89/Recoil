import UAParser from 'ua-parser-js';

export const UA = new UAParser();

export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setUA = (uaStr) => UA.setUA(uaStr);
