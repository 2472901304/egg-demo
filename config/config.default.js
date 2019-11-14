/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573731088010_3301';

  // add your middleware config here
  config.middleware = [];  // config.middleware = ['params']  这是一种使用中间件的方法  所有请求都可以使用

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql:{
      client:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'root',
        database:'koalist'
      },
      app:true,
      agent:false
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
