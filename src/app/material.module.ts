import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card';

// import { FormsModule } from '@angular/forms';
// import {  DialogOne } from './components/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material'
import {MatDialogModule} from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

import {MatCheckboxModule} from '@angular/material/checkbox'; 
// import { FormControl, FormGroup } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';


@NgModule({
   
    imports: [
      ScrollingModule,
      MatDialogModule,
      MatCardModule,
      MatIconModule,
      
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonModule
    ],
    exports: [ScrollingModule,
      MatDialogModule,
      MatCardModule,
      MatIconModule,
      
      MatFormFieldModule,
      MatInputModule,
      MatCheckboxModule,
      MatButtonModule]
  })
  
  // Change to enrollee.
  export class MaterialModule { }