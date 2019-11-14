'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller , middleware} = app;  //1. 要结构middleware
  router.get('/', controller.home.index);
  router.get('/api/list',middleware.params(), controller.home.list);  //2. 插入 middleware.params()
};
