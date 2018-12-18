import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: UserModel[];

    constructor(private userService: UserService) {
        this.users = [];
    }

    ngOnInit() {


    }

    addUser(id: number) {
        this.userService.get(id).subscribe(res => {
            console.log(res);
            this.users.push(res);
        });
    }

}
