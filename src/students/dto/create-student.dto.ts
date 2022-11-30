import { IsNotEmpty, Min, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lastName: string;

  @ApiProperty({ minimum: 0 })
  @IsNotEmpty()
  @Min(0)
  readonly age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly grade: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly section: string;
}
