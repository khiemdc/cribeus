/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IdeeaPortalComponent } from './ideea-portal.component';

describe('IdeeaPortalComponent', () => {
  let component: IdeeaPortalComponent;
  let fixture: ComponentFixture<IdeeaPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeeaPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeeaPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
