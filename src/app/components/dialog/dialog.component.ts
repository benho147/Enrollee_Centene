import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Enrollee } from 'src/app/enrollees';


@Component({
    selector: 'dialog-one',
    templateUrl: './dialog.component.html',
    // styleUrls: ['./dialog-one.component.scss']
  })
  export class DialogOne {
     public enrolleeForm: Enrollee;
      constructor(public dialogRef: MatDialogRef<DialogOne>,
          // get data from the origin for to modify or add information
           @Inject(MAT_DIALOG_DATA) public enrollee: Enrollee) {
               this.enrolleeForm = enrollee ? {...enrollee} : {name:"",active: false};
           }
      
        onNoClick(): void {
          this.dialogRef.close();
        }
  }