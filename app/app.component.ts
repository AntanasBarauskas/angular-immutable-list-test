import { Component } from '@angular/core';
import * as Immutable from 'immutable';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1><div *ngFor="let item of immutableItems">{{ item }}</div>'
})
export class AppComponent {

	items = ['Item 1', 'Item 2', 'Item 3'];
	immutableItems = null;

	ngOnInit() {
		console.log('Starting component');
		this.immutableItems = Immutable.fromJS(this.items);
	}


}