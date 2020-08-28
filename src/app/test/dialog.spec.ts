import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOne } from '../components/dialog/dialog.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogOne', () => {
  let component: DialogOne;
  let fixture: ComponentFixture<DialogOne>;

  beforeEach(async(() => {
    const mockDialogRef = {
      close: jasmine.createSpy('close')
    };
    TestBed.configureTestingModule({
      declarations: [ DialogOne ],
      providers: [
        {
        provide: MatDialogRef,
        useValue: mockDialogRef
      },
      { provide: MAT_DIALOG_DATA, useValue: {} },
    ],
      imports:[NoopAnimationsModule, MaterialModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});