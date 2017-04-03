import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
	selector: 'search',// tslint:disable-line
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	searchStr: string;

	constructor(private spotifyService: SpotifyService) {

	}

	ngOnInit() {
	}

	searchMusic() {
		this.spotifyService.searchMusic(this.searchStr).subscribe(response => {
			console.log(response);
		});
	}

}
