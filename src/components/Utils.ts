// simple flat search

interface ObjectCtor extends ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}
declare var Object: ObjectCtor;
export let assign = Object.assign ? Object.assign : function(target: any, ...sources: any[]): any {
        return;
};

export function search (dataSource,term, keys) {

  let queryResult = [];
  
  if (term.length > 0) {
      dataSource.forEach(function(item){
        keys.forEach((key, index) => {
            if(item[key].toLowerCase().indexOf(term.toLowerCase())!=-1){
                if (queryResult[index] !== item) {
                    queryResult.push(item);    
                }
            }
        });
    });
  }

  return queryResult;
}

export function ObjectAssignPolyfill () {

    if (typeof Object.assign != 'function') {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
                }
            }
            }
            return target;
        };
    }

}

export function isType (value) {

    let type;

    if (Array.isArray(value)) {
        type = 'array';
    } else if (typeof value === 'object') {
        type = 'object'
    } else if (typeof value === 'string') {
        type = 'string'
    } else {
        type = 'value'
    }

    return type;
}