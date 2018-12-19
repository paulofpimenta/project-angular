import { Guid } from 'guid-typescript';
export class Student {
    /**
     *
     */

    constructor(name: string, surname: string, classname: string, photo?:string) {
        this.name = name;
        this.surname = surname;
        this.classname = classname;
        this.id = Guid.create();
        this.photo= (photo != null) ? ('/assets/img/' + photo) : '/assets/img/no-photo.jpg'
    }

    id: Guid;
    name: string;
    surname: string;
    classname: string;
    photo:string;


}
