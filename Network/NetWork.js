'use strict'

import queryString from 'query-string';
import config from './../Comman/Config';
import _ from 'lodash';

let request = {

}

request.get = (url, parmas) => {
    if (parmas){
        url += '?'+ queryString.stringify(parmas)
    }
    console.log('url', url);
    return fetch(url)
                .then((response)=>response.json())
}

request.post = (url, parmas) => {
    let map = _.extend(config.map, {
        body:JSON.stringify(parmas)
    });
    return  fetch(url, map)
                .then((response)=>{response.json()})
                .then(responseJson)
}

module.exports = request