import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStudentsComponent } from './item-students.component';

describe('ItemStudentsComponent', () => {
  let component: ItemStudentsComponent;
  let fixture: ComponentFixture<ItemStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
