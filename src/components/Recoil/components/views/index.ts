import React, { ReactNode } from 'react';

interface IViewTypeProps {
  device: string;
  children: ReactNode[];
  condition: string;
}

export const AndroidView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const BrowserView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const IEView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const IOSView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const MobileView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const TabletView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const WinPhoneView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const MobileOnlyView = (props: IViewTypeProps) => {
  return props.device ? props.children : null;
};

export const CustomView = (props: IViewTypeProps) => {
  return props.condition ? props.children : null;
};
