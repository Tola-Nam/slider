import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowPage } from './slide-show-page';

describe('SlideShowPage', () => {
  let component: SlideShowPage;
  let fixture: ComponentFixture<SlideShowPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideShowPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideShowPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
