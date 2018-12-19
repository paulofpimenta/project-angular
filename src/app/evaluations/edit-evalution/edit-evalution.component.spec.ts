import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvalutionComponent } from './edit-evalution.component';

describe('EditEvalutionComponent', () => {
  let component: EditEvalutionComponent;
  let fixture: ComponentFixture<EditEvalutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEvalutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEvalutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
