import {Component, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {Person} from './../person';
import {PersonService} from './../person.service';

@Component({
	selector:'person-details',
	templateUrl:'app/people/show_people/person-details.html',
})

export class PersonDetails implements OnInit
{
	person: Person;
	constructor(private _personService:PersonService,
				private _routeParams:RouteParams
				){}

	ngOnInit()
	{
		this.getPersonDetails();
	}

	getPersonDetails()
	{
		console.log("getting person " + this._routeParams.get('id'));
		let id = +this._routeParams.get('id'); //convert to number
		this._personService.getPerson(id).subscribe(
			data => { this.person = data });
	}
}