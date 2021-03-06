/*
 * @Author: your name
 * @Date: 2021-01-02 15:04:58
 * @LastEditTime: 2021-01-02 23:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/schema/users.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop(String)
  name: string;

  @Prop(String)
  passwd?: string;

  @Prop(String)
  create_time?: string;

  @Prop(String)
  email?: string;

  @Prop(String)
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
