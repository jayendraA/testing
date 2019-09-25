import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) { }
  apiURL='http://jsonplaceholder.typicode.com/users';
  results:any;

  user_data(){
    return this.http.get(this.apiURL)
        .pipe(map(res => res));
}

users_data():Observable<any>{
  return this.http.get<any>(this.apiURL);
  }
  

// user_data() {
//     let promise = new Promise((resolve, reject) => {
     
//       this.http.get(this.apiURL)
//         .toPromise()
//         .then(
//           res => { // Success
//         this.results =  res;
//           resolve(res);
//           },
//           msg => { // Error
//           reject(msg);
//           }
//         );
//     });
//     return promise;
//   }
  }

