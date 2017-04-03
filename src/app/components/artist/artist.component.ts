import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';


@Component({
	selector: 'artist',// tslint:disable-line
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
	id: string;
	artist: Artist;
	albums: Album[];

	constructor(
		private spotifyService: SpotifyService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.subscribe(id => {
				this.spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					});
			});
	}

}
