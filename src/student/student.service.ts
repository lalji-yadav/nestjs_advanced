import { Injectable } from '@nestjs/common';
import { Student } from './schema/student';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// import { CreateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async createData(student: Student): Promise<Student> {
    console.log('body data', student);
    const createdStudent = new this.studentModel(student);
    console.log('acaa', createdStudent);
    return createdStudent.save();
  }

  //   async createData(student: Student): Promise<Student> {
  //     const createdCat = new this.studentModel(student);
  //     return createdCat.save();
  //   }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }
}
