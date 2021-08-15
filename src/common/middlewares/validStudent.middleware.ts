
import {Injectable,NestMiddleware,HttpException} from '@nestjs/common'
import {Request,Response,NextFunction} from 'express'
import {students} from '../../data'

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware{
  
    use(req:Request,res:Response,next:NextFunction){
          console.log("middleware called");
          const {studentId}=req.params
          const studentExists=students.some(student=>student.id===studentId)
          if(studentExists) return next()
          throw new HttpException("Student not found",400)
    }
}