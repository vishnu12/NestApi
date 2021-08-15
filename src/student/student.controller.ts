import {Controller,Get, Post, Put,Param,Body, ParseUUIDPipe} from '@nestjs/common'
import { CreateStudentDto, GetStudentDto, UpdatedStudentDto, UpdateStudentDto } from './dto/student.dto'
import { StudentService } from './student.service'

@Controller('students')
export class StudentController{

    constructor(private readonly studentService:StudentService){

    }

  @Get()
  getStudents():GetStudentDto[]{
      return this.studentService.getStudents()
  }

  @Get('/:studentId')
  getStudentsById(
      //@Param param:{studentId:string}
      @Param('studentId',new ParseUUIDPipe()) studentId:string
  ):GetStudentDto{
      return this.studentService.getStudentsById(studentId)
  }

  @Post()
  createStudent(
      @Body() body:CreateStudentDto

  ):GetStudentDto{  
     return this.studentService.createStudent(body)
  }

  @Put('/:studentId')
  updateStudent(
      @Param('studentId',new ParseUUIDPipe()) studentId:string,
      @Body() body:UpdateStudentDto
  ):UpdatedStudentDto{
     return this.studentService.updateStudent(body,studentId)
  }
}