export const fill = {
	height: '100%',
	width: '100%'
};

export const flex = {
	flex: '1'
};

export const flexCenter = {
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center'
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
	overflowX: 'auto'
};

export const scrollY = {
	overflowY: 'auto'
};

export const overflow = {
	overflow: 'visible'
};

// Padding

export function p(x) {
	return {
		padding: x
	};
}

export function ps(x) {
	return {
		paddingLeft: x,
		paddingRight: x
	};
}

export function ptb(x) {
	return {
		paddingTop: x,
		paddingBottom: x
	};
}

// Margin

export function m(x) {
	return {
		margin: x
	};
}

export function ms(x) {
	return {
		marginLeft: x,
		marginRight: x
	};
}

export function mtb(x) {
	return {
		marginTop: x,
		marginBottom: x
	};
}

// Width

export function w(x) {
	return {
		width: x
	};
}

export function mw(x) {
	return {
		maxWidth: x
	};
}

// Height

export function h(x) {
	return {
		height: x
	};
}

export function mh(x) {
	return {
		maxHeight: x
	};
}

// Top

export function t(x) {
	return {
		top: x
	};
}

// Right

export function r(x) {
	return {
		right: x
	};
}

// Bottom

export function b(x) {
	return {
		bottom: x
	};
}

// Left

export function l(x) {
	return {
		left: x
	};
}

// Methods

export function dimensions(width, height, zIndex) {
	return {
		width: width,
		height: height,
		zIndex: zIndex
	};
}

export function tlr(t, l, r) {
	return {
		left: l,
		right: r,
		top: t
	};
}

export function blr(b, l, r) {
	return {
		left: l,
		right: r,
		bottom: b
	};
}
export function cursor(value) {
	return {
		cursor: value
	};
}

export function pos(value) {
	return {
		position: value
	};
}

export function pull(direction) {
	return {
		float: direction
	};
}

export function flexDirection(direction) {
	return {
		flexDirection: direction
	};
}

export function backgroundImage(url) {
	return {
		backgroundImage: `url(${url})`
	};
}

export function backgroundColor(color) {
	return {
		backgroundColor: `${color}`
	};
}

export function borderRadius(rad) {
	return {
		borderRadius: `${rad}`
	};
}
