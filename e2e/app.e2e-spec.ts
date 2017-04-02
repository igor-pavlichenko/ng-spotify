import { SpotifyNgPage } from './app.po';

describe('spotify-ng App', () => {
  let page: SpotifyNgPage;

  beforeEach(() => {
    page = new SpotifyNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
