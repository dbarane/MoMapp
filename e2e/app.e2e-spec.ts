import { MoMappPage } from './app.po';

describe('mo-mapp App', () => {
  let page: MoMappPage;

  beforeEach(() => {
    page = new MoMappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
