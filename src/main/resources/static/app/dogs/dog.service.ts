import {Injectable} from 'angular2/core';

import {Dog} from './dog';
import {DOGS} from './mock-dogs';
@Injectable()
export class DogService
{
	getDogs()
	{
		return Promise.resolve(DOGS);		
	}
}