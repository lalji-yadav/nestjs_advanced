import { Controller, Get, Post, Body } from '@nestjs/common';
// import { InjectConnection } from '@nestjs/mongoose';
// import { Connection } from 'mongoose';
import { BookService } from './book.service';
import { Book } from './schema/book';

@Controller()
export class BookController {
  constructor(private bookServices: BookService) {}

  @Get('getdata')
  async findAll(): Promise<Book[]> {
    return this.bookServices.findAll();
  }

  //   @Get('data')
  //   async getData(): Promise<Cat[]> {
  //     return this.crudService.findAll();
  //   }

  @Post('/postdata')
  async postData(@Body() book: Book): Promise<Book> {
    return this.bookServices.createData(book);
  }
}
