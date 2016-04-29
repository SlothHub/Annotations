import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Title} from 'angular2/platform/browser';
import { Router } from 'angular2/router';

import {PersonService} from './people/person.service';
import {ShowPeopleComponent} from './people/show_people/show-people.component';
import {PersonDetails} from './people/show_people/person-details';
import {AddPersonComponent} from './people/add_person/add-person.component';
import {TestComponent} from './test/test-component';

import {ShowDogsComponent} from './dogs/show_dogs/show-dogs.component';

@Component({
	selector: 'my-app',
	template:
			`	
			<nav>
			<a [routerLink]="['ShowPeople']">ShowPeople</a>
			<a [routerLink]="['Test']">Test</a>
			<a [routerLink]="['Dogs']">Dogs</a>
			<a [routerLink]="['AddPerson']">AddPerson</a>
			</nav>
			<router-outlet></router-outlet>
			`,
	directives: [ ROUTER_DIRECTIVES],
	providers: [PersonService, ROUTER_PROVIDERS, Title]
})

@RouteConfig([
	{
		path: '/showPeople',
		name: 'ShowPeople',
		component: ShowPeopleComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name:'PeopleDetails',
		component:PersonDetails
	},
	{
		path: '/test/',
		name: 'Test',
		component: TestComponent
	},
	{
		path: '/dogs/',
		name: 'Dogs',
		component: ShowDogsComponent
	},
	{
		path: '/addPerson/',
		name: 'AddPerson',
		component: AddPersonComponent
	}

])

export class AppComponent
{
	constructor(private _router: Router, private _title: Title) 
	{
		this._router.subscribe((url) => 
		{ //Fires on every URL change
			this._title.setTitle(this.getCurrentTitle());
		});
	}

	getCurrentTitle()
	{
		return this._router.currentInstruction.component.routeName;
	}
}