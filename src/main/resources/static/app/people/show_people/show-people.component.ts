import {Component, OnInit} from 'angular2/core';
import {PersonService} from './../person.service';
import {AddPersonComponent} from './../add_person/add-person.component';
import {Person} from './../person';
import { Router } from 'angular2/router';
@Component({
	selector:'show-people',
	templateUrl: 'app/people/show_people/show-people.html',
	// styleUrls: ['app/people/show_people/show-people.component.css']
})

export class ShowPeopleComponent implements OnInit
{
	 private people: Person[]
	 constructor(private _personService: PersonService,
				 private _router:Router
				) { }

	getPeople()
	{
		this._personService.getPeople()
			.subscribe(data => { this.people = data });
	}

	ngOnInit()
	{
		console.log("getting people");
		this.getPeople();
	}

	gotoDetail(person:Person)
	{
		console.log(person);
		let link = ['PeopleDetails', { id: person.id }];
		this._router.navigate(link);
	}
}