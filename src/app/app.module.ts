
//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
//Components
import { AppComponent } from './app.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { ItemStudentsComponent } from './students/item-students/item-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';
import { ListEvaluationsComponent } from './evaluations/list-evaluations/list-evaluations.component';
import { EditEvalutionComponent } from './evaluations/edit-evalution/edit-evalution.component';
import { FormsModule } from '@angular/forms';
//Services
import { StudentsService, StudentsServiceImpl } from '../service/students.service';
import { EvaluationService, EvaluationServiceImpl } from 'src/service/evaluation.service';

// PrimeNg
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/primeng';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import { EvaluationStudentComponent } from './students/evaluation-student/evaluation-student.component';

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
  ],
  providers: [
    {provide: StudentsService, useClass: StudentsServiceImpl},
    {provide: EvaluationService, useClass: EvaluationServiceImpl},
    ConfirmationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
