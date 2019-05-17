/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DooberComponent } from './doober.component';

describe('DooberComponent', () => {
  let component: DooberComponent;
  let fixture: ComponentFixture<DooberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DooberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DooberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
