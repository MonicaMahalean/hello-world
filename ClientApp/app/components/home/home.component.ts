import {Component, Inject, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Account} from "./account";
import {AccountService} from "./account.service";
import {AbstractControl, FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	accounts: Account[] = [];
	userForm: FormGroup;
	name: AbstractControl;
	orgName: AbstractControl;
	
	ngOnInit(): void {
		this.initializationFrom()
	}

	constructor(private accountService: AccountService, private formBuilder: FormBuilder) {
	}

	private initializationFrom() {
		this.userForm = this.formBuilder.group({
			'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
			'orgName': 'Organization Name'
		});
		this.name = this.userForm.controls['name'];
		this.orgName = this.userForm.controls['orgName'];
		
		this.accountService.GetAccount().subscribe(
			(resp: Account[] | any) => {
				if (resp) {
					this.accounts = resp;
				}
			}
		);
	}

	public async onSubmit(values: Object) {
		if (this.userForm.valid){
			console.log(this.userForm.controls);
		} else {
			console.log("error");
		}
	}
}

