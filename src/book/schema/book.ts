/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
// export type CatDocument = HydratedDocument<Cat>;

@Schema({timestamps:true})
export class Book {
  @Prop({required:true})
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
