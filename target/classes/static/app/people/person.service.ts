import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { Router } from 'angular2/router';

import {Person} from './person';

@Injectable()
export class PersonService {
	people: Person[];
	constructor(private _http: Http,
				private _router:Router
				) 
	{
	}

	getPeople() {
		console.log("request sent to get people");
		return this._http.get('/getPeople').map((res: Response) => res.json());
	}

	getPerson(id: number) {
		console.log("getting person with id" + id);
		return this._http.get('/getPerson?id=' + id).map((res: Response) => res.json());
	}

	addPerson(firstName:string, lastName:string)
	{
		 console.log("inserting person with name " + firstName + " " + lastName);
		this._http.get('/savePerson?firstName=' + firstName + '&lastName=' + lastName)
			.map((res: Response) => res.json())
			 .subscribe(
			 err => this.logError(err),
			 () => console.log('Random Quote Complete')
			 );
	}

	addPersonPost(firstName:string, lastName:string)
	{
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		console.log("post person");
		this._http.post('/savePersonPost', "firstName="+firstName+"&lastName="+lastName,{
			headers: headers
		})
			.map(res => res.json())
			.subscribe(
			err => this.logError(err),
			() => console.log('Authentication Complete')
			);
	}

	logError(err) {
		console.error('There was an error: ' + err);
	}
}