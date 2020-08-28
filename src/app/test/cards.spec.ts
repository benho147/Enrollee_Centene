import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cards } from '../components/cards/card.component';
import { MaterialModule } from '../material.module';
import { EnrolleeService } from '../enrollee.service';
import { MatDialog } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Cards', () => {
  let component: Cards;
  let fixture: ComponentFixture<Cards>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cards ],
      providers:[EnrolleeService, MatDialog],
      imports:[MaterialModule, HttpClientModule, NoopAnimationsModule],
      // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});