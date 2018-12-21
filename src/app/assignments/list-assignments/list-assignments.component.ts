import { Component, OnInit } from '@angular/core';
import { AssignmentService } from 'src/service/assigment.service';
import { Assignment } from 'src/model/assignment';

@Component({
  selector: 'app-list-assignments',
  templateUrl: './list-assignments.component.html',
  styleUrls: ['./list-assignments.component.scss']
})
export class ListAssignmentsComponent implements OnInit {

  constructor(private serviceAssignment: AssignmentService) { }

  assignments:Assignment[];
  uniqueAssignments: Assignment[];

  ngOnInit() {
    this.serviceAssignment.getAssignments().then(tab => {
      this.assignments = tab;
      this.uniqueAssignments = this.assignments.filter((x, i, a) => a.indexOf(x) == i)
    });

    
  }

}
