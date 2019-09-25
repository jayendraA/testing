import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {
email:string;

private messageSource = new BehaviorSubject('default message');
currentMessage = this.messageSource.asObservable();
  //  receivedFilter: EventEmitter<string>;

  constructor() { 
    //         this.receivedFilter = new EventEmitter<string>();
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}