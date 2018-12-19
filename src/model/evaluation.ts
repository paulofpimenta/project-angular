import { Guid } from 'guid-typescript';
import { Student } from './student';
export class Evaluation {
    /**
     *
     */
    constructor(grade: number, coef: number, date: Date, notes:string, studentId: Guid,assignmentId: Guid) {
        this.grade = grade;
        this.coef = coef;
        this.date = date;
        this.notes = notes;
        this.studentId = studentId;
        this.assignmentId = assignmentId;
        this.id = Guid.create();
    }
    id: Guid;
    grade: number;
    coef: number; 
    date: Date; 
    notes: String;
    studentId:Guid;
    assignmentId:Guid;
}
