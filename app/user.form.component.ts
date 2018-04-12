import {Component} from "@angular/core";
import {User} from "./model/User";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
/**
 * Created by st13131 on 4/12/2018.
 */
@Component({
    selector: 'userform',
    templateUrl: 'app/user.form.component.html',
    styles: [`
    input.ng-touched.ng-invalid {
        background-color: #ffe8f1;
    }
`]

})

export class UserFormComponent {
    user:User = new User();

    constructor(private http:Http, private router: Router) {}

    onSubmit() {
        this.http.post("users", this.user).subscribe(res=>{
            this.router.navigateByUrl("");
        });
    }
}
