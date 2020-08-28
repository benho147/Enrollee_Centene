import {Component, Input, Inject} from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { Enrollee } from 'src/app/enrollees';
import { DialogOne } from '../dialog/dialog.component';
import { EnrolleeService } from 'src/app/enrollee.service';
// import { Dialog } from '../dialog/dialog.component';

@Component({
    selector: "cards",
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class Cards {
    @Input()
    public enrollee: Enrollee={active: false, name:""};

    constructor(public dialog: MatDialog, private enrolleeService :EnrolleeService) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOne, {
            height: '35vh',
            width: '40vw',
            data: this.enrollee});
        dialogRef.afterClosed().subscribe(result => {
            // if()
            // update the backend 
            if(result !== undefined && (result.name !== this.enrollee.name || result.active !== this.enrollee.active)){
                this.enrolleeService.updateEnroll(result.id, result);
            }
          });
    }

}

