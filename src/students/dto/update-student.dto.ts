import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto {
  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty({ minimum: 0 })
  readonly age: number;

  @ApiProperty()
  readonly grade: string;

  @ApiProperty()
  readonly level: string;

  @ApiProperty()
  readonly section: string;
}
