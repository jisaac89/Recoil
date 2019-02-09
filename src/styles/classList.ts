type IStyleValue = string;

export const fill = {
	'height': '100%',
	'width': '100%'
};

export const flex = {
	flex: '1'
};

export const flexCenter = {
	'justify-content': 'center',
	'flex-direction': 'column',
	'align-items': 'center'
};

export const dblock = {
	width: '100%',
	flex: '1',
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: '0%'
};

export const dinblock = {
	display: 'inline-block'
};

export const scroll = {
	overflow: 'auto'
};

export const scrollX = {
	'overflow-x': 'auto'
};

export const scrollY = {
	'overflow-y': 'auto'
};

export const overflow = {
	overflow: 'visible'
};

// Padding

export function p(x: IStyleValue) {
	return {
		padding: x
	};
}

export function ps(x: IStyleValue) {
	return {
		paddingLeft: x,
		paddingRight: x
	};
}

export function ptb(x: IStyleValue) {
	return {
		'padding-top': x,
		'padding-bottom': x
	};
}

// Margin

export function m(x: IStyleValue) {
	return {
		margin: x
	};
}

export function ms(x: IStyleValue) {
	return {
		marginLeft: x,
		marginRight: x
	};
}

export function mtb(x: IStyleValue) {
	return {
		marginTop: x,
		marginBottom: x
	};
}

// Width

export function w(x: IStyleValue) {
	return {
		'width': x
	};
}

export function mw(x: IStyleValue) {
	return {
		'max-width': x
	};
}

// Height

export function h(x: IStyleValue) {
	return {
		height: x
	};
}

export function mh(x: IStyleValue) {
	return {
		maxHeight: x
	};
}

// Top

export function t(x: IStyleValue) {
	return {
		top: x
	};
}

// Right

export function r(x: IStyleValue) {
	return {
		right: x
	};
}

// Bottom

export function b(x: IStyleValue) {
	return {
		bottom: x
	};
}

// Left

export function l(x: IStyleValue) {
	return {
		left: x
	};
}

// Methods

export function dimensions(width : IStyleValue, height: IStyleValue, zIndex: number) {
	return {
		width: width,
		height: height,
		zIndex: zIndex
	};
}

export function tlr(t: IStyleValue, l: IStyleValue, r: IStyleValue) {
	return {
		left: l,
		right: r,
		top: t
	};
}

export function blr(b : IStyleValue, l : IStyleValue, r : IStyleValue) {
	return {
		left: l,
		right: r,
		bottom: b
	};
}
export function cursor(value: IStyleValue) {
	return {
		cursor: value
	};
}

export function pos(value: IStyleValue) {
	return {
		position: value
	};
}

export function pull(direction: IStyleValue) {
	return {
		float: direction
	};
}

export function flexDirection(direction :IStyleValue) {
	return {
		'flex-direction': direction
	};
}

export function backgroundImage(url : IStyleValue) {
	return {
		backgroundImage: `url(${url})`
	};
}

export function backgroundColor(color : IStyleValue) {
	return {
		backgroundColor: `${color}`
	};
}

export function borderRadius(rad: IStyleValue) {
	return {
		borderRadius: `${rad}`
	};
}
