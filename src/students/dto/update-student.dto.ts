import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto {
  @ApiProperty({ required: false })
  readonly firstName: string;

  @ApiProperty({ required: false })
  readonly lastName: string;

  @ApiProperty({ required: false, minimum: 0 })
  readonly age: number;

  @ApiProperty({ required: false })
  readonly grade: string;

  @ApiProperty({ required: false })
  readonly level: string;

  @ApiProperty({ required: false })
  readonly section: string;
}
