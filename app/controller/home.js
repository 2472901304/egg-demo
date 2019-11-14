'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    let {pagenum,limit} = ctx.query;
    console.log(ctx.params)   //3. 打印
    // console.log(ctx.params)
    let startIndex = (pagenum - 1) * limit;
    let data = await this.service.home.list(startIndex,limit);
    console.log(data)
    ctx.body = data
  }
}

module.exports = HomeController;
