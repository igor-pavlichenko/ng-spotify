import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../models/artist';

@Component({
	selector: 'search',// tslint:disable-line
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	searchStr: string;
	searchResult: Artist[];

	constructor(private spotifyService: SpotifyService) {

	}

	ngOnInit() {
	}

	searchMusic() {
		this.spotifyService.searchMusic(this.searchStr).subscribe(response => {
			this.searchResult = response.artists.items;
		});
	}

}
