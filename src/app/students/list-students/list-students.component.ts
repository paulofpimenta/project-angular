import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/service/students.service';
import { Student } from 'src/model/student';

import {ConfirmationService, Message } from 'primeng/primeng';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],

})
export class ListStudentsComponent implements OnInit {

  constructor(private service: StudentsService,
    private confirmationService: ConfirmationService) { }

  msgs: Message[] = [];
  students: Student[];

  ngOnInit() {
    console.log('The component is visible');
    this.service.getStudents().then(tab => {
      this.students = tab;
    });
  }
  
  confirm(student) {
    //let s = this.service.getStudent(id);
    this.confirmationService.confirm({
        message: 'The student ' + '<b>' + student.name + ' ' + student.surname + '</b> will be deleted. <br> Are you sure ?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
            this.service.deleteStudent(student.id);
            window.scrollTo(0, 0);
            this.msgs = [{severity:'success', summary:'Success : ', detail:'The student '+ '<b>' + student.name + ' ' + student.surname + '</b>' + ' was deleted'}];
        },
        reject: () => {
            this.msgs = [{severity:'warn', summary:'Canceled : ', detail:'Operation canceled'}];
            window.scrollTo(0, 0);
        }
    });
}


}
