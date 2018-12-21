import { Guid } from 'guid-typescript';
export class Assignment {
    /**
     *
     */
    constructor(teachername: string, surname: string, coursename: string,photo?:string) {
        this.teachername = teachername;
        this.teachersurname = surname;
        this.coursename = coursename;
        this.id = Guid.create();
        this.photo= (photo != null) ? ('/assets/img/' + photo) : '/assets/img/no-photo.jpg'

    }
    id: Guid;
    teachername: string;
    teachersurname:string;
    coursename: string; 
    photo:string;

}