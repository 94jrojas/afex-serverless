import { IsNotEmpty, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty({ minimum: 0 })
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly grade: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly level: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly section: string;
}
