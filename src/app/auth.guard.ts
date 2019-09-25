import {Injectable} from '@angular/core';
import {Router, CanActivate, CanActivateChild} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) {}
    canActivate() {
        if (sessionStorage.getItem("token") != null && sessionStorage.getItem("token") !='') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

    canActivateChild() {
        if (sessionStorage.getItem("token")) {      
            this.router.navigate(['/dashboard']);
            return false;
        }
        return true;
      
    }
}
