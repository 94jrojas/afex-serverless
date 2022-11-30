import { Min, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindStudentDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty({ minimum: 0 })
  @Min(0)
  readonly age: number;
}
