/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, isNotEmpty, ValidateNested } from 'class-validator';
// import { Category } from '../schemas/book.schema';
import { Type } from 'class-transformer';


class AddressDto {
    @IsNotEmpty()
    street: string;
  
    @IsNotEmpty()
    city: string;
  
    @IsNotEmpty()
    zipCode: string;
}

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @IsNotEmpty()
  @IsString()
  readonly breed: string;

  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;

  //   @IsNotEmpty()
  //   @IsNumber()
  //   readonly price: number;

  //   @IsNotEmpty()
  //   @IsEnum(Category, { message: 'Please enter correct category.' })
  //   readonly category: Category;
}
