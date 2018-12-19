import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/model/student';

@Component({
  selector: 'app-item-students',
  templateUrl: './item-students.component.html',
  styleUrls: ['./item-students.component.scss']
})
export class ItemStudentsComponent implements OnInit {

  constructor() { }

  @Input()
  student: Student;

  ngOnInit() {
  }

}
