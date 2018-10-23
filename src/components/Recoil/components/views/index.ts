import React from 'react';

export const AndroidView = (props) => {
	return props.device ? props.children : null;
};

export const BrowserView = (props) => {
	return props.device ? props.children : null;
};

export const IEView = (props) => {
	return props.device ? props.children : null;
};

export const IOSView = (props) => {
	return props.device ? props.children : null;
};

export const MobileView = (props) => {
	return props.device ? props.children : null;
};

export const TabletView = (props) => {
	return props.device ? props.children : null;
};

export const WinPhoneView = (props) => {
	return props.device ? props.children : null;
};

export const MobileOnlyView = (props) => {
	return props.device ? props.children : null;
};

export const CustomView = (props) => {
	return props.condition ? props.children : null;
};
