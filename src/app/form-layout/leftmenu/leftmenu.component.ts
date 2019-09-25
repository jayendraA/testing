import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    selector: 'app-leftmenu',
    templateUrl: './leftmenu.component.html',
    styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

    constructor(private route: ActivatedRoute,private router: Router) {}

    ngOnInit() {
    }
    logout(){
        this.router.navigate(['logout']);

    }
}

