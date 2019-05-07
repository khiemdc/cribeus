import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardSimpleComponent } from './dashboard-card-simple.component';

describe('DashboardCardSimpleComponent', () => {
  let component: DashboardCardSimpleComponent;
  let fixture: ComponentFixture<DashboardCardSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
