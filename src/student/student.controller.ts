import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './schema/student';
import { CreateStudentDto } from './dto/student.dto';

@Controller('student')
export class StudentController {
  constructor(private studentServices: StudentService) {}

  @Get('getdata')
  async findAll(): Promise<Student[]> {
    return this.studentServices.findAll();
  }

  //   @Get('data')
  //   async getData(): Promise<Cat[]> {
  //     return this.crudService.findAll();
  //   }

  @Post('/postdata')
  async postData(
    @Body(new ValidationPipe()) createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return this.studentServices.createData(createStudentDto);
  }
}
