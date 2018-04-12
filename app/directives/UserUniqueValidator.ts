import {Validator, NG_ASYNC_VALIDATORS, AbstractControl} from "@angular/forms";
import {Http} from "@angular/http";
import {Directive} from "@angular/core";
/**
 * Created by st13131 on 4/12/2018.
 */
@Directive({
    selector:   '[userUniqueValid][formControlName],[userUniqueValid][ngModel]',
    providers: [{provide:NG_ASYNC_VALIDATORS,
        useExisting: UserUniqueValidator, multi: true}]
})

export class UserUniqueValidator implements Validator
{
    constructor( private http: Http) {}

    validate(c: AbstractControl): Promise<{[key: string]: any}> {
        const user = c.value;
        return new Promise(resolve =>
            this.http.get("checkUserUnique", {params:{user}})
                .map(response => response.json())
                .subscribe(res =>
                    res?resolve(null):resolve({userUniqueValid:false})));
    }
}
