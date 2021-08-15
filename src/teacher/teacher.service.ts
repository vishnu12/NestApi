import { Injectable } from '@nestjs/common';
import {teachers} from '../data'
import { GetTeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {

    private teachers=teachers

    getTeachers():GetTeacherDto[]{
       return this.teachers
    }

    getTeacherById(teacherId:string):GetTeacherDto{
       return this.teachers.find(teacher=>teacher.id===teacherId)
    }
}
