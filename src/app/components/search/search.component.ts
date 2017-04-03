import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'search',// tslint:disable-line
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	searchStr: string;

	constructor() { }

	ngOnInit() {
	}

	searchMusic() {
		console.log(this.searchStr);
	}

}
