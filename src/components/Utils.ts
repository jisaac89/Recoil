// simple flat search
export function search(dataSource, term, keys) {

    let queryResult = [];

    if (term.length > 0) {
        dataSource.forEach(function (item) {
            keys.forEach((key, index) => {
                if (item[key].toString().toLowerCase().indexOf(term.toString().toLowerCase()) != -1) {
                    if (queryResult[index] !== item) {
                        queryResult.push(item);
                    }
                }
            });
        });
    }

    return queryResult;
}

export function isType(value) {
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

export function getType(value) {
    var type = typeof value;
    if (type === 'object' && value instanceof Array) {
        type = 'array';
    }
    return type;
}

export function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}