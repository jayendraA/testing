import { Component, OnInit,Inject,OnDestroy } from '@angular/core';
import {DashboardService} from '../../service/dashboard.service'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DataService } from "../../../dashboard/service/data.service";
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { promise } from 'protractor';
import { resolve } from 'url';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  message:string
  constructor(private data: DataService,public dashboard_service:DashboardService,public dialog: MatDialog) { }
  
  email:string;
  userdata$:Observable<any>;
  userdata_arr:any;
  query;
  shortWord='shortWord';
  cities_obj$ = Observable
  .of([
    {name: 'Los Angeles', population: '3.9 million', elevation: '233′'},
    {name: 'New York', population: '8,4 million', elevation: '33′'},
    {name: 'Chicago', population: '2.7 million', elevation: '594′'},
  ])
  .delay(1000);
  word$ = Observable.of('Abibliophobia');
  releaseUserData: Subscription;
  releaseModelData: Subscription;

  ngOnDestroy() {
    if (this.releaseUserData) {
      this.releaseUserData.unsubscribe();
    }
    if(this.releaseModelData){
      this.releaseModelData.unsubscribe();
    }
  }
  ngOnInit() {
   
    // this.releaseUserData=this.data.currentMessage.subscribe(data => {
    //   console.log("behavuiour vaL",data);
    // },err => {
    //   alert("somthing went wrong!!");
    //    },
    //  () =>{
    //      alert('done');
    //    })
    

    this.userdata$=this.dashboard_service.users_data();
      console.log(this.userdata$);
      
      
    this.dashboard_service.user_data()
    .toPromise()
    .then(res => {
      this.userdata_arr = res;
    })
    .catch(err => { 
     });

//for each loop
    //  let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
    //  let playStore = [];  

    //  apps.forEach(function(item){  
    //   playStore.push(item)  
    // });  
    // console.log(JSON.stringify(playStore))

     /* ---------------------Promise--------------------------------------------
        console.log("Person1: shows Ticket");
        console.log("Person2: shows Ticket");
        const wifeTicketBringing=new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve('Ticket');
          },3000);
        
        });

      const getPopcorn=wifeTicketBringing.then((t)=>{
        console.log(`Wife:I have tickets`);
        console.log(`Husband:We should go in`);
        console.log(`Wife:No i am Hungry`);
        return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
      })
      const getButter=getPopcorn.then((t)=>{
        console.log(`Husband:I got some popcorn`);
        console.log(`Husband:We should go in`);
        console.log(`Wife:I Need butter on my popcorn`);
      return new Promise((resolve,reject)=>resolve(`${t} butter`));
      })
          getButter.then((t)=>console.log(`${t}`));
          console.log("Person4: shows Ticket");
          console.log("Person5: shows Ticket");
      ---------------------Promise--------------------------------------------  */

      /* ---------------------Asycn Await--------------------------------------------
     console.log("Person1: shows Ticket");
     console.log("Person2: shows Ticket");
const Premovie=async()=>{
  const wifeTicketBringing=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Ticket');
    },3000);
  });
  
  const addbutter=new Promise((resolve,reject)=>resolve(`Butter`));
  const getPopcorn=new Promise((resolve,reject)=>resolve(`Popcorn`));

    let ticket=await wifeTicketBringing;

    console.log(`Wife:I have ${ticket}`);
    console.log(`Husband:We should go in`);
    console.log(`Wife:No i am Hungry`);

    let popcorn=await getPopcorn;

    console.log(`Husband:I got some ${popcorn}`);
    console.log(`Husband:We should go in`);
    console.log(`Wife:I Need butter on my popcorn`);

    let butter=await addbutter;

    console.log(`Husband:I got some ${butter}`);
    console.log(`Husband:We should go in`);
    console.log(`Wife:Lets go we are getting late`);

    return ticket;

}
      Premovie().then((m)=>(console.log(`Person3: shows ${m}`)))
      console.log("Person4: shows Ticket");
      console.log("Person5: shows Ticket");
     ---------------------Asycn Await-------------------------------------------- */
  }

  
  

  openDialog(userid): void {
    let user_record = this.userdata_arr.find(x => x['id'] == userid);
    const dialogRef = this.dialog.open(ModalComponent, {
      // width: '250px',
      data: {user_record: user_record,userdata:this.userdata_arr}
    }); 

    this.releaseModelData=dialogRef.afterClosed().subscribe(result => {
      
    },
    err => {
      alert("somthing went wrong!!");
       },
     () =>{
        //  alert('done');
       });
  }
  
  delete(userid): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Are you sure you want to delete?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let index = this.userdata_arr.findIndex(dev => dev.id == userid);
        this.userdata_arr.splice(index, 1);
      }
    },err => {
      alert("somthing went wrong!!");
       },
     () =>{
        //  alert('done');
       });
  }

  
  }


