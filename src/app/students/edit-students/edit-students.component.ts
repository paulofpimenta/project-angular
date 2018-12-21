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
  assignments:Assignment[];
  all:{evaluation:Evaluation, assignment:Assignment}[];
  
  //dialog display
  display:boolean = false;  

  items:MenuItem[];
  data: any;
  options: any;
  
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
            if(this.evaluations.length > 0) {
              // A list of ids from evaluations
              let evalIds = this.evaluations.map(a => a.id);
              console.log("IDS : " + evalIds + " Count : " + evalIds.length);
              // Send the list of ids to service
              this.assignmentService.getAssignmentsByEvaluations(evalIds).then( asgns => {
                this.assignments = asgns;
              }); 
              this.evaluationService.getEvaluationsPerStudent(id).then( asgns => {
                this.all = asgns;
                this.radarChart();
              }); 
              console.log("assingments : " +  this.assignments);
            } else {
                this.assignments = undefined;
            }
          });
        });
      }  else {
            this.student = undefined;
      }
    });
  }
  showDialog() {
    this.display = true;
  } 
  sendToServer(){
    this.studentService.updateStudent(this.student);
    this.location.back();
  }
  radarChart(){
      const labelsChart = this.assignments.map(l=>l.coursename);
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      const coursenames = this.assignments.map(c=> c.coursename);
      const labelsMonth = this.evaluations.map(m => monthNames[m.date.getMonth()]+'/'+m.date.getFullYear())
      const gradesChart = this.evaluations.map(l=>l.grade);
      console.log("grades" + gradesChart);
      const mydataset = [];
      //this.all.forEach( (a,i)=> {
                    mydataset.push ({
                        //label: this.all.map(a => a.evaluation.date.getFullYear()),
                        label:coursenames[0],
                        //label: "Disciplines",
                        backgroundColor: ['rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(150, 206, 78, 0.2)',
                                            'rgba(12, 105, 86, 0.2)'],
                        borderColor: ['rgba(255,99,132,1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(150, 206, 78, 0.2)',
                                        'rgba(12, 105, 86, 0.2)'],
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#ffff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: this.all.map(a => a.evaluation.grade),
                      })
      //});
      //console.log("mydataset: " +  mydataset['data']);

      this.data  = {
        labels: labelsMonth,
        datasets: mydataset
      };
      this.options={
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
              ticks: {
                beginAtZero:true
              }
          }]
        },
        title: {
          display: true,
          text: 'Disciplines',
          fontSize: 16,
          type: 'horizontalBar',
        }
      };   
  }
}
