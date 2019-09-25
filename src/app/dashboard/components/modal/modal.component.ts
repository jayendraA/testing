import { Component, OnInit, Inject,Input   } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../DialogData';
import { MustMatch } from '../../../auth/directive/must-match.validator' ;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  

  users_obj : any={};
  registerForm: FormGroup;
  Is_submitted=false;
  
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    
    ) {
      
      this.users_obj=this.data['user_record'];
       }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        website: ['', [Validators.required]],
    });
}
get ValidateFields() { return this.registerForm.controls; }

 onSubmit() {
        this.Is_submitted = true;
  // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.onNoClick();
    }

}
