/*
 * @Author: wumao
 * @Date: 2021-01-02 11:43:11
 * @LastEditTime: 2021-01-17 15:48:57
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/schema/article.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Meta } from './meta.schema';

@Schema()
export class Article {
  @Prop({
    type: String,
    trim: true,
  })
  title: string;

  @Prop()
  content: string;

  // @Prop()
  // author_id: string;

  @Prop()
  desc: string;

  @Prop()
  headPic: string;

  @Prop()
  add_time: number;

  @Prop()
  views: number;

  @Prop()
  update_time: number;

  // @Prop()
  // hidden: number;

  @Prop([])
  comment: [];

  // @Prop([])
  // category_list: [];

  // @Prop([])
  // tag_list: [];

  // @Prop([
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Meta',
  //   },
  // ])
  // category_id: Meta[];

  // @Prop([])
  // categoryList: [];


  @Prop(Array)
  category_id: [string];

  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Meta',
    },
  ])
  category_list: Meta[];

  @Prop(Array)
  tag_id: [string];


  @Prop([
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Meta',
    },
  ])
  tag_list: Meta[];

  // 文章分类
  // @IsArray()
  // @ArrayNotEmpty({ message: '文章分类？' })
  // @ArrayUnique()
  // @prop({ ref: () => Category, required: true, index: true })
  // category: Ref<Category>[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
