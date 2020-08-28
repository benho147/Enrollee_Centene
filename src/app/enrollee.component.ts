import { Component, OnInit } from '@angular/core';
import { EnrolleeService } from './enrollee.service';
import { Enrollee } from './enrollees';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogOne } from './components/dialog/dialog.component';
// import { Dialog } from './components/dialog/dialog.component';
// import { DialogOne } from './components/cards/card.component';

@Component({
  selector: 'enrollee',
  templateUrl: './enrollee.component.html',
  styleUrls: ['./enrollee.component.scss']
})
export class EnrolleeComponent implements OnInit{
    public enrollees$: Observable<Enrollee []>;
    constructor( private enrolleeService:EnrolleeService, private dialog:MatDialog){}
    
    ngOnInit(){
      this.enrolleeService.getAllEnrolls();
      this.enrollees$ = this.enrolleeService.database$;
      // this.enrolleeService.database$.subscribe(res=>{console.log(res)});
    }

}


