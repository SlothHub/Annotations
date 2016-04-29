import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Person} from './../person';
import {PersonService} from './../person.service';
import {Router} from 'angular2/router';

@Component({
	selector:'add-person',
	templateUrl:'app/people/add_person/add-person.html',
})

export class AddPersonComponent
{
	active = true;
	submitted = false;
	//person = new Person(null,"","");
	constructor(private _personService:PersonService,
				private _router:Router
				){}

	

	onSubmit(firstName:string, lastName:string)
	{
		//this.submitted=true;
		//console.log(this.form.value)
		console.log(firstName);
		console.log(lastName);
		console.log("test");
		this._personService.addPersonPost(firstName, lastName);
		//Goes to show people page
		this._router.navigate(['ShowPeople']);
	}

	test()
	{
		//this.person = new Person(null, "asdasd", "jjjj");
	}
}  