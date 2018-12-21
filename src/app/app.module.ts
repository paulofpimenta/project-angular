
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { ItemStudentsComponent } from './students/item-students/item-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';
import { ListEvaluationsComponent } from './evaluations/list-evaluations/list-evaluations.component';
import { EditEvalutionComponent } from './evaluations/edit-evalution/edit-evalution.component';
import { EvaluationStudentComponent } from './students/evaluation-student/evaluation-student.component';
import { FormsModule } from '@angular/forms';

//Services
import { StudentsService, StudentsServiceImpl } from '../service/students.service';
import { EvaluationService, EvaluationServiceImpl } from 'src/service/evaluation.service';
import { AssignmentServiceImpl, AssignmentService } from 'src/service/assigment.service';


// PrimeNg
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ChartModule} from 'primeng/chart';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DialogModule} from 'primeng/dialog';


//D3
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { ListAssignmentsComponent } from './assignments/list-assignments/list-assignments.component';



@NgModule({
  declarations: [
    AppComponent,
    ListEvaluationsComponent,
    AssignmentsComponent,
    HomeComponent,
    ListStudentsComponent,
    ItemStudentsComponent,
    EditStudentsComponent,
    ListEvaluationsComponent,
    EditEvalutionComponent,
    EvaluationStudentComponent,
    DoughnutChartComponent, 
    PieChartComponent, 
    BarChartComponent, ListAssignmentsComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    AppRoutingModule,
    ButtonModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    FormsModule,
    ToastModule,
    TabMenuModule,
    MenuModule,
    TabViewModule,
    ChartModule,
    DialogModule

  ],
  providers: [
    {provide: StudentsService, useClass: StudentsServiceImpl},
    {provide: EvaluationService, useClass: EvaluationServiceImpl},
    {provide: AssignmentService, useClass: AssignmentServiceImpl},

    ConfirmationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
