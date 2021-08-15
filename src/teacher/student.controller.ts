import { Body, Controller, Get, Param, ParseUUIDPipe, Put } from '@nestjs/common';
import { GetStudentDto, UpdatedStudentDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService:StudentService){}

    @Get()
        getStudents(
            @Param('teacherId',new ParseUUIDPipe()) teacherId:string
        ):GetStudentDto[]{
            return this.studentService.getStudentsByTeacherId(teacherId)
    }

    @Put('/:studentId')
    updateStudents(
        @Param('teacherId',new ParseUUIDPipe()) teacherId:string,
        @Param('studentId',new ParseUUIDPipe()) studentId:string,
        @Body() body
    ):UpdatedStudentDto{
        return this.studentService.updateStudentTeacher(teacherId,studentId)
 
}
}