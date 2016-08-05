// simple flat search

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