import { SportbikePage } from './app.po';

describe('sportbike App', function() {
  let page: SportbikePage;

  beforeEach(() => {
    page = new SportbikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
