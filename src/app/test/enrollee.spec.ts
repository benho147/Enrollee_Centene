import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolleeComponent } from '../enrollee.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { EnrolleeService } from '../enrollee.service';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { Cards } from '../components/cards/card.component';

describe('EnrolleeComponent', () => {
  let component: EnrolleeComponent;
  let fixture: ComponentFixture<EnrolleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolleeComponent,Cards ],
      providers:[EnrolleeService, MatDialog],
      imports:[MaterialModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});