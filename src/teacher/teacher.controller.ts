import { Controller, Get, Put,Param, ParseUUIDPipe } from '@nestjs/common';
import { GetTeacherDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService:TeacherService){

    }

    @Get()
    getTeachers():GetTeacherDto[]{
        return this.teacherService.getTeachers()
    }

    @Get('/:teacherId')
    getTeacherById(
        @Param('teacherId',new ParseUUIDPipe()) teacherId:string
    ):GetTeacherDto{
        return this.teacherService.getTeacherById(teacherId)
    }
 
}
