import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    @Input() user: UserModel;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            if (res.get('id')) {
                this.loadUser(+res.get('id'));

            }
        });
    }

    loadUser(id: number) {
        this.userService.get(id).subscribe(res => {
            this.user = res;
        });
    }

}
