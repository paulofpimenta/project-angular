import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Evaluation } from 'src/model/evaluation';
import * as mockData   from './mock-data';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root'
})

export abstract class StudentsService {
  abstract getStudent(id: any): Promise<Student> ;
  abstract getStudents(): Promise<Student[]>;
  abstract deleteStudent(id: any): Promise<void>;
  abstract insertStudent(s: Student): Promise<Student>;
  abstract updateStudent(s: Student): Promise<Student>;
  abstract getStudentEvaluations(id:any): Promise<Evaluation[]>;
}

export class StudentsServiceImpl implements StudentsService {

  getStudents(): Promise<Student[]> {
    return Promise.resolve(mockData.students);
  }

  getStudent(id: any): Promise<Student> {
    return Promise.resolve(mockData.students.find( s => s.id == id));
  }
  deleteStudent(id: any): Promise<void> {
    let studentToBeDeleted = mockData.students.find(s => s.id == id);
    if (studentToBeDeleted) {
        // splice (4,2) => delete 2 elements from the 5th element in the list
        mockData.students.splice(mockData.students.indexOf(studentToBeDeleted), 1);
    } else {
        return Promise.reject(new Error('The student was not found'));
    }
    return Promise.resolve();
}
insertStudent(s: Student): Promise<Student> {
    let existingStudent = mockData.students.find( vec => vec.id == s.id);
    if (existingStudent) {
        return Promise.reject(new Error('The Student already exists'));

    }
    mockData.students.push(s);
    return Promise.resolve(s);
}
updateStudent(s: Student): Promise<Student> {
    let studentToBeUpdated = mockData.students.find ( vec => vec.id == s.id);
    if (studentToBeUpdated) {
        Object.assign(studentToBeUpdated, s);
        return Promise.resolve(studentToBeUpdated);
    } else {
        return Promise.reject(new Error('The student does not exists'));
    }
}

getStudentEvaluations(id:Guid): Promise<Evaluation[]> {
    return Promise.resolve(mockData.evaluations.filter(e => e.studentId == id));
  }

}
