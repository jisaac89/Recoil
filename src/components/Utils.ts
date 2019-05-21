import { T } from './DataSource/DataSource';

export function branchIn(value: T, key: string, step?: number): any {
  const result = key.split('.'),
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
  const queryResult: Array<Object> = [];
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

export function isType(value: any) {
  let type;

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
  let type: string = typeof value;
  if (type === 'object' && value instanceof Array) {
    type = 'array';
  }
  return type;
}

export function arraysEqual(arr1: Array<Object>, arr2: Array<Object>) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = arr1.length; i--; ) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}
