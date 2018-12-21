import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/service/evaluation.service';

@Component({
  selector: 'app-edit-evalution',
  templateUrl: './edit-evalution.component.html',
  styleUrls: ['./edit-evalution.component.scss']
})
export class EditEvalutionComponent implements OnInit {

  constructor(private serviceEval: EvaluationService) { }

  ngOnInit() {
  }

}
