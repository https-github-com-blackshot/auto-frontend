import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookComponent } from './service-book.component';

describe('ServiceBookComponent', () => {
  let component: ServiceBookComponent;
  let fixture: ComponentFixture<ServiceBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
