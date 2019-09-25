import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../directive/must-match.validator';
import { LoginService } from '../../service/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../dashboard/service/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userdata_obj: any = {};
  loginForm: FormGroup;
  message: string;
  releaseLoginData: Subscription;
  releasBehaviourSubject:Subscription;
  Is_submitted = false;
  constructor(
    private data: DataService,
    private myService: LoginService,
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnDestroy() {
    if (this.releaseLoginData) {
      this.releaseLoginData.unsubscribe();
    }
    if (this.releasBehaviourSubject) {
      this.releasBehaviourSubject.unsubscribe();
    }
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get ValidateFields() { return this.loginForm.controls; }

  onSubmit() {
    this.Is_submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    // this.data.changeMessage(this.userdata['email'])
    this.data.changeMessage("Hello from Sibling")

    this.releasBehaviourSubject = this.data.currentMessage.subscribe(message => this.message = message,
      err => {
      alert("somthing went wrong!!");
       },
     () =>{
         alert('done');
       })
    console.log(this.message)


    this.releaseLoginData = this.myService.login(this.userdata_obj).subscribe(
      (res: any) => {
      if (res['token'] !== null) {
        sessionStorage.setItem('token', res.token);
        this.router.navigate(['dashboard']);
      }
    },
    err => {
      alert("somthing went wrong!!");
       },
     () =>{
         alert('done');
       }

    
    );

  }

}
