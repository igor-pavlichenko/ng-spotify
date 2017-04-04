import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../models/artist';
import { Album } from '../../models/album';

@Component({
	selector: 'album',// tslint:disable-line
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
	id: string;
	album: Album;

	constructor(
		private spotifyService: SpotifyService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.params
			.map(params => params['id']) // get current album's id from the url bar
			.subscribe(id => {
				// acquire the album
				this.spotifyService.getAlbum(id)
					.subscribe(album => {
						this.album = album;
					});

			});
	}

}
