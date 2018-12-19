import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/service/students.service';
import { Student } from 'src/model/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Evaluation } from 'src/model/evaluation';
import { EvaluationService } from 'src/service/evaluation.service';
import { MenuItem } from 'primeng/api';
import { Assignment } from 'src/model/assignment';
import { AssignmentService } from 'src/service/assigment.service';
import { evaluations } from 'src/service/mock-data';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.scss']
})
export class EditStudentsComponent implements OnInit {

  constructor(private studentService: StudentsService, 
    private evaluationService: EvaluationService,
    private assignmentService: AssignmentService,
    private activatedRoute: ActivatedRoute, 
    private location: Location) { }

  student:Student;

  evaluations:Evaluation[];
  assingments:Assignment[];
  all:{evaluation:Evaluation, assignment:Assignment}[];


  items:MenuItem[];
  data: any;

  
  ngOnInit() {
    console.log('The component is visible');

    //Menu items


    this.activatedRoute.params.subscribe( (params) => {
      let id = params.id;
      if(id){
        this.studentService.getStudent(id).then( v => {
          this.student = v;
          this.studentService.getStudentEvaluations(id).then( evals=> {
            this.evaluations = evals;
          
            if(this.evaluations.length > 0){
              // A list of ids from evaluations
              let evalIds = this.evaluations.map(a => a.id);
              console.log("IDS : " + evalIds + " Count : " + evalIds.length);
              // Send the list of ids to service
              this.assignmentService.getAssignmentsByEvaluations(evalIds).then( asgns => {
                this.assingments = asgns;
              }); 
              this.evaluationService.getEvaluationsPerStudent(id).then( asgns => {
                this.all = asgns;
              }); 
              console.log("asng : " +  this.assingments);
            } else{
              this.assingments = undefined;
            }
          });
        });
      }  else{
        this.student = undefined;
      }
    });
    this.updateChart();
    
  }
  sendToServer(){
    this.studentService.updateStudent(this.student);
    this.location.back();
}
  updateChart(){
    let ass
    this.data  = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: 'rgba(179,181,198,0.2)',
              borderColor: 'rgba(179,181,198,1)',
              pointBackgroundColor: 'rgba(179,181,198,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(179,181,198,1)',
              data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              pointBackgroundColor: 'rgba(255,99,132,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,99,132,1)',
              data: [28, 48, 40, 19, 96, 27, 100]
          }
      ]
  };
    
  }
}
