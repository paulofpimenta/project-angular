import { Injectable } from '@angular/core';
import { Student } from 'src/model/student';
import * as mockData   from './mock-data';
import { Evaluation } from 'src/model/evaluation';
import { Guid } from 'guid-typescript';
import { Assignment } from 'src/model/assignment';

@Injectable({
  providedIn: 'root'
})
export abstract class EvaluationService {

    abstract getEvaluation(id: any): Promise<Evaluation> ;
    abstract getEvaluations(): Promise<Evaluation[]>;
    abstract deleteEvaluation(id: any): Promise<void>;
    abstract insertEvaluation(e: Evaluation): Promise<Evaluation>;
    abstract updateEvaluation(e: Evaluation): Promise<Evaluation>;
    abstract getEvaluationsPerStudent(studentId: Guid): Promise<{evaluation:Evaluation, assignment:Assignment}[]>;
}

export class EvaluationServiceImpl implements EvaluationService {

getEvaluations(): Promise<Evaluation[]> {
  return Promise.resolve(mockData.evaluations);
}
getEvaluationsPerStudent(studentId: Guid): Promise<{evaluation:Evaluation, assignment:Assignment}[]> {
  return Promise.resolve(mockData.evaluations.filter(e => e.studentId == studentId)
    .map(e=>{ return {
      evaluation:e,
      assignment:mockData.assignments.find(c=>c.id==e.assignmentId)
    }})
    
  );
}
getEvaluation(id: any): Promise<Evaluation> {
  return Promise.resolve(mockData.evaluations.find( e => e.id == id));
}
deleteEvaluation(id: any): Promise<void> {
  let studentToBeDeleted = mockData.students.find(s => s.id == id);
  if (studentToBeDeleted) {
      // splice (4,2) => delete 2 elements from the 5th element in the list
      mockData.students.splice(mockData.students.indexOf(studentToBeDeleted), 1);
  } else {
      return Promise.reject(new Error('The evaluation was not found'));
  }
  return Promise.resolve();
}
insertEvaluation(e: Evaluation): Promise<Evaluation> {
  let existingEvaluation = mockData.evaluations.find( vec => vec.id == e.id);
  if (existingEvaluation) {
      return Promise.reject(new Error('The evaluation already exists'));

  }
  mockData.evaluations.push(e);
  return Promise.resolve(e);
}
updateEvaluation(e: Evaluation): Promise<Evaluation> {
  let evaluationToBeUpdated = mockData.evaluations.find ( vec => vec.id == e.id);
  if (evaluationToBeUpdated) {
      Object.assign(evaluationToBeUpdated, e);
      return Promise.resolve(evaluationToBeUpdated);
  } else {
      return Promise.reject(new Error('The evaluation does not exists'));
  }
}


}
