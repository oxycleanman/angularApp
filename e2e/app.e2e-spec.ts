import { MAReturnsPage } from './app.po';

describe('ma-returns App', () => {
  let page: MAReturnsPage;

  beforeEach(() => {
    page = new MAReturnsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
