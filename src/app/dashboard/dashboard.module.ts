import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardService} from './service/dashboard.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';
import { MaterialModule } from  '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { DataService } from "./service/data.service";
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [DashboardComponent,SearchPipe,ModalComponent, ConfirmationDialogComponent
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule,
    DashboardRoutingModule
  ],
  providers:[DashboardService,DataService],
  exports: [FormsModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  entryComponents: [ModalComponent,ConfirmationDialogComponent]

})
export class DashboardModule { }
