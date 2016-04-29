import {Component, OnInit} from 'angular2/core';
import {PersonService} from './../person.service';
import {AddPersonComponent} from './../add_person/add-person.component';
import {Person} from './../person';
import { Router } from 'angular2/router';
@Component({
	selector:'show-people',
	templateUrl: 'app/people/show_people/show-people.html',
	styles:
	[
		`
		.selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .people {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .people li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .people li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .people li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .people .text {
      position: relative;
      top: -3px;
    }
    .people .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
		`
	]
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
		console.log("changes");
		this.getPeople();
	}

	gotoDetail(person:Person)
	{
		console.log(person);
		let link = ['PeopleDetails', { id: person.id }];
		this._router.navigate(link);
	}
}