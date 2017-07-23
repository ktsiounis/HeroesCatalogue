import { HeroesCataloguePage } from './app.po';

describe('heroes-catalogue App', () => {
  let page: HeroesCataloguePage;

  beforeEach(() => {
    page = new HeroesCataloguePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
