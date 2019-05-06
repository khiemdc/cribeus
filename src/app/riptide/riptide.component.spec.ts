/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RiptideComponent } from './riptide.component';

describe('RiptideComponent', () => {
  let component: RiptideComponent;
  let fixture: ComponentFixture<RiptideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiptideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiptideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
