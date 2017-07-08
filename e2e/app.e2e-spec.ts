import { LearnAngular4Page } from './app.po';

describe('learn-angular4 App', function() {
  let page: LearnAngular4Page;

  beforeEach(() => {
    page = new LearnAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
