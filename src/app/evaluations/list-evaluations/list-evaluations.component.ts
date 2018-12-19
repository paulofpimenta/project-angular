import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/service/evaluation.service';
import { Evaluation } from 'src/model/evaluation';

@Component({
  selector: 'app-list-evaluations',
  templateUrl: './list-evaluations.component.html',
  styleUrls: ['./list-evaluations.component.scss']
})
export class ListEvaluationsComponent implements OnInit {

  constructor(private evaluationService: EvaluationService ) { }
  evaluations: Evaluation[];

  ngOnInit() {
    console.log('The component is visible');
    this.evaluationService.getEvaluations().then(tab => {
      this.evaluations = tab;
    });
  }

}
