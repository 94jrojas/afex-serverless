import { Min, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto {
  @ApiProperty()
  @IsString()
  readonly firstName: string;

  @ApiProperty()
  @IsString()
  readonly lastName: string;

  @ApiProperty({ minimum: 0 })
  @Min(0)
  readonly age: number;

  @ApiProperty()
  @IsString()
  readonly grade: string;

  @ApiProperty()
  @IsString()
  readonly section: string;
}
