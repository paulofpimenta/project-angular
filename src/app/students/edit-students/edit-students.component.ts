import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/service/students.service';
import { Student } from 'src/model/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Evaluation } from 'src/model/evaluation';
import { EvaluationService } from 'src/service/evaluation.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit {

  constructor(private studentService: StudentsService, 
    private evaluationService: EvaluationService,
    private activatedRoute: ActivatedRoute, 
    private location: Location) { }

  student:Student;
  evaluations:Evaluation[];
  items:MenuItem[];

  
  ngOnInit() {
    console.log('The component is visible');

    //Menu items
    this.items = [
      {label: 'Student Info', icon: 'fa fa-fw fas fa-info',routerLink: ['/student/edit/:id']},
      {label: 'Courses', icon: 'fa fa-fw fa-graduation-cap'},
    ];

    this.activatedRoute.params.subscribe( (params) => {
      let id = params.id;
      if(id){
        this.studentService.getStudent(id).then( v => {
          this.student = v;
          this.studentService.getStudentEvaluations(id).then( evals=> {
            this.evaluations = evals;
          });
        });
      }  else{
        this.student = undefined;
      }
    });
    
  }
  sendToServer(){
    this.studentService.updateStudent(this.student);
    this.location.back();
}
}
