import { Injectable } from '@angular/core';
import {Student} from '../model/student';
import {STUDENTS} from './mock-data/mock-students';
import { Assignment } from 'src/model/assignment';
import * as mockData   from './mock-data';
import { Guid } from 'guid-typescript';
import { Evaluation } from 'src/model/evaluation';

@Injectable({
  providedIn: 'root'
})

export abstract class AssignmentService {
  abstract getAssignment(id: any): Promise<Assignment>;
  abstract getAssignments(): Promise<Assignment[]>;
  abstract deleteAssignment(id: any): Promise<void>;
  abstract insertAssignment(s: Assignment): Promise<Assignment>;
  abstract updateAssignment(s: Assignment): Promise<Assignment>;
  abstract getAssignmentsByEvaluations(ids: Guid[]):Promise<Assignment[]>;
}

export class AssignmentServiceImpl implements AssignmentService {
  
  getAssignmentsByEvaluations(ids: Guid[]): Promise<Assignment[]> {
    //let all = mockData.assignments;
    //all.forEach(a=> ids.includes(a.id));

    let listeEvals=ids.map(id=>mockData.evaluations.find(e=>e.id==id)).map(o=>o.assignmentId.toString());
    listeEvals = Array.from(new Set(listeEvals));
    let listeAssignments=listeEvals.map(o=>mockData.assignments.find(a=>a.id.toString()==o));
  
    return Promise.resolve(listeAssignments);
  }

  getAssignments(): Promise<Assignment[]> {
    return Promise.resolve(mockData.assignments);
  }

  getAssignment(id: any): Promise<Assignment> {
    return Promise.resolve(mockData.assignments.find( vec => vec.id == id));
  }
  deleteAssignment(id: any): Promise<void> {
    let AssignmentToBeDeleted = mockData.assignments.find(a => a.id == id);
    if (AssignmentToBeDeleted) {
        // splice (4,2) => delete 2 elements from the 5th element in the list
        mockData.assignments.splice(mockData.assignments.indexOf(AssignmentToBeDeleted), 1);
    } else {
        return Promise.reject(new Error('The Assignment was not found'));
    }
    return Promise.resolve();
}
insertAssignment(a: Assignment): Promise<Assignment> {
    let existingAssignment = mockData.assignments.find( vec => vec.id == a.id);
    if (existingAssignment) {
        return Promise.reject(new Error('The Assignment already exists'));

    }
    mockData.assignments.push(a);
    return Promise.resolve(a);
}
updateAssignment(a: Assignment): Promise<Assignment> {
    let AssignmentToBeUpdated = mockData.assignments.find ( vec => vec.id == a.id);
    if (AssignmentToBeUpdated) {
        Object.assign(AssignmentToBeUpdated, a);
        return Promise.resolve(AssignmentToBeUpdated);
    } else {
        return Promise.reject(new Error('The Assignment does not exists'));
    }
}

}
