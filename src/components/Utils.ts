// simple flat search

export type ExtendedFunction0<T> = (...args: any[]) => T;
export type ExtendedFunction1<T, U> = (arg0: T) => U;
export type ExtendedFunction2<T, U, V> = (arg0: T, arg1: U) => V;
export type ExtendedFunction3<T, U, V, W> = (arg0: T, arg1: U, arg2: V) => W;
export type ExtendedFunction4<T, U, V, W, X> = (arg0: T, arg1: U, arg2: V, arg3: W) => X;

export type ExtendedPromise0<T> = () => Promise<T>;
export type ExtendedPromise1<T, U> = (arg0: T) => Promise<U>;
export type ExtendedPromise2<T, U, V> = (arg0: T, arg1: U) => Promise<V>;
export type ExtendedPromise3<T, U, V, W> = (arg0: T, arg1: U, arg2: V) => Promise<W>;
export type ExtendedPromise4<T, U, V, W, X> = (arg0: T, arg1: U, arg2: V, arg3: W) => Promise<X>;

export function debounce<T>(func: ExtendedFunction0<T>, wait: number, immediate?: boolean): () => void;
export function debounce<T, U>(func: ExtendedFunction1<T, U>, wait: number, immediate?: boolean): (arg0: T) => void;
export function debounce<T, U, V>(
	func: ExtendedFunction2<T, U, V>,
	wait: number,
	immediate?: boolean
): (arg0: T, arg1: U) => void;
export function debounce<T, U, V, W>(
	func: ExtendedFunction3<T, U, V, W>,
	wait: number,
	immediate?: boolean
): (arg0: T, arg1: U, arg2: V) => void;
export function debounce<T, U, V, W, X>(
	func: ExtendedFunction4<T, U, V, W, X>,
	wait: number,
	immediate?: boolean
): (arg0: T, arg1: U, arg2: V, arg3: W) => void;
export function debounce(func: Function, wait: number, immediate?: boolean): Function {
	var timeout: number;
	var self = {};
	return function() {
		var args = arguments;
		var later = () => {
			timeout = null;
			if (!immediate) {
				func.apply(self, args);
			}
		};
		var callNow = immediate && !timeout;
		window.clearTimeout(timeout);
		timeout = window.setTimeout(later, wait);
		if (callNow) {
			func.apply(self, args);
		}
	};
}

/**
 * 
 * @param func
 * @param wait
 * @param thisArg
 * 
 * Takes in a function (A)
 * Returns a function (B)
 * Function (B) returns a Promise
 * Subsequent calls to Function (B) return same Promise
 * Promise resolves after wait time
 * Promise executes last call to function (A)
 * After wait time, Function (B) returns a new Promise
 * 
 */
export function debouncePromise<T>(func: ExtendedFunction0<T>, wait: number, thisArg?: any): ExtendedPromise0<T>;
export function debouncePromise<T, U>(
	func: ExtendedFunction1<T, U>,
	wait: number,
	thisArg?: any
): ExtendedPromise1<T, U>;
export function debouncePromise<T, U, V>(
	func: ExtendedFunction2<T, U, V>,
	wait: number,
	thisArg?: any
): ExtendedPromise2<T, U, V>;
export function debouncePromise<T, U, V, W>(
	func: ExtendedFunction3<T, U, V, W>,
	wait: number,
	thisArg?: any
): ExtendedPromise3<T, U, V, W>;
export function debouncePromise<T, U, V, W, X>(
	func: ExtendedFunction4<T, U, V, W, X>,
	wait: number,
	thisArg?: any
): ExtendedPromise4<T, U, V, W, X>;
export function debouncePromise(
	func: (...args: any[]) => any,
	wait: number,
	thisArg?: any
): (...args: any[]) => Promise<any> {
	var self = thisArg || {};

	var args: any;
	var timeout: number;
	var promise: Promise<any>;
	var resolveExternal: any;

	return function() {
		args = arguments;

		// If there is no promise, create one
		if (!promise) {
			promise = new Promise<any>(function(resolve) {
				resolveExternal = resolve;
				timeout = window.setTimeout(function() {
					timeout = undefined;
					promise = undefined;
					resolve(func.apply(self, args));
				}, wait);
			});
		} else {
			// There is a promise, so we need to reset the timeout
			if (timeout) {
				window.clearTimeout(timeout);
				timeout = window.setTimeout(function() {
					timeout = undefined;
					promise = undefined;
					resolveExternal(func.apply(self, args));
				}, wait);
			} else {
				throw 'No Promise or Timeout for debouncePromise';
			}
		}
		return promise;
	};
}

export function branchIn(value: Array<any>, key: string, step?: number): any {
	let result = key.split('.'),
		stepLength = result.length,
		currentStep = step || 0,
		letCurrentValue = value[result[currentStep]];

	if (currentStep !== stepLength - 1) {
		return branchIn(letCurrentValue, key, currentStep + 1);
	} else {
		return letCurrentValue;
	}
}

export function search(
	dataSource: Array<any>,
	term: string,
	keys: Array<any>,
	fn?: (dataSource?: Array<any>, term?: string, keys?: Array<string>) => void
) {
	let queryResult: Array<Object> = [];
	if (term.length > 0) {
		dataSource.forEach(function(item) {
			keys.forEach((key) => {
				if (
					branchIn(item, key)
						? branchIn(item, key).toString().toLowerCase().indexOf(term.toString().toLowerCase()) != -1
						: false
				) {
					if (!queryResult.includes(item)) {
						queryResult.push(item);
					}
				}
			});
		});
	}

	if (fn) {
		return fn(dataSource, term);
	} else {
		return queryResult;
	}
}

export function isType(value: any) {
	var type;

	if (value instanceof Array) {
		type = 'array';
	} else {
		switch (typeof value) {
			case 'object':
				type = 'object';
				break;
			case 'string':
				type = 'string';
				break;
			default:
				type = 'value';
				break;
		}
	}

	return type;
}

export function getType<T>(value: Array<T>) {
	var type: string = typeof value;
	if (type === 'object' && value instanceof Array) {
		type = 'array';
	}
	return type;
}

export function arraysEqual(arr1: Array<Object>, arr2: Array<Object>) {
	if (arr1.length !== arr2.length) return false;
	for (var i = arr1.length; i--; ) {
		if (arr1[i] !== arr2[i]) return false;
	}

	return true;
}
