import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStyle } from './custom-style';

describe('CustomStyle', () => {
  let component: CustomStyle;
  let fixture: ComponentFixture<CustomStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomStyle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
