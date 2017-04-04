import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
	private searchUrl: string;

	constructor(private http: Http) {

	}

	searchMusic(str: string, type = 'artist') {
		this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str
																	+ '&offset=0'
																	+ '&limit=20'
																	+ '&type=' + type
																	+ '&market=US';

		return this.http.get(this.searchUrl)
						.map(result => result.json());
	}

	getArtist(id: string) {
		const artistUrl = 'https://api.spotify.com/v1/artists/' + id;

		return this.http.get(artistUrl)
						.map(result => result.json());
	}

	getAlbums(artistId: string) {
		const albumsUrl = 'https://api.spotify.com/v1/artists/'
						+ artistId + '/albums';

		return this.http.get(albumsUrl)
						.map(result => result.json());
	}

}
