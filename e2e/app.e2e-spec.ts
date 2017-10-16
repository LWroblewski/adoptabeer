import { AdoptabeerPage } from './app.po';

describe('adoptabeer App', () => {
  let page: AdoptabeerPage;

  beforeEach(() => {
    page = new AdoptabeerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
