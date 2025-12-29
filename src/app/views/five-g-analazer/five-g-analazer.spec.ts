import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveGAnalazer } from './five-g-analazer';

describe('FiveGAnalazer', () => {
  let component: FiveGAnalazer;
  let fixture: ComponentFixture<FiveGAnalazer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiveGAnalazer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveGAnalazer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
