import {Component, OnInit} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {Dog} from './../dog';
import {DogService} from './../dog.service';

@Component({
	selector:'show-dogs',
	templateUrl: 'app/dogs/show_dogs/show-dogs.html',
	providers:[DogService]
})
export class ShowDogsComponent implements OnInit
{
	dogs: Dog[];
	constructor(private _dogService:DogService,
				private _title:Title){}
	getDogs()
	{
		this._dogService.getDogs()
			.then(dogs => this.dogs = dogs);
	}

	ngOnInit()
	{
		this._title.setTitle("Dogs");
		this.getDogs();
	}
}