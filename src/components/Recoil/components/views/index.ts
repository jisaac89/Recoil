
interface IViewProp{
	device: string;
	condition: string;
	children: React.ReactNode;
}

export const AndroidView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const BrowserView = (props: IViewProp) => {
	return props.device ? props.children : null;
};

export const IEView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const IOSView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const MobileView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const TabletView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const WinPhoneView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const MobileOnlyView = (props : IViewProp) => {
	return props.device ? props.children : null;
};

export const CustomView = (props : IViewProp) => {
	return props.condition ? props.children : null;
};
