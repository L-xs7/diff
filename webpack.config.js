const path = require('path');

module.exports = {
    entry:"./src/js/index.js",
    mode:"development",
    devServer:{
        port:8090,
        static:{
            directory: "./public",
        }
    }
};