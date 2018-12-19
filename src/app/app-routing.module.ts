import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ListStudentsComponent } from './students/list-students/list-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';
import { ListEvaluationsComponent } from './evaluations/list-evaluations/list-evaluations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'students', component:ListStudentsComponent},
  {path: 'student/edit/:id', component: EditStudentsComponent},
  {path: 'evaluations', component: ListEvaluationsComponent},
  
  //{path: 'student/:id', component: VoitureItemComponent}, // /voiture/56AB4-ABC453434-34DEC-32DEF
  //{path: 'student/:id/edit', component: EditVoitureComponent} // /voiture/56AB4-ABC453434-34DEC-32DEF
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
