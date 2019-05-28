import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewServiceBookComponent } from './add-new-service-book.component';

describe('AddNewServiceBookComponent', () => {
  let component: AddNewServiceBookComponent;
  let fixture: ComponentFixture<AddNewServiceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewServiceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
