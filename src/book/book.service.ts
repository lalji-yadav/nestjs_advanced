import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schema/book';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  //   async createData(createCatDto: CreateCatDto): Promise<Book> {
  //     const createdCat = new this.catModel(createCatDto);
  //     return createdCat.save();
  //   }

  async createData(book: Book): Promise<Book> {
    const createdCat = new this.bookModel(book);
    return createdCat.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
