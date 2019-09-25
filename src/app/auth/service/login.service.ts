import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login(obj){
 
    return this.http.post("https://reqres.in/api/login", obj)
        .pipe(map(res => res));
}
}
