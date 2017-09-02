import { SliderAngular2Page } from './app.po';

describe('slider-angular2 App', () => {
  let page: SliderAngular2Page;

  beforeEach(() => {
    page = new SliderAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
