export const fill = {
	height: '100%',
	width: '100%',
	flex: '1 1 auto',
	display: 'flex'
};

export const flex = {
	flex: '1 1 auto',
	display: 'flex'
};

export const flexCenter = {
	justifyContent: 'center',
	flexDirection: 'column',
	alignItems: 'center'
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

// Width

export function w(x) {
	return {
		margin: x
	};
}

// Height

export function h(x) {
	return {
		margin: x
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

export function dimensions(width, height, zIndex) {
	return {
		width: width,
		height: height,
		zIndex: zIndex
	};
}
export function cursor(value) {
	return {
		cursor: value
	};
}

export function flexDirection(value) {
	return {
		flexDirection: value
	};
}
