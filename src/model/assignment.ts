import { Guid } from 'guid-typescript';
export class Assignment {
    /**
     *
     */
    constructor(teachername: string, surname: string, coursename: string) {
        this.teachername = teachername;
        this.teachersurname = surname;
        this.coursename = coursename;
        this.id = Guid.create();
    }
    id: Guid;
    teachername: string;
    teachersurname:string;
    coursename: string; 
}