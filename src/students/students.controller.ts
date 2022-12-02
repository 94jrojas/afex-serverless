import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {
  ApiBearerAuth,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/guards/apikey.guard';

@ApiBearerAuth()
@ApiTags('students')
@UseGuards(ApiKeyGuard)
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The student has been successfully created.',
  })
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The students have been successfully retrieved.',
  })
  @ApiQuery({
    name: 'section',
    required: false,
    type: String,
    description: 'The section of the student.',
  })
  @ApiQuery({
    name: 'level',
    required: false,
    type: String,
    description: 'The level of the student.',
  })
  @ApiQuery({
    name: 'grade',
    required: false,
    type: String,
    description: 'The grade of the student.',
  })
  @ApiQuery({
    name: 'age',
    required: false,
    type: Number,
    description: 'The age of the student.',
  })
  @ApiQuery({
    name: 'lastName',
    required: false,
    type: String,
    description: 'The last name of the student.',
  })
  @ApiQuery({
    name: 'firstName',
    required: false,
    type: String,
    description: 'The first name of the student.',
  })
  findAll(@Query() updateStudentDto: UpdateStudentDto) {
    console.log('query', updateStudentDto);
    return this.studentsService.findAll(updateStudentDto);
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'string',
    description: 'The student id',
  })
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully retrieved.',
  })
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully updated.',
  })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully deleted.',
  })
  remove(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
