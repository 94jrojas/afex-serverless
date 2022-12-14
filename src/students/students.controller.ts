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
import { ApiKeyGuard } from '../auth/guards/apikey.guard';

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
  async create(@Body() createStudentDto: CreateStudentDto): Promise<any> {
    return await this.studentsService.create(createStudentDto);
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
  async findAll(
    @Query() updateStudentDto: UpdateStudentDto = null,
  ): Promise<any> {
    return await this.studentsService.findAll(updateStudentDto);
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
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.studentsService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully updated.',
  })
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<any> {
    return await this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The student has been successfully deleted.',
  })
  async remove(@Param('id') id: string): Promise<any> {
    return await this.studentsService.remove(id);
  }
}
