import { Injectable } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import {students} from '../data'
import { CreateStudentDto, GetStudentDto, UpdatedStudentDto, UpdateStudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
    private students=students
    getStudents():GetStudentDto[]{
      return this.students
    }

    getStudentsById(id:string):GetStudentDto{
      return this.students.find(student=>student.id===id)
    }

    createStudent(body:CreateStudentDto):GetStudentDto{
      let newStudent={
          id:uuid(),
          ...body
      }
      this.students.push(newStudent)
      return newStudent
    }

    updateStudent(data:UpdateStudentDto,id:string):UpdatedStudentDto{
      let updatedStudent:UpdatedStudentDto
      const updatedList=this.students.map(student=>{
          if(student.id===id){
              updatedStudent={
                  id,
                  ...data
              } 
              return updatedStudent
          }else{
              return student
          }
      })

      this.students=updatedList
      return updatedStudent
    }

    getStudentsByTeacherId(teacherId:string):GetStudentDto[]{
        return this.students.filter(student=>student.teacher===teacherId)
    }

    updateStudentTeacher(teacherId:string,studentId:string):UpdatedStudentDto{
        let updatedStudent:UpdatedStudentDto
        const updatedList=this.students.map(student=>{
            if(student.id===studentId){
                updatedStudent={
                    ...student,
                    teacher:teacherId
                } 
                return updatedStudent
            }else{
                return student
            }
        })
  
        this.students=updatedList
        return updatedStudent
    }
}
