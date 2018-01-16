import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {Inject, Injectable} from "@angular/core";

import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
	constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
		
	}

	public GetAccount(): Observable<Account[]> {
		return this.http.get(this.baseUrl + 'api/account/getaccounts')
			.map((value: Response) => value.json());
	}
}