import { TDataSource } from './DataSource/DataSource';

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

export function branchIn(value: object, key: string, step?: number): string | number | [] | object {
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
  dataSource: TDataSource,
  term: string,
  keys: Array<any>,
  fn?: (dataSource?: Array<any>, term?: string, keys?: Array<string>) => Array<Object>
): Array<Object> {
  let queryResult: Array<Object> = [];
  if (term.length > 0) {
    dataSource.forEach(function(item) {
      keys.forEach(key => {
        if (
          branchIn(item, key)
            ? branchIn(item, key)
                .toString()
                .toLowerCase()
                .indexOf(term.toString().toLowerCase()) != -1
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

export function isType(value: string | object | [] | boolean) {
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
