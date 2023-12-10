/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
// export type CatDocument = HydratedDocument<Cat>;

// export enum Category {
//     ADVENTURE = 'Adventure',
//     CALSSICS = 'Classics',
//     CRIME = 'Crime',
//     FANTASY = 'Fantasy',
// }

@Schema({timestamps:true})
export class Student {
  @Prop({required:true})
  name: string;

  @Prop({required: true})
  age: number;

  @Prop()
  breed: string;

  @Prop({type: Object})
  address: Record<string, any>;

//   @Prop()
//   category: Category;


}

export const StudentSchema = SchemaFactory.createForClass(Student);
