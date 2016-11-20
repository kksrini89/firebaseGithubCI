import { FirebaseGithubCIPage } from './app.po';

describe('firebase-github-ci App', function() {
  let page: FirebaseGithubCIPage;

  beforeEach(() => {
    page = new FirebaseGithubCIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
