'use strict'

const config = {
    duanziApi:{
        baseApi:'http://joke.luckyamy.com/api/',
        list:''
    },
    wallApi:{
        baseApi:'http://train.76ab.com/Test/wallPaper',
    },
    map:{
        method:'POST',
        head:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        timeout:8000,
    }
}

module.exports = config;