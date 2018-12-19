import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {STUDENTS} from './mock-data/mock-students';

@Injectable({
  providedIn: 'root'
})
export class AssigmentService {

  constructor() { }
  
  getStudents(): Student[]{
    return STUDENTS;
  }
}
