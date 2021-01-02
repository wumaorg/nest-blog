/*
 * @Author: your name
 * @Date: 2021-01-02 12:52:05
 * @LastEditTime: 2021-01-02 14:09:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private ArticleModel) { }
  async findAll(params = {}) {
    const result = await this.ArticleModel.find(params).exec()
    return result
  }
}